import EmployeeDate from './EmployeeDate';
import './EmployeeItem.css';
import Card from '../UI/Card';
import React, {useState} from 'react';
const EmployeeItem=(props) => {
    const [name,setName]=useState(props.name)
    const clickHandler=()=>
    {
        setName("changed......");
    }
    return(
        <li>
            <Card className="employee-item">
                <div><EmployeeDate date={props.date}/></div>
                <div className="employee-item_description">
                    <h2>{name}</h2>
                    <div className="employee-experience">Experience: {props.experience}</div>   
                </div>
                <button onClick={clickHandler}>change name</button>
            </Card>
        </li>
    );
}
export default EmployeeItem;


