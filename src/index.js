import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let messagesData = [
  { id: 1, message: "Hi, bro, how are you?" },
  { id: 2, message: "i`m good, thanks!" },
];

let dialogsData = [
  { id: "1", userName: "Василий" },
  { id: "2", userName: "Вероника" },
  { id: "3", userName: "Витя" },
  { id: "4", userName: "Даня" },
  { id: "5", userName: "Максим" },
];

let postsData = [
  {
      id: "1",
      message:
          "Hi, its my first post in this social network, my name is Ilya and i`m learning React!",
      avatarURL:
          "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
      likeCount: "35",
  },
  {
      id: "2",
      message: "How are you bro?",
      avatarURL:
          "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
      likeCount: "21",
  },
  {
      id: "3",
      message: "im good, tnx!",
      avatarURL:
          "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
      likeCount: "25",
  },
  {
      id: "4",
      message: "Wow, this social network is a crazy",
      avatarURL:
          "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
      likeCount: "101",
  },
];

root.render(
  <React.StrictMode>
    <App 
      messagesData = {messagesData}
      dialogsData = {dialogsData}
      postsData = {postsData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
