import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Header from "./component/header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
