import { createContext, useReducer } from "react";
import { useState } from "react";
export const EmployeeContext=createContext({
    items:[],
    onSaveEmployeeData: () => {},
});

function employeeReducer(state,action)
{
    const updatedEmployees=[...state]
    if (action.type==='ADD_EMPLOYEE')
    {
            const employeeData=
            {
                ...action.payload,
                id:Math.random().toString()
            };
           updatedEmployees.push(employeeData)
    }
    return updatedEmployees;
}
export default function EmployeeContextProvider({children})
{
    const DUMP_EMPLOYEES=[
        {id:"e1",name:"shvs",experience:9,date:new Date(2023,6,9)},
        {id:"e2",name:"sowmya",experience:8,date:new Date(2022,1,14)},
        {id:"e3",name:"supriya",experience:4,date:new Date(2017,2,29)},
        {id:"e4",name:"ankitha",experience:3,date:new Date(2020,9,6)},
      ];

      const [employees,dispatcher] = useReducer(employeeReducer,DUMP_EMPLOYEES);

   
        const addEmployeeHandler=employee=>{
            dispatcher(
                {
                    type:'ADD_EMPLOYEE',
                    payload:employee
                }
            );
        }

        const contextValue=
        {
            items:employees,
            onSaveEmployeeData:addEmployeeHandler
        };
    
        return <EmployeeContext.Provider value={contextValue} >
                {children}
        </EmployeeContext.Provider>

}