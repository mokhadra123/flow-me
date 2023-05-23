import React, { createContext, useContext, useState } from "react";

// create a new context object using the createContext() method
const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  // ==================
  //   Signup Function
  // ==================

  const signup = async (name, email, password, passwordConfirm) => {
    try {
      const response = await fetch(
        "https://flowme.onrender.com/api/v1/students/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, passwordConfirm }),
        }
      );
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      throw new Error("Failed to signup: " + error.message);
    }
  };

  // ==================
  //   Login Function
  // ==================
  const login = async (email, password) => {
    try {
      const response = await fetch(
        "https://flowme.onrender.com/api/v1/students/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const user = await response.json();
        setUser(user);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  };
  // ==================
  //   Logout Function
  // ==================
  const logout = () => {
    setUser(null);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <StateContext.Provider
      value={{
        passwordShown,
        setPasswordShown,
        togglePassword,
        user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// export a custom hook called useStateContext that allows other components to easily access the state data stored in the StateContext object
export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
