import { MdOutlineDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post_list_store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}{" "}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdOutlineDeleteOutline />
            </span>
          </h5>
          <p className="card-text">{post.content}</p>
          {post.tags.map((item) => (
            <span className="badge text-bg-primary hashtag" key={item}>
              {item}
            </span>
          ))}
          <div className="alert alert-success reaction" role="alert">
            This post has been reacted by {post.reaction} people.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
