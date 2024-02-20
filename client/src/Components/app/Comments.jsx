import React from "react";
import Widget from "../ui/Widget";
import CreateComment from "./CreateComment";
import FlexBetween from "../ui/Fb";
import { useComments } from "../../services/store";
import Comment from "./Comment";
import { Typography } from "@mui/material";
import useGetComments from "../../hooks/useGetComments";

const Comments = () => {
  useGetComments();
  const comments = useComments() || [];
  return (
    <Widget width="100%" height="100%" m="2rem 1rem">
      <Typography variant="h3">Comments</Typography>
      <FlexBetween width="100%" flexDirection="column">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.ID} />
        ))}
        <CreateComment />
      </FlexBetween>
    </Widget>
  );
};

export default Comments;
