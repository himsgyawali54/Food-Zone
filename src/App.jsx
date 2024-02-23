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
          <PrivateRoute path="/mainpage" component={<Mainpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
