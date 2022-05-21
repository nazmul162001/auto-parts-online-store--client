import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
