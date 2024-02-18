import EmployeeForm from "./EmployeeForm";
import './NewEmployee.css';
const NewEmployee=(props)=>
{
    const saveEmployeeHandler = (enteredEmployeeData) => {

            const employeeData={
                ...enteredEmployeeData,
                id:Math.random().toString()
            }
            props.onEmployeeAdded(employeeData)
    }
    return(
        <div className="new-employee">
             <EmployeeForm onSaveEmployeeData={saveEmployeeHandler}/>
        </div>
    );
}
export default NewEmployee;