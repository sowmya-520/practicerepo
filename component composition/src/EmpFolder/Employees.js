import './Employees.css';
import Card from '../UI/Card';
import EmployeeFilter from './EmployeeFilter';
import { useState } from 'react';
import EmployeeList from './EmployeeList';
const Employees=(props)=>
{
    const [filteredYear,setFilteredYear]=useState("2020")
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }
    const filteredEmployees=props.items.filter(employee=> {
        return employee.date.getFullYear().toString()===filteredYear;
    });
    
    return(
        <Card className="employees">

            <EmployeeFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <EmployeeList items={filteredEmployees}/>

        </Card>
    );
}
export default Employees;