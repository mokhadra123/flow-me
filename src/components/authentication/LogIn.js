import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useStateContext();
  const redirectPath = location.state?.path || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log("Login failed:", error.message);
    }
  };
  return (
    <div>
      <form
        className="vh-100"
        style={{ backgroundColor: "#508bfc" }}
        onSubmit={handleSubmit}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Log In</h3>
                  {/* {error && <Alert variant="danger">{error}</Alert>} */}

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block w-100 "
                    type="submit"
                  >
                    Login
                  </button>

                  <hr className="my-4" />
                  <div>
                    <Link to="/forgetpassword"> Forget Password</Link>
                  </div>
                </div>
              </div>
              <p style={{ color: "white" }}>
                I don't have an account{" "}
                <Link style={{ color: "black" }} to={"/SignUp"}>
                  sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
