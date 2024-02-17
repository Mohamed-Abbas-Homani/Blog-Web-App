package main

import (
	"github.com/Mohamed-Abbas-Homani/gogingormapi/controllers"
	"github.com/Mohamed-Abbas-Homani/gogingormapi/initializers"
	"github.com/Mohamed-Abbas-Homani/gogingormapi/middlewares"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectToDB()
}

func main() {
	r := gin.Default()
	r.POST("/signup", controllers.Signup)
	r.POST("/login", controllers.Login)
	
	r.GET("/users/:id", middlewares.Auth, controllers.GetUserByID)
	r.DELETE("/users/:id", middlewares.Auth, controllers.DeleteUserByID)
	r.POST("/posts", middlewares.Auth, controllers.CreatePost)
	r.GET("/posts", middlewares.Auth, controllers.GetPosts)
	r.GET("/posts/:id", middlewares.Auth, controllers.GetPostByID)
	r.PUT("/posts/:id", middlewares.Auth, controllers.UpdatePost)
	r.DELETE("/posts/:id", middlewares.Auth, controllers.DeletePost)
	r.Run()
}
