import React  from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const AddEmployee = (props) =>{

    const {register, handleSubmit, formState:{errors}, trigger } = useForm();

    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        props.addEmployeeHandler(data);
        navigate("/list");
    }

    return(
        <div className="ui main">
                <h2 style={{marginTop:"2em"}}>Add Employee Details</h2>
                <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" 
                        {...register('name', 
                        { 
                            required: "Username is required",
                            minLength: {
                                value: 10,
                                message: "Minimum Required length is 10",
                            },
                            maxLength:{
                                value:20,
                                message: "Maximum required length is 20"
                            }
                        }
                        )}
                        onKeyUp={() => {
                            trigger("name");
                          }}
                        />
                        
                    </div>
                    <p className="errorMsg">{errors.name?.message}</p>
                    
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" 
                        {...register('email', 
                            { required: "Email is required",
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please enter valid email."
                            }
                            }
                            )}
                        onKeyUp={() => {
                            trigger("email");
                          }}
                        />
                    </div>
                    <p className="errorMsg">{errors.email?.message}</p>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
    )
}

export default AddEmployee;