import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';

const EmployeeList = (props) =>{
    
    const onDeleteHandler=(id)=>{
        props.deleteEmployee(id);
        }
    
    const retrieveEmployees = props.employees.map((employee,i) => {
        return(
            <EmployeeCard employee={employee} key={i} onDelete={onDeleteHandler}></EmployeeCard>
        )
    });

    return(
        <div className="main">
            <h2>Employee List</h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div className='ui celled list' style={{marginTop:"4em"}}>
                {retrieveEmployees}
            </div>
        </div>
    )

    
}

export default EmployeeList;