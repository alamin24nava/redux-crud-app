import { useDispatch, useSelector } from "react-redux"
import { deleteStudent,editStudent } from "../features/attendance/attendanceSlice"

const StudentList = ()=>{
    const studentLists = useSelector((state)=>state.attendanceReducer.studentLists)
    const dispatch = useDispatch()
    const handleDelete =(id)=>{
        dispatch(deleteStudent(id))
    }
    const handleEdit =(student)=>{
        dispatch(editStudent(student))
    }
    // handleDelete()
    return(
        <div className="col-6">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentLists.map((student)=>
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button onClick={()=>handleEdit(student)} type="button" className="btn btn-secondary">Edit</button>
                                        <button onClick={()=>{handleDelete(student.id)}} type="button" className="btn btn-danger">Delete</button>
                                        <button type="button" className="btn btn-primary">Make Present</button>
                                        <button type="button" className="btn btn-danger">Make Absent</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default StudentList