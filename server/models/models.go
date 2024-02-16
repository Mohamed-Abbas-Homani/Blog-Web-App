package models

import "gorm.io/gorm"

// The user model
type User struct {
	gorm.Model
	Username        string
	Email           string `gorm:"unique"`
	Password        string // hashed password
	ProfileImageURL string // URL to the profile image
}

// The post model
type Post struct {
	gorm.Model
	Title    string
	Body     string
	AuthorID uint
	Author   User   // Belongs To relationship with User
	ImageURL string // URL to the post image
}

// The comment model
type Comment struct {
	gorm.Model
	Content string
	UserID  uint
	User    User // Belongs To relationship with User
	PostID  uint
	Post    Post // Belongs To relationship with Post
}
