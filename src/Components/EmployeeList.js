import React from 'react';

const EmployeeList = (props) =>{

    const retrieveEmployees = props.employees.map((employee,i) => {
        return(
            <div className="item" key={i}>
        <img className="ui avatar image"
        alt="user/"/>
                <div className="content">
                    <div className="header">
                        {employee.name}
                    </div>
                    <div>
                        {employee.email}
                    </div>
                </div>
                
            </div>
        )
    });

    return(
        <div className='ui celled list'>
            {retrieveEmployees}
        </div>
    )

    
}

export default EmployeeList;