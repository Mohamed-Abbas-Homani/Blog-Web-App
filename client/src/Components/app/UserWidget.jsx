import React from "react";
import useUserInfo from "../../hooks/useUserInfo";
import UserImage from "../ui/UserImage";
import { Box, IconButton, Typography } from "@mui/material";
import FlexBetween from "../ui/Fb";
import Widget from "../ui/Widget";
import { EditOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const UserWidget = () => {
  const user = useUserInfo();
  const navigate = useNavigate();
  return (
    <Widget width="89%" m="2rem 1rem">
      <Typography variant="h3" mb="0.3rem">Profile</Typography>
      <FlexBetween>
        <Box
          justifyContent="start"
          alignItems="center"
          display="flex"
          gap="1rem"
        >
          <UserImage image={user.ProfileImageURL} />
          <Typography textAlign="center" variant="h5">
            {user.Username}
          </Typography>
        </Box>
        <IconButton onClick={() => navigate(`/profiles/${user.ID}`)}>
          <EditOutlined />
        </IconButton>
      </FlexBetween>
    </Widget>
  );
};

export default UserWidget;
