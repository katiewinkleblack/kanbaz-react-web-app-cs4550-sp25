import { Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl
      id="wd-username"
      defaultValue="katie" 
      placeholder="username" 
      className="mb-2"
      style={{ maxWidth: '300px', width: '900px'}}
      />
      <FormControl
      id="wd-password"
      defaultValue="123"   
      placeholder="password" 
      className="mb-2"
      />
      <FormControl
      id="wd-first-name"
      defaultValue="Katie" 
      placeholder="First Name" 
      className="mb-2"
      />
      <FormControl
      id="wd-last-name"
      defaultValue="Winkleblack" 
      placeholder="Last Name" 
      className="mb-2"
      />
      <FormControl
      id="wd-date"
      type="date"
      className="mb-2"
      />
      <FormControl
      id="wd-email"
      defaultValue="winkleblack@gmail.com" 
      type="email" 
      className="mb-2"
      />
      <FormControl 
        as="select"
        id="wd-subtype"
        className="mb-2"
        style={{appearance: 'auto'}}
     >
    <option value="USER">User</option>
    <option value="FACULTY">Faculty</option>
    <option value="ADMIN">Admin</option>
    <option selected value="STUDENT">Student</option>
  </FormControl>
  <Link
      to="/Kambaz/Account/Signin" 
      id="wd-profile-button">
      <Button 
                variant="secondary"
                className="w-100 mb-2"
               id="wd-button-account">
      Signout 
      </Button>
      </Link>

      <Link  to="/Kambaz/Dashboard"  id="wd-signup-black">
      Go to Dashboard
      </Link>
    </div>
);}
