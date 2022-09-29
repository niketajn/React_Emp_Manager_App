import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';

const EmployeeList = (props) =>{

    const inputElt = useRef("");

    const onDeleteHandler=(id)=>{
        props.deleteEmployee(id);
    }

    const retrieveEmployees = props.employees.map((employee,i) => {
        return(
            <EmployeeCard employee={employee} key={i} onDelete={onDeleteHandler}></EmployeeCard>
        )
    });

    const onSearch = () => {
        props.searchKeyword(inputElt.current.value);
    }

    return(
        <div className="main">
            <h2>Employee List</h2>
            <Link to="/add">
                <button className="ui button blue right" style={{marginTop:"2em"}}>Add Employee</button>
            </Link>
            <div className="ui search" style={{marginTop:"1em"}}>
                <div className="ui icon input">
                    <input type="text"  ref={inputElt}
                    placeholder="search contact" 
                    className="prompt" value={props.item} onChange={onSearch}>
                    </input>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className='ui celled list' style={{marginTop:"4em"}}>
                {retrieveEmployees.length ? retrieveEmployees : 'No employees available'}
            </div>
        </div>
    )

    
}

export default EmployeeList;