import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = (props) =>{

    const retrieveEmployees = props.employees.map((employee,i) => {
        return(
            <EmployeeCard employee={employee} key={i}></EmployeeCard>
        )
    });

    return(
        <div className='ui celled list' style={{marginTop:"4em"}}>
            {retrieveEmployees}
        </div>
    )

    
}

export default EmployeeList;