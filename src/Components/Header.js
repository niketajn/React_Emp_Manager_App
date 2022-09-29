import React from 'react';
import { UserAuthContext } from '../Context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () =>{
    const { user, logOut } = UserAuthContext();
    const navigate = useNavigate();
    const logoutHandler = () => {
        logOut();
        navigate("/")
    }

    return(
        <div className='ui fixed menu'>
            <div className='ui container center'>
            {user.isLogin ? (<h2>
                    Welcome, {user.name}
                    </h2>) : (<h2>Please Login</h2>)}
            </div>
            {user.isLogin && (
                <button className="ui button blue" onClick={logoutHandler}>Logout</button>
            )}
        </div>
    )
}

export default Header;