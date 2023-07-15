// Card.js
import { Box, CardActions, CardContent, Typography } from "@mui/material";
import "./Card.css";
import bigDoc from "./bigdoctor.png";
import Popup from "../Popup/popup";

const Card = (props) => {
  const { name, maxStudents, email, id } = props;

  return (
    <Box key={id} className="card-container">
      <img src={bigDoc} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="6" color="text.secondary">
          Max Number of Students: {maxStudents}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Doctor's Email: {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Popup />
      </CardActions>
    </Box>
  );
};

export default Card;
