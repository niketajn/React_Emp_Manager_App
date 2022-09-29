import { createContext, useContext, useState } from "react";


const userAuthContext = createContext();
const USER = {name:"", isLogin:false};
export function UserAuthContextProvider({children}) {

    const [user,setUser] = useState(USER)

    function logIn(username){
        setUser({name:username, isLogin:true})
    }

    function logOut(){
        setUser(USER);
    }

    return (
        <userAuthContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </userAuthContext.Provider>)
}

export function UserAuthContext() {
    return useContext(userAuthContext);
}

export default UserAuthContext;