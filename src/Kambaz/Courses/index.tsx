import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules/Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import People from "./People";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { REMOTE_SERVER } from "../Account/client";
import Details from "./Details";


export default function Courses()
 {
    const { cid } = useParams();



  
    const { pathname } = useLocation();
    const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
    const currentUserIds = currentUser?.username ?? "";
    const enrollments = useSelector((state: any) => state.accountReducer.enrollments);
    const courses = enrollments.map((e: any) => e.course)
    console.log("Courses in component:", courses, Array.isArray(courses));

  

    const course = courses.find((c: any) => c._id === cid);

    const isStudent = currentUser?.role === "Student";
    const isEnrolled = enrollments.some(
        (e: { course: { _id: any; }; user: { username: any; }; }) =>
          (typeof e.course === "string" ? e.course : e.course?._id) === cid &&
          (typeof e.user === "string" ? e.user : e.user?.username) === currentUserIds
      );

const [users, setUsers] = useState<any[]>([]);

useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${REMOTE_SERVER}/api/courses/${cid}/people`);
        setUsers(response.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (cid) {
      fetchUsers();
    }
  }, [cid]);



    if (isStudent && !isEnrolled) {
        return <Navigate to="/Kambaz/Dashboard" />
    }

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1"/>
            {course?.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr/>
            <br/>
            <div className="d-flex">
                <div className="d-none d-md-block">
            <CourseNavigation />
</div>
<div className="flex-fill">
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza/*" element={<h2>Piazza</h2>} />
                <Route path="Zoom" element={<h2>Zoom</h2>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                <Route path="Grades" element={<h2>Grades</h2>} />
                <Route path="People" element={<People users={users} />} />
                

            </Routes>

              </div>
</div>
        </div>
    );
}