
import { Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
    <FormControl
    id="wd-username"
    placeholder="username" 
    className="mb-2"
    />
    <FormControl
    id="wd-password"
    placeholder="password" 
    type="password" 
    className="mb-2"
    />
    <FormControl
    id="wd-verify-password"
    placeholder="verify password" 
    type="password" 
    className="mb-2"
    />
     <Link
      to="/Kambaz/Account/Profile" 
      id="wd-signup-button">
      <Button 
                variant="secondary"
                className="w-100 mb-2"
                id="wd-button-account">
      Signup
      </Button>
      </Link>
      
      <Link  to="/Kambaz/Account/Signin" 
      id="wd-signup-black" >
        Signin
        </Link>
    </div>
);}
