package middlewares

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	jwt "github.com/golang-jwt/jwt/v5"
)

func Auth(c *gin.Context) {
	tokenString :=  c.GetHeader("Authorization")
	var body struct {
		id uint
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to read body"})
		return
	}

	if tokenString == "" {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	token, err := validateJWT(tokenString)
	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	if !token.Valid {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	claims := token.Claims.(jwt.MapClaims)
	if body.id != claims["userID"] {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	c.Next()
}

func validateJWT(tokenString string) (*jwt.Token, error) {
	secret := os.Getenv("JWT_SECRET")
	return jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		return []byte(secret), nil
	})
}