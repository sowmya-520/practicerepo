import EmployeeItem from './EmployeeItem';
import './EmployeeList.css';
const EmployeeList=props=>
{
    if(props.items.length===0)
    {
        return <h2 className="employelist__fallback">No Employees Found.</h2>
    }
    return(
        <ul className="employee-list">
            {
                props.items.map((employee)=>(
                    <EmployeeItem
                    key={employee.id} 
                    name={employee.name} 
                    experience={employee.experience} 
                    date={employee.date}>
                    </EmployeeItem>
                ))
            }
        </ul>

    );
}
export default EmployeeList