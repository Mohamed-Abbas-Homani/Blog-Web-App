import React from "react";
import { usePosts } from "../../services/store";
import { Box } from "@mui/material";
import Post from "./Post";

const Posts = ({ userID }) => {
  const posts = usePosts();
  return (
    <Box width="89%" mr="1.8rem">
      {posts
        .filter((post) => (userID ? post.AuthorID == userID : true))
        .map((post) => (
          <Post post={post} key={post.ID} comments={!!!userID}/>
        ))}
    </Box>
  );
};

export default Posts;
