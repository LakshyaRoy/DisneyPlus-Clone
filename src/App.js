import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Header from "./component/header";
import { BrowserRouter } from "react-router-dom";
import Details from "./component/Details";
import { useSelector } from "react-redux";
import Search from "./component/Search";
function App() {
  const userData = useSelector((state) => state.userSlice.user);

  // console.log(userData.name);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            userData?.name === undefined ? (
              <Login />
            ) : (
              <Navigate replace to={"/home"} />
            )
          }
        />

        <Route
          path="/home"
          element={
            userData?.name !== undefined ? (
              <Home />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />

        <Route path="/detail/:title" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
