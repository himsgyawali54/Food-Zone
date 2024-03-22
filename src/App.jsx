import { Suspense } from "react";
import PrivateRoute from "./PrivateRoute";
import Mainpage from "./MainView/MainPage";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />

            <Route element={<PrivateRoute />}>
              <Route path="/mainpage" element={<Mainpage />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
