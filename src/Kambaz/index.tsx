import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";


export default function Kambaz() {
    return (
<div id="wd-kambaz">
           <KambazNavigation />
   <div className="wd-main-content-offset p-3">       
        <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses/:cid/*" element={<Courses/>} />
            <Route path="/Calendar" element={<h2>Calendar</h2>} />
            <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
</div>
      </div>

  );}
  