import React from "react";
import "./DetailsDoctorStyle.css";
import { useParams } from "react-router-dom";
import { doctors } from "../../../data/constant";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import NavbarComponent from "../../Navbar/NavbarComponent";

const DetailsDoctor = () => {
  const { name } = useParams();

  const doctor = doctors.find((doctor) => doctor.name === name);
  const image = doctor ? doctor.image : "";
  const maximum = doctor ? doctor.maxnum : "";
  const currentnum = doctor ? doctor.currentnum : "";
  const desc = doctor ? doctor.desc : "";

  return (
    <div>
      <NavbarComponent />
      <div className="body-content">
        <h1>{name}</h1>
        <div className="details-content">
          <div className="left-details-content">
            <img src={image} alt="doctor" />
          </div>
          <div className="right-details-content">
            <div>
              <FaQuoteRight size={45} color="#ffc107" />
              <br />
              <p>{desc}</p>
              <br />
              <span s>maximum:{maximum}</span>
              <br />
              <span>
                <BsFillPersonCheckFill size={25} />
                {currentnum}
              </span>
              <br />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDoctor;
