import {Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
