// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/dialogs/DialogsContainer";
// import Header from "./components/header/Header";
import HeaderContainer from "./components/header/headerContainer";
import Music from "./components/music/Music";
import Nav from "./components/navbar/Nav";
import News from "./components/news/News";
import ProfileContainer from "./components/profile/profileContainer";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/usersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer />
                <Nav />
                <div className="wrapperContent">
                    <Routes>
                        <Route
                            path="/profile/:userId"
                            element={
                                <ProfileContainer />
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <ProfileContainer />
                            }
                        />
                        <Route
                            path="/dialogs/*"
                            element={
                                <DialogsContainer />
                            }
                        />
                        <Route path="/news/*" element={<News />} />
                        <Route path="/music/*" element={<Music />} />
                        <Route path="/users/*" element={<UsersContainer />} />
                        <Route path="/settings/*" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
