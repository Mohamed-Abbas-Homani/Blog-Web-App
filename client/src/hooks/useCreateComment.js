import {
  useCurrentPost,
  useSetComments,
  useToken,
  useUser,
} from "../services/store";

const useCreateComment = (content) => {
  const token = useToken();
  const userID = useUser();
  const postID = useCurrentPost();
  const setComments = useSetComments();
  return async () => {
    const res = await fetch(`http://localhost:3001/comments`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        UserID: userID,
        PostID: postID,
        Content: content,
      }),
    });
    const data = await res.json();
    setComments(data.comments);
  };
};

export default useCreateComment;
