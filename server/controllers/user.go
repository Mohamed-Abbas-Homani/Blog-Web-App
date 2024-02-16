package controllers

import (
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
	"time"

	db "github.com/Mohamed-Abbas-Homani/gogingormapi/initializers"
	"github.com/Mohamed-Abbas-Homani/gogingormapi/models"
	"github.com/gin-gonic/gin"
	jwt "github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

// Handler for user signup with profile image
func Signup(c *gin.Context) {
    // Parse form data including the image
	
    err := c.Request.ParseMultipartForm(10 << 20) // 10 MB max file size
    if err != nil {
        c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Failed to parse form"})
        return
    }

    // Extract form values
    username := c.Request.FormValue("username")
    email := c.Request.FormValue("email")
    password := c.Request.FormValue("password")
    profileImage, imageHeader, err := c.Request.FormFile("profile_image")
    if err != nil {
        c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Failed to get profile image"})
        return
    }
    defer profileImage.Close()

    // Create a unique filename for the profile image
    filename := uuid.New().String() + filepath.Ext(imageHeader.Filename)

    // Save the profile image to disk
    err = saveImage(profileImage, "path/to/profile/images/"+filename)
    if err != nil {
        c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Failed to save profile image"})
        return
    }

    // Hash the password before saving it
    hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
    if err != nil {
        c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
        return
    }

    // Create the user record
    newUser := models.User{
        Username:        username,
        Email:           email,
        Password:        string(hashedPassword),
        ProfileImageURL: filename,
    }

    // Save the user record to the database
    if err := db.DB.Create(&newUser).Error; err != nil {
        c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
        return
    }

    c.IndentedJSON(
		http.StatusOK,
		gin.H{"message": "User signed up successfully"},
	)
}

// Function to save uploaded image to disk
func saveImage(file multipart.File, filePath string) error {
    // Create a new file
    f, err := os.Create(filePath)
    if err != nil {
        return err
    }
    defer f.Close()

    // Copy the file content to the new file
    _, err = io.Copy(f, file)
    if err != nil {
        return err
    }

    return nil
}

func Login(c *gin.Context) {
	// Getting Email/Pass from req body
	var body struct {
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to read body"})
		return
	}

	// Look up requested user
	var user models.User
	result := db.DB.First(&user, "email = ?", body.Email)
	if result.RowsAffected == 0 {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
		return
	}

	// Compare the sent-in password with the saved user password hash
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
		return
	}

	// Generate JWT token
	tokenString, err := createJWT(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Login failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"userID": user.ID, "token": tokenString})
}


func createJWT(id uint) (string, error) {
	claims := &jwt.MapClaims{
		"ExpiresAt":     jwt.NewNumericDate(time.Now().Add(time.Hour * 24 * 30)),
		"userID": id,
	}
	secret := os.Getenv("JWT_SECRET")
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	return token.SignedString([]byte(secret))
}