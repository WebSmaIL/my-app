import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { addMessage, addPost, changePost } from "./state/state";
import { renderEntireTree } from "./render";



renderEntireTree(state, addMessage, addPost, changePost);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
