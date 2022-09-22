import React, { useState } from 'react';

const AddEmployee = (props) =>{
    const [empInfo,setEmpInfo] = useState({
        name:'',
        email:''
    });
    const add = (e) => {
        e.preventDefault();
        props.addEmployeeHandler(empInfo);
        setEmpInfo({name:'',email:''});
    }

    return(
        <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" 
                        onChange={e=>setEmpInfo({...empInfo,name:e.target.value})}
                        />
                    </div>
                    
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" 
                        onChange={e=>setEmpInfo({...empInfo,email:e.target.value})}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
    )
}

export default AddEmployee;