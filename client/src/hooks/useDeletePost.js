import { useCurrentPost, useSetCurrentPost, useSetPosts, useToken } from "../services/store";

const useDeletePost = (postID) => {
  const token = useToken();
  const setPosts = useSetPosts();
  const currentPost = useCurrentPost()
  const setCurrentPost = useSetCurrentPost()
  return async () => {
    const res = await fetch(`http://localhost:3001/posts/${postID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: token },
    });

    const data = await res.json();
    setPosts(data.posts);
    if(currentPost === postID) {
      setCurrentPost(null)
    }
  };
};

export default useDeletePost;
