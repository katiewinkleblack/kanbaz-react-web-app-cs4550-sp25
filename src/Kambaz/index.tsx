import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";


export default function Kambaz() {
    return (
<div>
    <table>
        <tr>
        <td valign="top">
           <KambazNavigation />
            </td>
            <td valign="top">
                </td> 
        <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses/:cid/*" element={<Courses/>} />
            <Route path="/Calender" element={<h2>Calender</h2>} />
            <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
            </tr>
        </table>

      </div>
  );}
  