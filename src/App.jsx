import { useState } from "react";
import Mainpage from "./MainView/MainPage.jsx";
import LoginForm from "./Login/LoginForm.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
