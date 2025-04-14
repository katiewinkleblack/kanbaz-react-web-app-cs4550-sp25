import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
 
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? [{name: "Profile", path: "/Kambaz/Account/Profile"}] 
  : [{name: "Signin", path: "/Kambaz/Account/Signin" }, 
    {name:"Signup", path: "/Kambaz/Account/Signup"}];

  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  

  return (
    <div id="wd-account-navigation" className="list-group fs-5 round-0">

{links.map(({name, path}) => (
  <Link
  key={path}
  to={path}
  id={`wd-account-${name.toLowerCase()}`}
  className={`list-group-item ${pathname === path 
    ? "text-danger wd-border-for-navigation"
    : "text-dark border-0"
  }`}>
    {name}
  </Link>
))}
{currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} 
       className={`list-group-item ${active("Users")}`}> Users </Link> )}
        
    </div>
);}




