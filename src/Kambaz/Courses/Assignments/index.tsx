import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../LessonControlButtons";
import AssignmentControlButtons from "../AssignmentControlButtons";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";


export default function Assignments() {
    return (
     <div className="wd-assignements-dev">
        <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mmb-4 fs-5 border-grey">
          <div className="wd-title p-3 ps-2 wd-background-assignment">
          <BsGripVertical className="me-2 fs-3" /> 
          <RiArrowDownSFill className="me-2 fs-3" /> 
          ASSIGNMENTS <AssignmentControlButtons/>
          </div>
                <ListGroup className="wd-assignment rounded-0">
                  <ListGroup.Item className="wd-assignment-item p-3 ps-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                     className="wd-assignment-link" > 
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-1 fs-3"/>
                        <MdAssignment className="me-3 fs-3" style= {{ color: 'green'}} />

            <div className="d-flex flex-column">
            <div className="fw-bold">
                A1 </div>
                <div className="wd-assignment-text">
                  <span className="text-danger"> Multiple Modules</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className="fw-bold">Not available until </span>
                  May 6 at 12am&nbsp;&nbsp;|
                  <br/>
                        <span className="fw-bold">Due </span>
                        May 13 at 11:59pm&nbsp;&nbsp;|&nbsp;&nbsp;100pts 
                    </div>
                    </div>
                    </div>
                    <LessonControlButtons/>
                    </div>
                    </a>
                    </ListGroup.Item>
  </ListGroup>
  <ListGroup className="wd-assignment rounded-0">
                  <ListGroup.Item className="wd-assignment-item p-3 ps-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                     className="wd-assignment-link" > 
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-1 fs-3"/>
                        <MdAssignment className="me-3 fs-3" style= {{ color: 'green'}} />

            <div className="d-flex flex-column">
            <div className="fw-bold">A2 </div>
                <div className="wd-assignment-text">
                  <span className="text-danger"> Multiple Modules</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className="fw-bold">Not available until </span>
                  May 14 at 12am&nbsp;&nbsp;|
                  <br/>
                        <span className="fw-bold">Due </span>
                        May 21 at 11:59pm&nbsp;&nbsp;|&nbsp;&nbsp;100pts 
                    </div>
                    </div>
                    </div>
                    <LessonControlButtons/>
                    </div>
                    </a>
                    </ListGroup.Item>
  </ListGroup>

  <ListGroup className="wd-assignment rounded-0">
                  <ListGroup.Item className="wd-assignment-item p-3 ps-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                     className="wd-assignment-link" > 
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-1 fs-3"/>
                        <MdAssignment className="me-3 fs-3" style= {{ color: 'green'}} />

            <div className="d-flex flex-column">
            <div className="fw-bold">A3 </div>
                <div className="wd-assignment-text">
                  <span className="text-danger"> Multiple Modules</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className="fw-bold">Not available until </span>
                  May 22 at 12am&nbsp;&nbsp;|
                  <br/>
                        <span className="fw-bold">Due </span>
                        May 29 at 11:59pm&nbsp;&nbsp;|&nbsp;&nbsp;100pts 
                    </div>
                    </div>
                    </div>
                    <LessonControlButtons/>
                    </div>
                    </a>
                    </ListGroup.Item>
  </ListGroup>

    </ListGroup.Item>
    </ListGroup>

         
      </div>
  );}
  