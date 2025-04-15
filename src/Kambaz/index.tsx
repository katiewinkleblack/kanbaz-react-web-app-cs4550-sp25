import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as UserClient from "../Kambaz/Account/client";


export default function Kambaz() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [courses, setCourses] = useState<any[]>([]);
    const [enrolling, setEnrolling] = useState<boolean>(false);
  
    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
      try {
        if (enrolled) {
          await UserClient.enrollUserInCourse(currentUser.username, courseId);
        } else {
          await UserClient.unEnrollInCourse(currentUser.username, courseId);
        }
  
        setCourses(prev =>
          prev.map(course =>
            course._id === courseId
              ? { ...course, enrolled }
              : course
          )
        );
      } catch (err) {
        console.error("Error updating enrollment:", err);
      }
    };


    return (
        <Session>
<div id="wd-kambaz">
           <KambazNavigation />
   <div className="wd-main-content-offset p-3">       
        <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" 
            element={<ProtectedRoute>
                <Dashboard
                courses={courses}
                setCourses={setCourses}
                enrolling={enrolling}
                setEnrolling={setEnrolling}
                updateEnrollment={updateEnrollment}
                />
                </ProtectedRoute>} />
            <Route path="/Courses/:cid/*" 
            element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="/Calendar" element={<h2>Calendar</h2>} />
            <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
</div>
      </div>
</Session>
  );}
