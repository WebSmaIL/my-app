import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.postItem}>
      <img className={s.postAvatar} src={props.avatarURL} alt="" />
      <div>
        <div className={s.postContent}>{props.message}</div>

        <div className={s.likes}>
          <span>{props.likeCount} likes</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
