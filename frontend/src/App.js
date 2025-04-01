import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import Navbar from "./Navbar";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <ToastContainer 
      position="top-center"
      autoClose={1000}
      hideProgressBar={true}
      closeOnClick
      theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
