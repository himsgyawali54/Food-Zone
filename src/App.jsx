import { useState } from "react";
import PrivateRoute from "./PrivateRoute";
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
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route element={<PrivateRoute />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
