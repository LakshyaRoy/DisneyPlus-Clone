import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Header from "./component/header";
import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Details from "./component/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
