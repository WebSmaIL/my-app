// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Nav from "./components/navbar/Nav";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="wrapperContent">
          <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
