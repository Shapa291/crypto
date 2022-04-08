import React, { useEffect } from "react";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import "./Styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import { useDispatch } from "react-redux";
import { fetchCertainCoinByType } from "./Redux/actions";

function App() {
  
 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCertainCoinByType("bitcoin"));
  }, [dispatch]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
