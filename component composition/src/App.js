import { useState } from 'react';
import './App.css';
import Employees from './EmpFolder/Employees';
import NewEmployee from './EmpFolder/NewEmployee';
import EmployeeForm from './EmpFolder/EmployeeForm';
const DUMP_EMPLOYEES=[
  {id:"e1",name:"shvsw",experience:9,date:new Date(2023,6,9)},
  {id:"e2",name:"sowmya",experience:8,date:new Date(2022,1,14)},
  {id:"e3",name:"supriya",experience:4,date:new Date(2017,2,29)},
  {id:"e4",name:"ankitha",experience:3,date:new Date(2020,9,6)},
];
const App=() =>{
  const [employees,setEmployees]=useState(DUMP_EMPLOYEES);
  const addEmployeeHandler=employee=>
  {
      const employeeData=
      {
        ...employee,
        id:Math.random().toString()
      }
      setEmployees((previousEmployees)=>
      {
        return [employeeData,...previousEmployees];
      })
  }
  return (
    
    <div>
        <NewEmployee>
          <EmployeeForm onSaveEmployeeData={addEmployeeHandler}/>
        </NewEmployee>
        <Employees items={employees}/>
    </div>
  );
}
export default App;