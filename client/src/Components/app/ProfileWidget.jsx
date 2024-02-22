import {
  Box,
  Button,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import UserImage from "../ui/UserImage";
import FlexBetween from "../ui/Fb";
import Dropzone from "react-dropzone";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import useUpdateAccount from "../../hooks/useUpdateAccount";

const ProfileWidget = ({ user, myProfile }) => {
  const [update, setUpdate] = useState({ username: "", picture: "" });
  const { palette } = useTheme();
  const updateAccount = useUpdateAccount(update, setUpdate, user.ID);
  return (
    <>
      <FlexBetween
        p="2rem"
        m="2rem"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        borderRadius="0.75rem"
        width="100%"
        gap="2rem"
      >
        <Box
          p="2rem"
          backgroundColor={palette.background.alt}
          display="flex"
          justifyContent="start"
          alignItems="center"
          borderRadius="0.75rem"
          width="50%"
          gap="2rem"
        >
          <UserImage image={user.ProfileImageURL} size={300} />
          <Typography variant="h2">{user.Username}</Typography>
        </Box>
        {myProfile && (
          <Box
            p="2rem"
            backgroundColor={palette.background.alt}
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
            borderRadius="0.75rem"
            width="50%"
            gap="2rem"
          >
            <Typography variant="h3">Update Profile</Typography>
            <FlexBetween
              alignItems="center"
              width="100%"
              flexDirection="column"
              gap="1rem"
            >
              <InputBase
                placeholder="Username"
                onChange={(e) =>
                  setUpdate({ ...update, username: e.target.value })
                }
                value={update.username}
                sx={{
                  textAlign: "center",
                  width: "89%",
                  backgroundColor: palette.neutral.light,
                  borderRadius: "2rem",
                  padding: "1rem 2rem",
                }}
              />
              <Box
                border={`2px solid ${palette.neutral.medium}`}
                borderRadius="2rem"
                mt="1rem"
                p="1rem"
                width="89%"
                gap="1rem"
              >
                <Dropzone
                  acceptedFiles=".jpg,.jpeg,.png"
                  multiple={false}
                  onDrop={(acceptedFiles) =>
                    setUpdate({ ...update, picture: acceptedFiles[0] })
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <FlexBetween>
                      <Box
                        {...getRootProps()}
                        border={`2px dashed ${palette.primary.main}`}
                        p="1rem"
                        width="100%"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!update.picture ? (
                          <p>Add the new profile picture</p>
                        ) : (
                          <FlexBetween>
                            <Typography>{update.picture.name}</Typography>
                            <EditOutlined />
                          </FlexBetween>
                        )}
                      </Box>
                      {update.picture && (
                        <IconButton
                          onClick={() =>
                            setUpdate({ ...update, picture: null })
                          }
                          sx={{ width: "15%" }}
                        >
                          <DeleteOutlined />
                        </IconButton>
                      )}
                    </FlexBetween>
                  )}
                </Dropzone>
              </Box>
              {update.username && update.picture && (
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => updateAccount()}
                >
                  Update
                </Button>
              )}
            </FlexBetween>
          </Box>
        )}
      </FlexBetween>
    </>
  );
};

export default ProfileWidget;
