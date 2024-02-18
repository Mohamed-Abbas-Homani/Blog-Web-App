import React, { useState } from "react";
import Widget from "../ui/Widget";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "../ui/Fb";
import Dropzone from "react-dropzone";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import useCreatePost from "../../hooks/useCreatePost";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", body: "", picture: null });
  const { palette } = useTheme();
  const createPost = useCreatePost(post, setPost)
  return (
    <Widget width="89%" m="2rem 1rem" height="100%">
      <Typography variant="h3">Create Post</Typography>
      <FlexBetween flexDirection="column" gap="1rem">
        <InputBase
          placeholder="Title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          sx={{
            textAlign: "center",
            width: "34%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        ></InputBase>
        {post.title && (
          <InputBase
            variant="standard"
            multiline
            placeholder="Write down your post..."
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            value={post.body}
            sx={{
              textAlign: "center",
              width: "89%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1.5rem 2rem",
            }}
          />
        )}
        {post.body && post.title && (
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
                setPost({ ...post, picture: acceptedFiles[0] })
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
                    {!post.picture ? (
                      <p>Add a picture here</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{post.picture.name}</Typography>
                        <EditOutlined />
                      </FlexBetween>
                    )}
                  </Box>
                  {post.picture && (
                    <IconButton
                      onClick={() => setPost({ ...post, picture: null })}
                      sx={{ width: "15%" }}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  )}
                </FlexBetween>
              )}
            </Dropzone>
          </Box>
        )}
        {post.title && post.body && post.picture && (
                  <Button
                  disabled={!post}
                  onClick={() => createPost()}    
                  sx={{
                    color: palette.background.alt,
                    backgroundColor: palette.primary.main,
                    borderRadius: "3rem",
                    ml:"90%",
                    p:"0.5rem 2rem"
                  }}
                >
                  POST
                </Button>
        )}
      </FlexBetween>
    </Widget>
  );
};

export default CreatePost;
