import { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./accountReducer";
import * as client from "./client";
import { useNavigate } from "react-router";

export default function Profile() {

  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => { 
    const fetchProfile = async () => {
      try {
        const userProfile = await client.profile();
        setProfile(userProfile);
        dispatch(setCurrentUser(userProfile));
      } catch (error) {
        console.error("Error Fetching Profile", error);
      }
    };
fetchProfile()
  }, [dispatch]);



  const updateProfile = async () => {
    try {
    const updatedProfile = await client.updateUser(profile);
    setProfile(updatedProfile);
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
      {profile && (
        <div>
          <FormControl value={profile.username} id="wd-username" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, username: e.target.value })}/>
          <FormControl value={profile.password} id="wd-password" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, password: e.target.value })}/>
          <FormControl value={profile.firstName} id="wd-firstname" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <FormControl value={profile.lastName} id="wd-lastname" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}/>
          <FormControl value={profile.dob} id="wd-dob" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/>
          <FormControl value={profile.email} id="wd-email" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>
          <select onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
</div>);}
