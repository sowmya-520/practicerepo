import { useState } from 'react';
import './App.css';
import Employees from './EmpFolder/Employees';
import NewEmployee from './EmpFolder/NewEmployee';
import EmployeeForm from './EmpFolder/EmployeeForm';
import { EmployeeContext } from './EmpFolder/employee-context';
import EmployeeContextProvider from './EmpFolder/employee-context';
const App=() =>{
  
  return (
    <EmployeeContextProvider>
        <div>
          <NewEmployee>
            <EmployeeForm />
          </NewEmployee>
          <Employees/>
        </div>
    </EmployeeContextProvider>
  );
}
export default App;