import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { enrollCourse } from "./Account/accountReducer";
import { addCourse, deleteCourse, updateCourse } from "./Courses/courseReducer";
import axios from "axios";
import { REMOTE_SERVER } from "./Account/client";
import * as UserClient from "./Account/client";
import * as CoursesClient from "./Courses/client";


export default function Dashboard({
  courses,
  setCourses,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  setCourses: React.Dispatch<React.SetStateAction<any[]>>;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {

const COURSES_API = `${REMOTE_SERVER}/api/courses`;

const dispatch = useDispatch();
const navigate = useNavigate();


const { currentUser } = useSelector((state: any) => state.accountReducer);


const [courseName, setCourseName] = useState("");
const [courseDesc, setCourseDesc] = useState("");

const [editingCourse, setEditingCourse] = useState<any | null>(null);


const isStudent = currentUser?.role === "STUDENT";
const [showAllCourse, setShowAllCourse] = useState(false);


const findCoursesForUser = async () => {
  try {
    const courses = await UserClient.findCoursesForUser(currentUser._id);
    setCourses(courses);
  } catch (error) {
    console.error(error);
  }
};

const changeCourseView = () => setShowAllCourse(!showAllCourse);




const fetchCourses = async () => {
  try {
    const allCourses = await CoursesClient.fetchAllCourses();
    const enrolledCourses = await UserClient.findCoursesForUser(
      currentUser.username
    );
    const courses = allCourses.map((course: any) => {
      if (enrolledCourses.find((c: any) => c._id === course._id)) {
        return { ...course, enrolled: true };
      } else {
        return course;
      }
    });
    setCourses(courses);
  } catch (error) {
    console.error(error);
  }
};




const handleDeleteCourse = async (courseId: string) => {
  try {
    await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(prevCourses => prevCourses.filter(course => course._id !== courseId));
      dispatch(deleteCourse(courseId));
  } catch (error) {
    console.error("Error deleteing Course:", error);
  }
}





useEffect(() => {
  if (enrolling) {
    fetchCourses();
  } else {
    findCoursesForUser();
  }
}, [currentUser, enrolling]);




  const handleAddCourse = async () => {
    try {
    const newCourseData = {
      _id: `C${Date.now()}`,
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
    dispatch(enrollCourse(newCourse));
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


const handleUpdateCourse = async () => {
  if (!editingCourse) return;

  try { 
    const updatedCourse = { ...editingCourse, name: courseName, description: courseDesc};
    await axios.put(`${COURSES_API}/${editingCourse._id}`, updatedCourse);

    setCourses(prevCourses => prevCourses.map(course => course._id === editingCourse._id
      ? updatedCourse : course )
    );
    dispatch(updateCourse(updatedCourse));
  setCourseName("");
  setCourseDesc("");
  setEditingCourse(null);
  }catch (error) {
    console.log("Error updating course:", error);
  }
};

  
 

   return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {isStudent && (
        <div className="mb-3 d-flex gap-2">
        <Button variant="primary" onClick={changeCourseView}
        id="wd-show-course-button"
         className="mb-3">
          {showAllCourse ? "Show Enrolled Courses" : "Show All Courses"}
        </Button>
         <Button variant={enrolling ? "secondary" : "success"} onClick={() => setEnrolling(!enrolling)}>
         {enrolling ? "Stop Enrolling" : "Start Enrolling"}
       </Button>
       </div>
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
           course && course._id && (

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

{isStudent && enrolling && (
  <Button 
    onClick={(e) => {
    e.preventDefault();
    updateEnrollment(course._id, !course.enrolled);
  }}
    className={`btn float-end ${course.enrolled ? "btn-danger" : "btn-success"}`}
    >
   {course.enrolled ? "UnEnroll" : "Enroll"}
     </Button>

)}

                  </Card.Body>
                </Link>

{!isStudent && ( 
<div className="d-flex justify-content-between p-2">
  <div className="d-flex gap-2">
  <Button variant="primary" id="wd-go-button" onClick={() => navigate(`/Kambaz/Courses/${course._id}/Home`)}
  > Go </Button>
            <Button variant="danger"
               onClick={() => handleDeleteCourse(course._id)}
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
           )
          ))}
        </Row>
      </div>




</div>
   );}
