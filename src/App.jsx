import { Suspense, lazy } from "react";

const LoginForm = lazy(() => import("./Login/LoginForm"));
const RegisterForm = lazy(() => import("./Register/RegisterForm"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Mainpage = lazy(() => import("./MainView/MainPage"));
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
