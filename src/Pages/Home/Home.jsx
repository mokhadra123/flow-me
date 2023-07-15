import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";

const Home = () => {
  const [doctorsData, setDocotorsData] = useState([]);

  useEffect(() => {
    fetch("https://flowme.onrender.com/api/v1/doctors")
      .then((res) => res.json())
      .then((doctors) => {
        const doctorsInfos = doctors.data;
        setDocotorsData(doctorsInfos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!Array.isArray(doctorsData)) {
    return <p>loading..</p>;
  }
  return (
    <Box className="cards-container">
      {doctorsData.map((doctor) => {
        const { name, email, maxStudents, id } = doctor;
        return (
          <Card id={id} name={name} email={email} maxStudents={maxStudents} />
        );
      })}
    </Box>
  );
};

export default Home;
