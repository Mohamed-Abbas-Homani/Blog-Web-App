import { Box, InputBase, useTheme } from "@mui/material";
import React, { useState } from "react";
import useCreateComment from "../../hooks/useCreateComment";

const CreateComment = () => {
    const [comment, setComment] = useState("")
    const {palette} = useTheme()
    const createComment = useCreateComment(comment);
  return (
    <Box width="100%">
      <InputBase
      
        placeholder="Add a comment..."
        onChange={(e) => setComment(e.target.value )}
        value={comment}
        sx={{
          textAlign: "center",
          width: "100%",
          backgroundColor: palette.neutral.light,
          borderRadius: "2rem",
          padding: "1rem 2rem",
        }}
        onKeyDown={(e) => {
            if(e.key === "Enter") {
                createComment()
                setComment("")
            }
        }}
      />
    </Box>
  );
};

export default CreateComment;