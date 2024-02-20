import React from "react";
import Navbar from "../Components/app/Navbar";
import { Box } from "@mui/material";
import UserWidget from "../Components/app/UserWidget";
import FlexBetween from "../Components/ui/Fb";
import CreatePost from "../Components/app/CreatePost";
import Posts from "../Components/app/Posts";
import Comments from "../Components/app/Comments";
const HomePage = () => {
  return (
    <Box width="100%" height="100%">
      <FlexBetween flexDirection="column">
        <Box width="100%">
          <Navbar />
        </Box>

        <Box
          flexDirection="row"
          display="flex"
          width="100%"
          justifyContent="space-between"
          gap="3rem"
        >
          <Box display="flex" justifyContent="center" width="20%" height="20%">
            <FlexBetween flexDirection="column" width="100%">
              <UserWidget />
            </FlexBetween>
          </Box>
          <Box display="flex" justifyContent="center" width="55%" height="100%">
            <FlexBetween flexDirection="column" width="100%">
              <CreatePost />
              <Posts />
            </FlexBetween>
          </Box>
          <Box display="flex" justifyContent="center" width="25%" height="50%">
            <Comments />
          </Box>
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default HomePage;
