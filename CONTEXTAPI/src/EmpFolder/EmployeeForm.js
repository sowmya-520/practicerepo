import './EmployeeForm.css';
import { useState } from 'react';
import React from 'react';
import { useContext } from 'react';
import { EmployeeContext } from './employee-context';
const EmployeeForm=(props)=>
{
    const {onSaveEmployeeData}=useContext(EmployeeContext)
    const [enteredName,setEnteredName]=useState('')
    const [enteredExperience,setEnteredExperience]=useState('')
    const [entereddate,setEntereddate]=useState('')
    const nameChangeHandler=(event)=>
    {
        setEnteredName(event.target.value);
    }
    const experienceChangeHandler=(event)=>
    {
        setEnteredExperience(event.target.value);
    }
    const dateChangeHandler=(event)=>
    {
        setEntereddate(event.target.value);
    }
    const submitHandler=(event)=>
    {
        event.preventDefault();
        const employeeData={
            name:enteredName,
            experience:enteredExperience,
            date:new Date(entereddate)
        }
      //  props.onSaveEmployeeData(employeeData)
        onSaveEmployeeData(employeeData);
        setEnteredName('');
        setEnteredExperience('');
        setEntereddate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-employee__controls">
            
                <div className="new-employee__control">
                    <label>name : </label>
                    <input type="text"  onChange={nameChangeHandler} value={enteredName}/>
                </div>

                <div className="new-employee__control">
                    <label>experience: </label>
                    <input type="number" min="1" onChange={experienceChangeHandler} value={enteredExperience} />
                </div>

                <div className="new-employee__control">
                    <label>Date of Birth:</label>
                    <input type="date" max="2024-12-31"  onChange={dateChangeHandler} value={entereddate}/>
                </div>

            </div>

            <div className="new-employee__controls">
                <button type="submit" onSubmit={submitHandler} >Add Employee</button>
            </div>
        </form>

    );
}
export default EmployeeForm;