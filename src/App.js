import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/authentication/LogIn";
import SingUp from "./components/authentication/SignUp";
import Dashboard from "./components/pages/Dashboard";
import StateContext from "./context/ContextProvider";
// import ForgetPassword from "./components/authentication/ForgetPassword";
import RequireAuth from "./context/RequireAuth";
import DetailsDoctor from "./components/pages/DetailsDoctor/DetailsDoctor";

function App() {
  return (
    <div className="App">
      <Router>
        <StateContext>
          <Routes>
            <Route path="/signup" element={<SingUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/detailsdoctor/:name"
              element={
                <RequireAuth>
                  <DetailsDoctor />
                </RequireAuth>
              }
            />

            {/* <Route path="/forgetPassword" element={<ForgetPassword />} /> */}
          </Routes>
        </StateContext>
      </Router>
    </div>
  );
}

export default App;
