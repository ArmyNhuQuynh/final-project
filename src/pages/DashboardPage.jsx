import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteStudent, getAllStudents } from '../api/student-api';
import { Alert, Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';





export default function DashboardPage() {
    const [students, setStudents] = React.useState([])
    const navigate = useNavigate()
    const [deleteStudentId, setDeleteStudentId] = React.useState(null);
    const [successAlert, setSuccessAlert] = React.useState(false);

    const getAPI = () => {
        getAllStudents()
        .then(
            (data) => {
                if(data){
                    // sort student
                    data.sort((a, b) => {
                        if(a.name < b.name) return -1;
                        if(a.name > b.name) return 1;
                        return 0;
                    });
                    setStudents(data);
                }
            }
            );
    };

    React.useEffect(() => {
        getAPI();
    }, [])

    const handleDelete = () => {
        deleteStudent(deleteStudentId)
        .then(() => {getAPI();
            setSuccessAlert(true);
            setDeleteStudentId(null);
    });
    };
    const handleCloseAlert = () => {
      setSuccessAlert(false);
    };
    

  const handleClickOpen = (id) => {
    setDeleteStudentId(id);
  };

  const handleClose = () => {
    setDeleteStudentId(null);
  };
  return (
    <div>
        <Button onClick={() => navigate("/dashboard/create") } variant ='contained'>Create</Button>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">DateOfBirth</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right"><Avatar src={row.image}/></TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.dateofbirth}</TableCell>
              <TableCell align="right">{row.gender ? "Male" : "Female"}</TableCell>
              <TableCell align="right">{row.class}</TableCell>
              <TableCell align="right">
              <Button size="small" onClick={() => navigate("update/"+row?.id)}>Update</Button>
              <Button variant="outlined" onClick={() => handleClickOpen(row.id)}>DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Dialog open={Boolean(deleteStudentId)} onClose={handleClose} aria-describedby="alert-dialog-description">
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this student?
        </DialogContentText>
      </DialogContent>
     <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleDelete}>Agree</Button>
     </DialogActions>
    </Dialog>

    <Snackbar open={successAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    Student deleted successfully!
                </Alert>
            </Snackbar>
    </div>
  )
}
