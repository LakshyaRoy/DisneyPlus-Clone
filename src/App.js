import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Header from "./component/header";
import { BrowserRouter } from "react-router-dom";
import Details from "./component/Details";
import { useSelector } from "react-redux";
import Search from "./component/Search";
import WatchList from "./component/WatchList";
import Series from "./component/Series";

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

        <Route path="/detail/:id/:type?" element={<Details />} />

        <Route path="/search" element={<Search />} />

        <Route path="/watchlist" element={<WatchList />} />

        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
