import { useSetPosts, useToken, useUser } from "../services/store";

const useCreatePost = (post, setPost) => {
  const userID = useUser();
  const token = useToken();
  const setPosts = useSetPosts();
  return async () => {
    const formData = new FormData();
    formData.append("authorID", userID);
    formData.append("title", post.title);
    formData.append("body", post.body);
    formData.append("post_image", post.picture);

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: token },
      body: formData,
    });

    const data = await response.json();
    setPosts(data.posts);
    setPost({ title: "", body: "", picture: null });
  };
};

export default useCreatePost;
