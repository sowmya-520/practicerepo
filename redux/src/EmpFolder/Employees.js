import './Employees.css';
import Card from '../UI/Card';
import EmployeeFilter from './EmployeeFilter';
import { useState , useContext } from 'react';
import EmployeeList from './EmployeeList';
import { EmployeeContext } from './employee-context';
import { useSelector } from 'react-redux';
const Employees=(props)=>
{
   // const employeeCtx=useContext(EmployeeContext);

    const items= useSelector(state => state.items);
    
    const [filteredYear,setFilteredYear]=useState("2020");

    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }

    const filteredEmployees=items.filter(employee=> {
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