package middlewares

import "github.com/gin-gonic/gin"

func CorsMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        // Set CORS headers
        c.Header("Access-Control-Allow-Origin", "*")
        c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, Authorization")

        // Handle OPTIONS requests (preflight requests)
        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(200)
            return
        }

        // Continue processing the request
        c.Next()
    }
}