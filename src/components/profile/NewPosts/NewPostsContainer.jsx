import { connect } from "react-redux/es/exports";
import NewPosts from "./NewPosts";

let mapStateToProps = (state) => {
    return {
        postsData : state.profile.postsData,
    };
}
let mapDispatchToProps = () => {
    return {};
}
const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts);
export default NewPostsContainer