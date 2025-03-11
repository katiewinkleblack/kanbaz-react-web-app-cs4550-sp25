import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import People from "./People";
import { useSelector } from "react-redux";

export default function Courses()
 {
    const { cid } = useParams();
    const courses = useSelector((state: any) => state.courseReducer?.courses || []);

  
    const { pathname } = useLocation();
    const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
    const currentUserId = currentUser?._id ?? "";
    const enrollments = useSelector((state: any) => state.accountReducer.enrollments);

    const course = courses.find((c: any) => c._id === cid);

    const isStudent = currentUser?.role === "Student";
    const isEnrolled = enrollments.some((e: { course: string | undefined; user: any; }) => e.course === cid && e.user === currentUserId);

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
                <Route path="People" element={<People />} />

            </Routes>

              </div>
</div>
        </div>
    );
}