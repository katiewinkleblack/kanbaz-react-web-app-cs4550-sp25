import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./accountReducer";
import * as client from "./client";

export default function Signin() {

  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {

    const user = await client.signin(credentials)
    if (!user) return;
    dispatch(setCurrentUser(user));

    const userProfile = await client.profile();
    dispatch(setCurrentUser(userProfile));
    
    navigate("/Kambaz/Dashboard");
  };


  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <FormControl 
      value={credentials.username}
      placeholder="Username"
      id="wd-username"
      className="mb-2"
      onChange={(e) => setCredentials({...credentials, username: e.target.value})}
      />
      <FormControl
      value={credentials.password}
      placeholder="Password"
      id="wd-password"
      className="mb-2"
      type="password"
      onChange={(e) => setCredentials({...credentials, password: e.target.value})}
      /> 
    
      <Button onClick={signin}
                className="w-100 mb-2"
               id="wd-button-account">
      Signin 
      </Button>
  

      <Link  to="/Kambaz/Account/Signup"  id="wd-signup-black">
      Signup
      </Link>
    </div>
);}




