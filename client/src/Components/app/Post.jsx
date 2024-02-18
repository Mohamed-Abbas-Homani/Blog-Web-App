import React from "react";
import FlexBetween from "../ui/Fb";
import UserImage from "../ui/UserImage";
import { Box, Button, Divider, Typography } from "@mui/material";
import useUserInfo from "../../hooks/useUserInfo";
import Widget from "../ui/Widget";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const author = useUserInfo(post.AuthorID);
  return (
    <Widget width="100%" m="1rem" display="flex" justifyContent="center">
      <FlexBetween flexDirection="column" width="100%" gap="1rem">
        <Box width="94%">
          <FlexBetween>
            <Link style={{textDecoration:"none"}} to={`/profiles/${author.ID}`}>
              <Box width="100%" display="flex" alignItems="center" gap="1rem">
                <UserImage image={author.ProfileImageURL} />

                <Typography variant="h4">{author.Username}</Typography>
              </Box>
            </Link>

            <Button variant="contained">Comments</Button>
          </FlexBetween>
        </Box>
        <Box width="93%">
          <Typography ml="50%" variant="h5">
            {post.Title}
          </Typography>
          <p>{post.Body}</p>
        </Box>
        <Box>
          <img
            src={`http://localhost:3001/images/posts/${post.ImageURL}`}
            width="100%"
            height="auto"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          />
        </Box>
        <Divider sx={{ m: "1rem" }} />
      </FlexBetween>
    </Widget>
  );
};

export default Post;
