import './Employees.css';
import EmployeeItem from './EmployeeItem';
import Card from '../UI/Card';
const Employees=(props)=>
{
    return(
        <Card className="employees">
            <EmployeeItem name={props.items[0].name} experience={props.items[0].experience } date={props.items[0].date}/>
            <EmployeeItem name={props.items[1].name} experience={props.items[1].experience } date={props.items[1].date}/>
            <EmployeeItem name={props.items[2].name} experience={props.items[2].experience } date={props.items[2].date}/>
            <EmployeeItem name={props.items[3].name} experience={props.items[3].experience } date={props.items[3].date}/>
        </Card>
    );
}
export default Employees;