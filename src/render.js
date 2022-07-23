import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

export let renderEntireTree = (appState, addPost, addMessage, changePost) => {
    root.render(
        <React.StrictMode>
            <App
                appState={appState}
                addPost = {addPost}
                addMessage={addMessage}
                changePost={changePost}
            />
        </React.StrictMode>
    );
}
