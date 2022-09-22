import React from "react";

const EmployeeCard = (props) => {
    const {id,name,email} = props.employee;
    return(
        <div className="item">
        <img className="ui avatar image"
        alt="user/"/>
                <div className="content">
                    <div className="header">
                       {name}
                    </div>
                    <div>
                        {email}
                    </div>
                </div>
                
                <i className="trash alternate outline icon"
                style={{color:"red",marginTop:"7px",float:"right"}} onClick={()=>props.onDelete(id)}></i>
            </div>
    )
}

export default EmployeeCard;