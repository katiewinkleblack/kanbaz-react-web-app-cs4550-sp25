import { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./accountReducer";
import * as client from "./client";
import { Link, useNavigate } from "react-router";
import { User } from "./Admin/UserTable";

export default function Profile() {

 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  })


  useEffect(() => { 
    if (!currentUser) {
      console.log("🔐 Not logged in — redirecting to signin");
      navigate("/Kambaz/Account/Signin");
    } else {
      setUser(currentUser); // populate form fields
    }
  }, [currentUser]);





  const updateProfile = async () => {
    try {
    const updatedProfile = await client.updateUser(user);
    setUser(updatedProfile);
    dispatch(setCurrentUser(updatedProfile));
    } catch (error) {
      console.error("Error Updating Profile", error);
    }
  };


  const signout = async () => {
    try {
    await updateProfile();
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
    } catch (error) {
      console.error("Error Signing out:", error);
    }
  }



  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {user && (
        <div>
          <FormControl value={user.username} id="wd-username" className="mb-2"
                       onChange={(e) => setUser({ ...user, username: e.target.value })}/>
          <FormControl value={user.password} id="wd-password" className="mb-2"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}/>
          <FormControl value={user.firstName} id="wd-firstname" className="mb-2"
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
          <FormControl value={user.lastName} id="wd-lastname" className="mb-2"
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
          <select onChange={(e) => setUser({ ...user, role: e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <Button onClick={updateProfile} className="w-100 mb-2" id="wd-signout-btn">
            Update Profile
          </Button>
      
      { user.role === "ADMIN" &&
          <Link to="/Kambaz/Account/Admin">Admin</Link>}
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
</div>);}
