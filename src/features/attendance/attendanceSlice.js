import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  studentName:'',
  studentLists:[
    {id:1, name:"Ahnaf", isPresent:undefined},
    {id:2, name:"Tansif", isPresent:undefined},
    {id:3, name:"Alamin", isPresent:undefined},
    {id:4, name:"Al Noman", isPresent:undefined},
  ],
  editMode:false,
  editableStudent:null,
  msg:''
}

export const attendanceSlice = createSlice({
    name: 'attendanceReducer',
    initialState,
    reducers: {
        studentName:(state, action)=>{
            state.studentName = action.payload
        },
        studentLists: (state, action) => {
            state.studentLists.push(action.payload)
        },
        deleteStudent:(state, action)=>{
            state.studentLists = state.studentLists.filter((item)=> item.id !== action.payload)
        },
        editStudent:(state, action)=>{
            let as = action.payload.name
            state.studentName
        }
    },
})
// Action creators are generated for each case reducer function
export const {studentName, studentLists ,deleteStudent,editStudent} = attendanceSlice.actions

export default attendanceSlice.reducer