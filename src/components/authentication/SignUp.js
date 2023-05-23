import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";

const SignUp = () => {
  const { signup } = useStateContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password, passwordConfirm);
      navigate("/");
    } catch (error) {
      console.log("signup failed:", error.message);
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
                  <h2 className="mb-5">Sign up</h2>
                  <div className="form-outline mb-4">
                    <input
                      type="name"
                      id="name"
                      className="form-control form-control-lg"
                      placeholder="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>{" "}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password-confirm"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      value={passwordConfirm}
                      onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block w-100 "
                    type="submit"
                  >
                    Signup
                  </button>
                  <hr className="my-4" />
                  <p>
                    I Already have an account<Link to={"/LogIn"}>Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
