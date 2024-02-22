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
	//middlewares
	r.Static("/images/profiles", "./images/profiles")
    r.Static("/images/posts", "./images/posts")
	r.Use(middlewares.CorsMiddleware())

	//Authorization
	r.POST("/signup", controllers.Signup)
	r.POST("/login", controllers.Login)
	
	//User
	r.GET("/users", middlewares.Auth, controllers.GetUsers)
	r.PUT("/users/:id", middlewares.Auth, controllers.UpdateAccount)
	r.GET("/users/:id", middlewares.Auth, controllers.GetUserByID)
	r.DELETE("/users/:id", middlewares.Auth, controllers.DeleteUserByID)

	//Post
	r.POST("/posts", middlewares.Auth, controllers.CreatePost)
	r.GET("/posts", middlewares.Auth, controllers.GetPosts)
	r.GET("/posts/:id", middlewares.Auth, controllers.GetPostByID)
	r.DELETE("/posts/:id", middlewares.Auth, controllers.DeletePost)

	//Comment
	r.POST("/comments", middlewares.Auth, controllers.CreateComment)
	r.GET("/comments/:id", middlewares.Auth, controllers.GetComments)
	r.DELETE("/comments/:postID/:commentID", middlewares.Auth, controllers.DeleteComment)
	
	r.Run()
}
