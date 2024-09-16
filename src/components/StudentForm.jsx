import { useDispatch, useSelector } from "react-redux"
import { studentLists , studentName} from "../features/attendance/attendanceSlice"
import { useState } from "react"

const StudentForm =()=> {
    const attendanceReducer = useSelector((state)=>state.attendanceReducer)
    console.log(attendanceReducer.studentName)
    // const [studentName, setStudentName] = useState('');
    const dispatch = useDispatch()
    const handleStudentName = (e)=>{
        dispatch(studentName(e.target.value))
    }
    const createStudent =()=>{
        const newStudent = {
            id: Date.now(),
            name:attendanceReducer.studentName,
            isPresent:undefined,
        }
        // setStudentName('')
        dispatch(studentLists(newStudent))
        attendanceReducer.studentName()
    }
    // const handleEdit = ()=>{
    //     attendanceReducer.editMode = true
    // }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(attendanceReducer.studentName.trim() === ''){
            return alert('Please Provide your name')
        }
        createStudent()
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="row g-3 align-items-center justify-content-center mb-5">
            <div className="col-auto">
                <input onChange={handleStudentName} defaultValue={attendanceReducer.studentName} type="text" className="form-control"  placeholder="Enter Name"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary">Create Student</button>
            </div>
        </form>
        </>
    )
}
  
  export default StudentForm