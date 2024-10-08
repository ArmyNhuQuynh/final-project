import React, { useEffect, useState } from "react";
import { getAllStudents } from "../api/student-api";
import StudentCard from "../components/StudentCard";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents().then((data) => {
      if (data) {
        // sort student
        data.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        setStudents(data);
      }
    });
  }, []);
  return (
    <div>
      <h1> HomePage </h1>

      <Grid container spacing={2}>
        {students.map((student) => (
          <Grid item xs={4} key={students.id}>
            <StudentCard student={student} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}