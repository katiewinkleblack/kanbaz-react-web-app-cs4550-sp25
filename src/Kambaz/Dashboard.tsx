import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { enrollCourse, unenrollCourse } from "./Account/accountReducer";
import { addCourse, deleteCourse, updateCourse } from "./Courses/courseReducer";
import axios from "axios";
import { REMOTE_SERVER } from "./Account/client";

export default function Dashboard() {
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
console.log("COURSES_API:", COURSES_API);

const dispatch = useDispatch();
const navigate = useNavigate();
const courses = useSelector((state: any) => state.courseReducer?.courses || [])


const { currentUser } = useSelector((state: any) => state.accountReducer);
const currentUserId = currentUser?._id ?? "";
const { enrollments } = useSelector((state: any) => state.accountReducer);
const [courseName, setCourseName] = useState("");
const [courseDesc, setCourseDesc] = useState("");
const [editingCourse, setEditingCourse] = useState<any | null>(null);


const isStudent = currentUser?.role === "STUDENT";
const [showAllCourse, setShowAllCourse] = useState<any | null>(null);

const changeCourseView = () => setShowAllCourse(!showAllCourse);

const handleEnroll = (courseId: string) => dispatch(enrollCourse(courseId));

const handleUnenroll = (courseId: string) => dispatch(unenrollCourse(courseId));



  const handleAddCourse = async () => {
    try {
    const newCourseData = {
      name: courseName,
      description: courseDesc,
      number: "",
      startDate: "",
      endDate: "",
      department: "",
      credits: 0,
      image: "/images/teslabot.jpg"
    };
    const {data: newCourse } = await axios.post(COURSES_API, newCourseData);

    dispatch(addCourse(newCourse));
    dispatch(enrollCourse(newCourse._id));
    setCourseName("");
    setCourseDesc("");
    setEditingCourse(null);
  } catch (error) {
    console.error("Error adding course:", error);
  }
  };

    const handleEditCourse = (course: any) => {
      setEditingCourse(course);
      setCourseName(course.name);
      setCourseDesc(course.description);
    };

const handleUpdateCourse = () => {
  if (!editingCourse) return;
  dispatch(updateCourse({ ...editingCourse, name: courseName, description: courseDesc}));
  setCourseName("");
  setCourseDesc("");
  setEditingCourse(null);
}

  
 

   return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {isStudent && (
        <Button variant="primary" onClick={changeCourseView}
        id="wd-show-course-button"
         className="mb-3">
          {showAllCourse ? "Show Enrolled Courses" : "Show All Courses"}
        </Button>
      )}

    <h2 id="wd-dashboard-published">
        {isStudent ? "Courses" : `Published Courses (${courses.length})`}
    </h2> < hr/>


      
      <div id="wd-dashboard-courses">
      {!isStudent && (
<>

<h5 className="mt-3">Create Course</h5>
      <button className="btn btn-primary float-end mb-2"
              id="wd-go-button"
              onClick={editingCourse ? handleUpdateCourse : handleAddCourse} 
              > 
              {editingCourse ? "Update Course" : "Add Course"}
               </button>

 
        <FormControl value={courseName} placeholder="Course Name" className="mb-2"
           onChange={(e) => setCourseName(e.target.value)}/>

      <FormControl value={courseDesc} placeholder="Description" className="mb-4"
           onChange={(e) => setCourseDesc(e.target.value)}/>


</>
)}


        <Row xs={1} md={5} className="g-4">

          

          {courses.map((course: any) => (

            <Col key={course._id}
            className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src={course.image} variant="top" width="100%" height={160}/>
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>

{isStudent && (
  enrollments.some((e: { course: string; user: any; }) => e.course === course._id && e.user === currentUser._id) ? (
  <Button variant="danger" onClick={() => handleUnenroll(course._id)}> UnEnroll </Button>
) : (
  <Button variant="success" onClick={() => handleEnroll(course._id)}> Enroll </Button>
))}


        

                  </Card.Body>
                </Link>

{!isStudent && ( 
<div className="d-flex justify-content-between p-2">
  <div className="d-flex gap-2">
  <Button variant="primary" id="wd-go-button" onClick={() => navigate(`/Kambaz/Courses/${course._id}/Home`)}
  > Go </Button>
            <Button variant="danger"
               onClick={() => dispatch(deleteCourse(course._id))}
                className="btn btn-danger float-end"
                id="wd-delete-course-click">
                Delete</Button>
  <button id="wd-edit-course-click"
  onClick={() => handleEditCourse(course)}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>
</div>

</div>
)} 

              </Card>
            </Col>
          ))}
        </Row>
      </div>




</div>
   );}
