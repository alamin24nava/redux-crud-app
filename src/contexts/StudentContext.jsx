import { createContext, useReducer, useState } from "react";
export const StudentContext = createContext()

export const StudentProvider = (props)=>{
    const {children} = props
    const [studentName, SetStudentName] = useState('')
    const [studentList, setStudentList] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [editableStudent, setEditableStudent] = useState(null)
    const [msg, setMsg] = useState('')


    const handleStudentName = (e)=>{
        SetStudentName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        handleCreate()
    }
    const handleCreate = ()=>{
        const addStudent = {
            id: Date.now() + '',
            name:studentName,
            isPresent: undefined,
        }
        setStudentList([...studentList,  addStudent]);
        setStudentList('')
    }
    const contextValue = {
        studentList,
        studentName,
        editMode,
        editableStudent,
        msg,
        handleSubmit,
        handleStudentName,
    }
    return(
        <StudentContext.Provider value={contextValue}>
            {children}
        </StudentContext.Provider>
    )
}


