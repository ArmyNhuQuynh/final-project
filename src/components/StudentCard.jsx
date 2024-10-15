import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function StudentCard(props) {
  const { student } = props;
  console.log(student);

  
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
      
    </Card>
  );
}
