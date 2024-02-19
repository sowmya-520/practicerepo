import { useState } from 'react';
import './App.css';
import Employees from './EmpFolder/Employees';
import NewEmployee from './EmpFolder/NewEmployee';
import EmployeeForm from './EmpFolder/EmployeeForm';
import { EmployeeContext } from './EmpFolder/employee-context';
import EmployeeContextProvider from './EmpFolder/employee-context';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sendEmployeeData } from './Store';


const App=() =>{
  const items=useSelector(state=>state.items);
  const dispatch=useDispatch()
  useEffect(
    ()=>{
      dispatch(sendEmployeeData(items))
    },
    [items,dispatch]
  );
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