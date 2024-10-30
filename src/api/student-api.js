import axios from "axios"

const apiUrl = "https://66fe3cf02b9aac9c997aef84.mockapi.io/api/v1/studentManagement"

export const getAllStudents = async () => {
   
    try{
        const response = await axios.get(apiUrl)

        return response.data;
    }catch(e){
        console.log(e.toString())
    }
}
export const getStudentById = async (id) => {
    try{
        const response = await axios.get(`${apiUrl}/${id}`)
        return response.data;
    }catch(e){
        console.log(e.toString())
    }
}
export const createStudent = async (student) => {
    try{
        const response = await axios.post(`${apiUrl}`, student)
        return response.data;
    }catch(e){
        console.log(e.toString())
    }
}

export const updateStudent = async (id, student) => {
    try{
        console.log(student);
        student.class = student.feedback;
        
        const response = await axios.put(`${apiUrl}/${id}`, student)
        return response.data;
    }catch(e){
        console.log(e.toString())
    }
}

export const deleteStudent = async (id) => {
    try{
        const response = await axios.delete(`${apiUrl}/${id}`)
        return response.data;
    }catch(e){
        console.log(e.toString())
    }
}
