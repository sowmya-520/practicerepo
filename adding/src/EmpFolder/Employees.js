import './Employees.css';
import EmployeeItem from './EmployeeItem';
import Card from '../UI/Card';
const Employees=(props)=>
{
    return(
        <Card className="employees">

            {
                props.items.map((employee)=> (<EmployeeItem key={employee.id} name={employee.name} experience={employee.experience} date={employee.date}/>))
            }
        </Card>
    );
}
export default Employees;