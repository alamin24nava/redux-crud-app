import { useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import StudentStatus from './components/StudentStatus'
function App() {
  return (
    <>
        <StudentForm/>
        <div className="row">
            <StudentList/>
            <StudentStatus/>
        </div>

    </>
  )
}

export default App
