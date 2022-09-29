import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from '../Context/UserAuthContext'

const Login = () => {

    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { logIn, user } = UserAuthContext();
    const navigate = useNavigate();

    useEffect(()=>{
        if(user.isLogin){
            return navigate("/list");
        }
    })
    const loginHandler = (e) => {
        e.preventDefault();
        logIn(username);
        navigate("/list")
    };

    return (
        <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={loginHandler}>

                <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="enter username" 
                        onChange={(e)=>setUsername(e.target.value)} required
                        />
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="enter password" 
                        onChange={(e)=>setPassword(e.target.value)} required
                        />
                    </div>                
                    <button className="ui button blue">Login</button>
                </form>
            </div>
    )
}

export default Login;