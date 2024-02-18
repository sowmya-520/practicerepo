import {createStore} from 'redux';
import { createSlice , configureStore} from '@reduxjs/toolkit';
const DUMP_EMPLOYEES=[
    {id:"e1",name:"shvs",experience:9,date:new Date(2023,6,9)},
    {id:"e2",name:"sowmya",experience:8,date:new Date(2022,1,14)},
    {id:"e3",name:"supriya",experience:4,date:new Date(2017,2,29)},
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
})

//const employeeStore=createStore(employeeReducer);
const employeeStore=configureStore({
    reducer:employeeSlice.reducer
});
export default employeeStore;
export const employeeActions=employeeSlice.actions;