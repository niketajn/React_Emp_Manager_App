import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const AddEmployee = (props) =>{

    
    const location = useLocation();
    const {id,name,email} = location.state.employeeData;

    const [empInfo,setEmpInfo] = useState({
        id:id,
        name:name,
        email:email
    });
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        if(empInfo.name===" " || empInfo.email === ""){
            return alert("All fields are mandatory");
        }
        props.updateEmployeeHandler(empInfo);
        setEmpInfo({name:'',email:''});
        navigate("/");
    }

    return(
        <div className="ui main" style={{marginTop:"3em"}}>
                <h2>Update EmployeeInfo</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" value={empInfo.name}
                        onChange={e=>setEmpInfo({...empInfo,name:e.target.value})}
                        />
                    </div>
                    
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={empInfo.email}
                        onChange={e=>setEmpInfo({...empInfo,email:e.target.value})}
                        />
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
    )
}

export default AddEmployee;