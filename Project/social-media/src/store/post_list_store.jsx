import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userID, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        content: postBody,
        reaction: reaction,
        user: userID,
        tags: tags,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postID } });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Post 1",
    content: "This is post 1",
    reaction: 2,
    user: "user-7",
    tags: ["loving", "aesthetic"],
  },
  {
    id: "2",
    title: "Post 2",
    content: "This is post 2",
    reaction: 5,
    user: "user-9",
    tags: ["loving", "aesthetic"],
  },
];
