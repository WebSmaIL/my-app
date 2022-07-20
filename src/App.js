// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Music from "./components/music/Music";
import Nav from "./components/navbar/Nav";
import News from "./components/news/News";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Nav />
                <div className="wrapperContent">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Profile
                                    state={props.appState.profile}
                                />
                            }
                        />
                        <Route
                            path="/dialogs/*"
                            element={<Dialogs state={props.appState.dialogs} />}
                        />
                        <Route path="/news/*" element={<News />} />
                        <Route path="/music/*" element={<Music />} />
                        <Route path="/settings/*" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
