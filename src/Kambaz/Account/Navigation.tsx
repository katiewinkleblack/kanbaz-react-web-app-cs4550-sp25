import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const location = useLocation();
  return (
    <div id="wd-account-navigation" className="list-group fs-5 round-0">

<Link to="/Kambaz/Account/Signin" 
      id="wd-account-signin"
      className={`list-group-item ${location.pathname ===
        "/Kambaz/Account/Signin" ? "text-danger wd-border-for-navigation" : "text-dark border-0"}`}
        > Signin
     </Link>

      <Link to="/Kambaz/Account/Signup" 
      id="wd-account-signup"
      className={`list-group-item ${location.pathname ===
        "/Kambaz/Account/Signup" ? "text-danger wd-border-for-navigation" : "text-dark border-0"}`}
        > Signup
     </Link>

      <Link to="/Kambaz/Account/Profile" 
      id="wd-account-profile"
      className={`list-group-item ${location.pathname ===
        "/Kambaz/Account/Profile" ? "text-danger wd-border-for-navigation" : "text-dark border-0"}`}
        > Profile
     </Link>
        
    </div>
);}




