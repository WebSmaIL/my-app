// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Nav from "./components/navbar/Nav";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="wrapperContent">
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
