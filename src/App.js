// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Nav from "./components/navbar/Nav";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};

export default App;
