package controllers

import (
	"net/http"

	db "github.com/Mohamed-Abbas-Homani/gogingormapi/initializers"
	"github.com/Mohamed-Abbas-Homani/gogingormapi/models"
	"github.com/gin-gonic/gin"
)

func CreatePost(c *gin.Context) {
	//Binding
	var body struct {
		Title string
		Body  string
	}
	c.Bind(&body)

	//Creating
	post := &models.Post{Title: body.Title, Body: body.Body}
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
	c.IndentedJSON(
		http.StatusCreated,
		gin.H{"post": post},
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

func UpdatePost(c *gin.Context) {
	//Getting ID from Params
	id := c.Param("id")
	//Getting data from req body
	var body struct {
		Title string
		Body  string
	}
	c.Bind(&body)
	//Getting Post from Db
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

	//Update the post
	db.DB.Model(&post).Updates(models.Post{
		Title: body.Title,
		Body:  body.Body,
	})

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
	c.IndentedJSON(
		http.StatusOK,
		gin.H{"message": "Post deleted"},
	)
}
