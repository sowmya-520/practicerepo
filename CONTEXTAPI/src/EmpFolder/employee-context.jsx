import { createContext } from "react";
import { useState } from "react";
export const EmployeeContext=createContext({
    items:[],
    onSaveEmployeeData: () => {},
});
export default function EmployeeContextProvider({children})
{
    const DUMP_EMPLOYEES=[
        {id:"e1",name:"shv",experience:9,date:new Date(2023,6,9)},
        {id:"e2",name:"sowmya",experience:8,date:new Date(2022,1,14)},
        {id:"e3",name:"supriya",experience:4,date:new Date(2017,2,29)},
        {id:"e4",name:"ankitha",experience:3,date:new Date(2020,9,6)},
      ];

    const [employees,setEmployees]=useState(DUMP_EMPLOYEES);
    const addEmployeeHandler=employee=>
    {
            const employeeData=
            {
                ...employee,
                id:Math.random().toString()
            };
            setEmployees((previousEmployees)=>
            {
                return [employeeData,...previousEmployees];
            });
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