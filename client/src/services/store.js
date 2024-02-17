import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      mode: "light",
      user: null,
      token: null,
      posts:[],
      setMode: () => set({ mode: get().mod == "light" ? "dark" : "light" }),
      setLogin: (user, token) => set({user, token}),
      setLogout: () => set({user:null, token:null}),
      setPosts: (posts) => set({posts}),
    }),
    {
      name: "blog-app",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useMode = () => useStore(state => state.mode);
export const useSetMode = () => useStore(state => state.setMode);
export const useUser = () => useStore(state => state.user);
export const useToken = () => useStore(state => state.token);
export const useSetLogin = () => useStore(state => state.setLogin);
export const useSetLogout = () => useStore(state => state.Logout);
export const usePosts = () => useStore(state => state.posts);
export const useSetPosts = () => useStore(state => state.setPosts);
