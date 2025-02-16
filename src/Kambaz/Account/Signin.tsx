import { Button, FormControl } from "react-bootstrap";
import { HiStrikethrough } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <FormControl 
      id="wd-username"
      placeholder="username" 
      className="mb-2" 
      />
      <FormControl
      id="wd-password"
      placeholder="password" 
      className="mb-2" 
      type="password"
      /> 
      <Link
      to="/Kambaz/Dashboard" 
      id="wd-signin-button">
      <Button 
                variant="secondary"
                className="w-100 mb-2"
               id="wd-button-account">
      Signin 
      </Button>
      </Link>

      <Link  to="/Kambaz/Account/Signup"  id="wd-signup-black">
      Signup
      </Link>
    </div>
);}




