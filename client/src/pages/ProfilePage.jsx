import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import useUserInfo from "../hooks/useUserInfo";
import { useUser } from "../services/store";
import Navbar from "../Components/app/Navbar";
import { useParams } from "react-router-dom";
import ProfileWidget from "../Components/app/ProfileWidget";
import Posts from "../Components/app/Posts";
import Widget from "../Components/ui/Widget";

const ProfilePage = () => {
  let userID = useUser();
  const { profileID } = useParams();
  const myProfile = profileID == userID;
  userID = profileID == userID ? userID : profileID;
  const user = useUserInfo(userID);
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="start"
    >
      <Box width="100%">
        <Navbar />
      </Box>
      <ProfileWidget user={user} myProfile={myProfile} />
      <Widget width="89%">
        <Typography variant="h3">
          {myProfile ? "My Posts" : user.Username + " Posts"}
        </Typography>
        <Posts userID={user.ID}/>
      </Widget>
    </Box>
  );
};

export default ProfilePage;
