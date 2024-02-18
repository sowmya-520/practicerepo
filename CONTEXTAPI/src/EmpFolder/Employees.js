import './Employees.css';
import Card from '../UI/Card';
import EmployeeFilter from './EmployeeFilter';
import { useState , useContext } from 'react';
import EmployeeList from './EmployeeList';
import { EmployeeContext } from './employee-context';
const Employees=(props)=>
{
    const employeeCtx=useContext(EmployeeContext);

    const [filteredYear,setFilteredYear]=useState("2020");

    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }
    
    const filteredEmployees=employeeCtx.items.filter(employee=> {
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