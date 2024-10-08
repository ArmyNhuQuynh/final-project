import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import { getStudentById } from "../api/student-api";
import { Typography } from "@mui/material";

export default function DetailPage() {
    const{ id } = useParams();

    const [student, setStudent] = useState(null);
    useEffect(() => {
        getStudentById(id)
        .then((data) => {
            if(data) setStudent(data)
        })
    }, [])
    console.log(student)
  return (
  <div>
    <StudentCard student={student} />
    Feedback:
    <Typography variant="body">
        {student?.feedback}
    </Typography>
  </div>
)
}
