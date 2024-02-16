package middlewares

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	jwt "github.com/golang-jwt/jwt/v5"
)

func Auth(c *gin.Context) {
	tokenString := c.GetHeader("Authorization")
	token, err := validateJWT(tokenString)
	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	if !token.Valid {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	// claims := token.Claims.(jwt.MapClaims)
	// if body.id != uint(claims["userID"].(float64)) {
	// 	c.AbortWithStatus(http.StatusUnauthorized)
	// }

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
