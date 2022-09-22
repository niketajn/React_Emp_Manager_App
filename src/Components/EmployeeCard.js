import React from "react";

const EmployeeCard = (props) => {
    const {name,email} = props.employee;
    console.log(props);
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
                
            </div>
    )
}

export default EmployeeCard;