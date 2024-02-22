import { useState } from "react";
import Mainpage from "./MainView/MainPage";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
