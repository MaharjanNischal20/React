import Post from "./Post";
import { PostList as PostListData } from "../store/post_list_store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      }); //Api ma bhako name is posts

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
