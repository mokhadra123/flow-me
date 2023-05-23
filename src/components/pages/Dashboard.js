import React from "react";
import { doctors } from "../../data/constant";
// import { useAuth } from "../../context/AuthContext";
// import { Link } from "react-router-dom";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../Navbar/NavbarComponent";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (name) => {
    navigate(`/detailsdoctor/${name}`);
  };
  return (
    <div>
      <NavbarComponent />
      <div className="container py-5 ">
        <div className="row">
          {doctors.map((doctor, index) => (
            <div key={index} className="mb-5 col-md-4 col-lg-4 col-xl-4">
              <div
                className="card"
                style={{
                  borderRadius: "5%",
                  boxShadow: "7px 7px 7px 7px #D8D8D8",
                }}
              >
                <img
                  style={{
                    width: "70%",
                    margin: "auto",
                    marginTop: "30px",
                    borderRadius: "6%",
                  }}
                  src={doctor.image}
                  className="card-img-top"
                  alt="Doctor"
                />
                <div className="card-body">
                  <div className="" style={{ margin: "auto" }}>
                    <h2 className="text-center" style={{ fontSize: "20px" }}>
                      {doctor.name}
                    </h2>
                    <div>
                      <span style={{ fontSize: "17px" }}>
                        maximum:{doctor.maxnum}
                      </span>
                      <br />
                      <span style={{ fontSize: "20px" }}>
                        <BsFillPersonCheckFill size={25} />
                        {doctor.currentnum}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ fontSize: "24px" }}
                      onClick={() => handleDetailsClick(doctor.name)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
