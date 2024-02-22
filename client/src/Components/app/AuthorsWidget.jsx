import React from "react";
import Widget from "../ui/Widget";
import FlexBetween from "../ui/Fb";
import { Box, Typography } from "@mui/material";
import useGetUsers from "../../hooks/useGetUsers";
import { useUser } from "../../services/store";
import UserImage from "../ui/UserImage";
import { Link } from "react-router-dom";

const AuthorsWidget = () => {
  const users = useGetUsers();
  const currentUser = useUser();
  return (
    <Widget width="89%">
      <Typography variant="h3">Authors</Typography>
      <FlexBetween flexDirection="column">
        {users.map(
          (user) =>
            user.ID != currentUser && (
              <Box
                key={user.ID}
                display="flex"
                justifyContent="start"
                alignItems="center"
                width="100%"
                m="1rem 0"
                gap="1rem"
              >
                <UserImage image={user.ProfileImageURL} />
                <Link to={`/profiles/${user.ID}`} style={{textDecoration:"none"}}>{user.Username}</Link>
              </Box>
            )
        )}
      </FlexBetween>
    </Widget>
  );
};

export default AuthorsWidget;
