import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function StudentCard(props) {
  const { student } = props;
  console.log(student);

  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={student?.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {student?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Id: {student?.id}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          DateOfBirh: {student?.dateofbirth}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Gender: {student?.gender ? "Male" : "Female"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Class: {student?.class}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate("detail/" + student?.id)}>
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}
