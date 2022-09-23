import React from "react";
import { Link,useLocation } from "react-router-dom";

const EmployeeDetail = () => {

    const location = useLocation();
    const {name,email} = location.state.employeeData
    return(
        <div className="main center" style={{marginTop:"4em"}}>
        <div className="ui card center">
            <div className="image">
                <img alt="user"/>
            </div>
            <div className="content">
                <div className="header">Name: {name}</div>
                <div className="description">Email: {email}</div>
            </div>
        </div>
        <div className="center-div">
            <Link to="/">
                <button className="ui button blue center">Back to contact list</button>
            </Link>
        </div>
    </div>
    )
}

export default EmployeeDetail;