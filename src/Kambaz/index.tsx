import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";


export default function Kambaz() {
   
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchCourses();
    }, [currentUser]);
  

    return (
        <Session>
<div id="wd-kambaz">
           <KambazNavigation />
   <div className="wd-main-content-offset p-3">       
        <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" 
            element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/Courses/:cid/*" 
            element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="/Calendar" element={<h2>Calendar</h2>} />
            <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
</div>
      </div>
</Session>
  );}
  