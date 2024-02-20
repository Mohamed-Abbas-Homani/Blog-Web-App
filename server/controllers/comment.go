package controllers

import (
	"net/http"
	"strconv"

	db "github.com/Mohamed-Abbas-Homani/gogingormapi/initializers"
	"github.com/Mohamed-Abbas-Homani/gogingormapi/models"
	"github.com/gin-gonic/gin"
)

func CreateComment(c *gin.Context) {
	var body struct {
		UserID  uint
		PostID  uint
		Content string
	}

	if err := c.Bind(&body); err != nil {
		c.IndentedJSON(
			http.StatusBadRequest,
			gin.H{"message": "Bad request."},
		)
		return
	}
	comment := &models.Comment{UserID: body.UserID, PostID: body.PostID, Content: body.Content}
	if db.DB.Create(&comment).Error != nil {
		c.IndentedJSON(
			http.StatusBadRequest,
			gin.H{"message": "Bad request."},
		)
		return
	}

	var comments []models.Comment
	if db.DB.Where("post_id = ?", body.PostID).Find(&comments).Error != nil {
		c.IndentedJSON(
			http.StatusBadRequest,
			gin.H{"comments": comments},
		)
		return
	}
	
	c.IndentedJSON(
		http.StatusCreated,
		gin.H{"comments": comments},
	)
}

func GetComments(c *gin.Context) {
	postIDStr := c.Param("id")
	postID, err := strconv.ParseUint(postIDStr, 10, 64)
	if err != nil {
		c.IndentedJSON(
			http.StatusBadRequest,
			gin.H{"message": "Bad request."},
		)
		return
	}
	var comments []models.Comment
	if db.DB.Where("post_id = ?", postID).Find(&comments).Error != nil {
		c.IndentedJSON(
			http.StatusBadRequest,
			gin.H{"comments": nil},
		)
		return
	}
	
	c.IndentedJSON(
		http.StatusCreated,
		gin.H{"comments": comments},
	)
}