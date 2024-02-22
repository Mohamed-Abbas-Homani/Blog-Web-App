package controllers

import (
	"net/http"
	"path/filepath"
	"strconv"

	db "github.com/Mohamed-Abbas-Homani/gogingormapi/initializers"
	"github.com/Mohamed-Abbas-Homani/gogingormapi/models"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func CreatePost(c *gin.Context) {
	//Parsing form data including the image
	err := c.Request.ParseMultipartForm(10 << 20) // 10 MB max file size
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Failed to parse form"})
		return
	}

	title := c.Request.FormValue("title")
	body := c.Request.FormValue("body")
	authorIDStr := c.Request.FormValue("authorID")
	authorID, err := strconv.ParseUint(authorIDStr, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "User ID not specified"})
		return
	}
	postImage, imageHeader, err := c.Request.FormFile("post_image")
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Failed to get post image"})
		return
	}
	defer postImage.Close()

	// Create a unique filename for the profile image
	filename := uuid.New().String() + filepath.Ext(imageHeader.Filename)

	// Save the profile image to disk
	err = saveImage(postImage, "/home/mash/Projects/BlogWebApp/server/images/posts/"+filename)
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Failed to save post image"})
		return
	}
	//Creating
	post := &models.Post{
		Title: title,
		Body: body,
		AuthorID: uint(authorID),
		ImageURL: filename,
	}
	result := db.DB.Create(&post)
	if result.Error != nil {
		//Bad Response
		c.IndentedJSON(
			http.StatusBadRequest,
			gin.H{"message": "Bad request."},
		)
		return
	}

	//Response
	var posts []models.Post
	db.DB.Find(&posts)
	c.IndentedJSON(
		http.StatusCreated,
		gin.H{"posts": posts},
	)
}

func GetPosts(c *gin.Context) {
	//Getting Posts
	var posts []models.Post
	result := db.DB.Find(&posts)
	if result.Error != nil {
		//Bad Response
		c.IndentedJSON(
			http.StatusBadRequest,
			gin.H{"message": "Bad request."},
		)
		return
	}

	//Response
	c.IndentedJSON(
		http.StatusOK,
		gin.H{"posts": posts},
	)
}

func GetPostByID(c *gin.Context) {
	//Get Id from Params
	id := c.Param("id")
	//Get Post from DB
	var post models.Post
	result := db.DB.Find(&post, id)
	if result.RowsAffected == 0 {
		//Bad Response
		c.IndentedJSON(
			http.StatusNotFound,
			gin.H{"message": "Post not found"},
		)
		return
	}

	//Response
	c.IndentedJSON(
		http.StatusOK,
		gin.H{"post": post},
	)
}


func DeletePost(c *gin.Context) {
	//Getting ID from Params
	id := c.Param("id")
	//Deleting Post
	var post models.Post
	result := db.DB.Delete(&post, id)
	if result.RowsAffected == 0 {
		//Bad Response
		c.IndentedJSON(
			http.StatusNotFound,
			gin.H{"message": "Post not found"},
		)
		return
	}

		//Response
		var posts []models.Post
		db.DB.Find(&posts)
		c.IndentedJSON(
			http.StatusOK,
			gin.H{"posts": posts},
		)
}
