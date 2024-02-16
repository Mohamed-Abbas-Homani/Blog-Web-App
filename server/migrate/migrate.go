package main

import (
	"github.com/Mohamed-Abbas-Homani/gogingormapi/initializers"
	"github.com/Mohamed-Abbas-Homani/gogingormapi/models"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectToDB()
}

func main() {
	initializers.DB.AutoMigrate(&models.User{}, &models.Post{}, &models.Comment{})
}