import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import useUserInfo from "../../hooks/useUserInfo";
import UserImage from "../ui/UserImage";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
  const user = useUserInfo(comment.UserID);

  return (
    <Box width="100%" m="1rem 1rem">
      <Link style={{ textDecoration: "none" }} to={`/profiles/${user.ID}`}>
        <Box width="100%" display="flex" alignItems="center" gap="1rem">
          <UserImage image={user.ProfileImageURL} size={30} />
          <Typography variant="h6">{user.Username}</Typography>
        </Box>
      </Link>
      <p>{comment.Content}</p>
      <Divider />
    </Box>
  );
};

export default Comment;
