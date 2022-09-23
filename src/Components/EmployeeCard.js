import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeCard = (props) => {
    const {id,name,email} = props.employee;
    const navigate = useNavigate();
    const renderComponent = (redirect) => {
            navigate(`/`+redirect+`/${id}`,{state:{employeeData:props.employee}})
    }
    return(
        <div className="item">
            <img className="ui avatar image"
                alt="user/"/>
                <div className="content">
                <a href="javascript:void(0)" onClick={()=>{renderComponent('detail')}}>
                    <div className="header">
                       {name}
                    </div>
                    <div>
                        {email}
                    </div>
                    </a>
                </div>
       
                
                <i className="trash alternate outline icon"
                style={{color:"red",marginTop:"7px",float:"right",cursor:"pointer"}}
                 onClick={()=>props.onDelete(id)}></i>
                 <a href="javascript:void(0)" onClick={()=>{renderComponent('edit')}}>
                 <i className="edit alternate outline icon"
                style={{color:"blue",marginTop:"7px",float:"right",marginLeft:"10px",cursor:"pointer"}}></i>
                </a>
            </div>
    )
}

export default EmployeeCard;