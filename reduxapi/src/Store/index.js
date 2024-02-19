import {createStore} from 'redux';
import { createSlice , configureStore} from '@reduxjs/toolkit';
const DUMP_EMPLOYEES=[
    {id:"e1",name:"shvswm",experience:9,date:new Date(2023,6,9)},
    {id:"e2",name:"sowmya",experience:8,date:new Date(2022,1,14)},
    {id:"e3",name:"supriya",experience:4,date:new Date(2019,2,29)},
    {id:"e4",name:"ankitha",experience:3,date:new Date(2020,9,6)},
  ];
const initialState={items:DUMP_EMPLOYEES}
const employeeSlice=createSlice({

    name:'employee',
    initialState:initialState,
    reducers:
    {
        addEmployee(state,action)
         {
                const employeeData=
                {
                    ...action.payload,
                    id: Math.random().toString()
                };
               state.items.push(employeeData);
         },
         removeEmployee(state,action)
         {

         }
    }
});

export const sendEmployeeData=(employeeData)=>
{
    return async (dispatch)=>
    {
        const sendRequest=async () =>
        {
            const response=await fetch('https://employee-app-21ca8-default-rtdb.firebaseio.com/employee.json',
             {
            method:'PUT',
            body:JSON.stringify(employeeData),
             });
             if(!response.ok)
             {
                throw new Error("sending employees data failed...");
             }
        };
        try
        {
            await sendRequest();
        }
        catch(error)
        {
            console.log("error")
        }
    };
}
//const employeeStore=createStore(employeeReducer);
const employeeStore=configureStore({
    reducer:employeeSlice.reducer
});


export default employeeStore;
export const employeeActions=employeeSlice.actions;