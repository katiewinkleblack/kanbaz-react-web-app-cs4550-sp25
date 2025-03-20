
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./accountReducer";
import * as client from "./client";

export default function Signup() {

  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };
  


  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
    <FormControl
    value={user.username}
    onChange={(e) => setUser({...user, username: e.target.value})}
    id="wd-username"
    placeholder="username" 
    className="mb-2"
    />
    <FormControl
    value={user.password}
    onChange={(e) => setUser({...user, password: e.target.value})}
    id="wd-password"
    placeholder="password" 
    type="password" 
    className="mb-2"
    />
    <button 
           onClick={signup}
                className="w-100 mb-2"
                id="wd-button-account">
      Signup
      </button>
      
      <Link  to="/Kambaz/Account/Signin" 
      id="wd-signup-black" >
        Signin
        </Link>
    </div>
);}
