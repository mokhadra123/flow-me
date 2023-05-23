// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";

// const ForgetPassword = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMassage] = useState("");
//   const emailRef = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       setError("");
//       setLoading(true);

//       setMassage("check your inbox to get new pssword");
//     } catch {
//       setError("Faild to Reset your password");
//     }
//     setLoading(false);
//   };
//   return (
//     <div>
//       <form
//         className="vh-100"
//         style={{ backgroundColor: "#508bfc" }}
//         onSubmit={handleSubmit}
//       >
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//               <div
//                 className="card shadow-2-strong"
//                 style={{ borderRadius: "1rem" }}
//               >
//                 <div className="card-body p-5 text-center">
//                   <h3 className="mb-5">Forget password</h3>

//                   <div className="form-outline mb-4">
//                     <input
//                       type="email"
//                       id="email"
//                       className="form-control form-control-lg"
//                       placeholder="Email"
//                       ref={emailRef}
//                       required
//                     />
//                   </div>

//                   <button
//                     className="btn btn-primary btn-lg btn-block w-100 "
//                     type="submit"
//                   >
//                     Reset Password
//                   </button>

//                   <hr className="my-4" />

//                   <p>
//                     I don't have an account <Link to={"/SignUp"}>sign up</Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ForgetPassword;
