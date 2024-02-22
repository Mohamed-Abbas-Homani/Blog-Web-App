import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import useUserInfo from "../../hooks/useUserInfo";
import UserImage from "../ui/UserImage";
import { Link } from "react-router-dom";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import FlexBetween from "../ui/Fb";
import useDeleteComment from "../../hooks/useDeleteComment";
import { useUser } from "../../services/store";

const Comment = ({ comment }) => {
  const user = useUserInfo(comment.UserID);
  const currentUser = useUser();
  const deleteComment = useDeleteComment(comment.ID, comment.PostID);
  return (
    <Box width="100%" m="1rem 1rem">
      <FlexBetween>
        <Link style={{ textDecoration: "none" }} to={`/profiles/${user.ID}`}>
          <Box width="100%" display="flex" alignItems="center" gap="1rem">
            <UserImage image={user.ProfileImageURL} size={30} />
            <Typography variant="h6">{user.Username}</Typography>
          </Box>
        </Link>
        {currentUser == user.ID && (
          <IconButton onClick={() => deleteComment()}>
            <DeleteOutlineOutlined />
          </IconButton>
        )}
      </FlexBetween>
      <p>{comment.Content}</p>
      <Divider />
    </Box>
  );
};

export default Comment;
