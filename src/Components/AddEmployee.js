import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AddEmployee = (props) =>{
    const [empInfo,setEmpInfo] = useState({
        name:'',
        email:''
    });

    const [errorMessage1,setErrorMessage] = useState({
        nameInputError:'',
        emailInputError:''
    });

    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if(validate()){
            navigate("/");
        props.addEmployeeHandler(empInfo);
        setEmpInfo({name:'',email:''});
        };
    }

    const validate=() => {
        let nameError = "";
        let emailError = "";
        let nameRegex = new RegExp("^[a-zA-Z \s]+$")
        
        if (empInfo.name==="" || nameRegex.test(empInfo.name)===false ) {
            nameError = "Please enter a valid name";
          }

        const emailRegex = /\S+@\S+\.\S+/;
        if (empInfo.email === "" || emailRegex.test(empInfo.email) === false) {
            emailError = "Please enter a valid email";
          }

          if(nameError || emailError){
              setErrorMessage(
                {...errorMessage1,
                    nameInputError:nameError,
                    emailInputError:emailError
                }
            );
            return false;
          }
          return true;
    };


    return(
        <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" 
                        onChange={e=>setEmpInfo({...empInfo,name:e.target.value})} required
                        />
                        <p style={{color:"red"}}>{errorMessage1.nameInputError}</p>
                    </div>
                    
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" 
                        onChange={e=>setEmpInfo({...empInfo,email:e.target.value})} required
                        />
                        <p style={{color:"red"}}>{errorMessage1.emailInputError}</p>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
    )
}

export default AddEmployee;