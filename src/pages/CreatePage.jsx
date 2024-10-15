import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { createStudent } from "../api/student-api";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const [student, setStudent] = useState({
    name: "",
    dateofbirth: "",
    gender: true,
    class: "",
    image: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    dateofbirth: "",
    class: "",
    image: "",
    feedback: "",
  });

  const navigate = useNavigate();

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }
  const formatForInput = (dateString) => {
    if (!dateString) return "";

    if (dateString.includes("/")) {
      const [day, month, year] = dateString.split("/");
      if (day && month && year) {
        return `${year}-${month}-${day}`;
      }
    }

    if (dateString.includes("-")) {
      const [year, month, day] = dateString.split("-");
      if (year && month && day) {
        return `${day}/${month}/${year}`;
      }
    }

    return "";
  };
  const validate = () => {
    let tempError = {};
    if (student.name === "") {
      tempError.name = "Name is required";
    } else if (student.name.length < 2) {
      tempError.name = "Name must be at least 2 characters";
    }

    if (student.dateofbirth === "") {
      tempError.dateofbirth = "dateOfBirth is required";
    }

    if (student.class === "") {
      tempError.class = "class is required";
    }

    if (student.image === "") {
      tempError.image = "image is required";
    } else {
      if (isValidUrl(student.image) === false) {
        tempError.image = "url should be valid";
      }
    }

    setErrors(tempError);

    return Object.values(tempError).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);

    if (!validate()) return;
    const studentToCreate = {
      ...student,
      dateofbirth: formatForInput(student.dateofbirth),
    };
    createStudent(studentToCreate).then(() => {
      alert("create success");
      navigate("/dashboard");
    });
  };
  return (
    <div>
      <h1>Create student</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label htmlFor="name">Name</label>
            <input
              label="Name"
              type="text"
              placeholder=""
              value={student.name}
              onChange={(e) =>
                setStudent({
                  ...student,
                  name: e.target.value,
                })
              }
            />
            {errors?.name && <p style={{ color: "red" }}>{errors?.name}</p>}
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="dateofbirth">Date of Birth</label>
            <input
              id="dateofbirth"
              type="date"
              placeholder="Date Of Birth"
              value={student.dateofbirth}
              onChange={(e) =>
                setStudent({
                  ...student,
                  dateofbirth: e.target.value,
                })
              }
            />
            {errors?.dateofbirth && (
              <p style={{ color: "red" }}>{errors?.dateofbirth}</p>
            )}
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="Gender">Gender</label>
            <select
              name="Gender"
              onChange={(e) => {
                console.log(e.target.value);

                setStudent({
                  ...student,
                  gender: e.target.value,
                });
              }}
            >
              <option value={true}>Male</option>
              <option value={false}>Female</option>
            </select>
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="class">Class</label>
            <input
              type="text"
              value={student.class}
              onChange={(e) =>
                setStudent({
                  ...student,
                  class: e.target.value,
                })
              }
            />
            {errors?.class && <p style={{ color: "red" }}>{errors?.class}</p>}
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="image">image</label>
            <input
              type="text"
              value={student.image}
              onChange={(e) =>
                setStudent({
                  ...student,
                  image: e.target.value,
                })
              }
            />
            {errors?.image && <p style={{ color: "red" }}>{errors?.image}</p>}
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="feedback">feedback</label>
            <input
              type="text"
              value={student.feedback}
              onChange={(e) => {
                console.log(e);

                setStudent({
                  ...student,
                  feedback: e.target.value,
                });
              }}
            />
            {errors?.feedback && (
              <p style={{ color: "red" }}>{errors?.feedback}</p>
            )}
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          style={{
            marginTop: "20px",
          }}
        >
          Create
        </Button>
      </form>
    </div>
  );
}
