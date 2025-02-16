import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../LessonControlButtons";
import AssignmentControlButtons from "../AssignmentControlButtons";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import AssignmentHeader from "./AssignmentHeader";
import { useParams } from "react-router-dom";
import * as db from "../../Database";


export default function Assignments() {
  const { cid, _id } = useParams();
  const assignments = db.assignments;

    return (

   <div id="wd-padding-right-left">
      <AssignmentHeader/>
      <div className="mt-5">

      </div>
     
   
        <ListGroup className="rounded-0" id="wd-assignments">
        {assignments.filter((assignment: any) => assignment.course === cid)

          .map((assignment: any) => (

        <ListGroup.Item 
        className="wd-module p-0 mmb-4 fs-5 border-grey"
        >
          <div className="wd-title p-3 ps-2 wd-background-assignment">
          <BsGripVertical className="me-2 fs-3" /> 
          <RiArrowDownSFill className="me-2 fs-3" /> 
          ASSIGNMENTS <AssignmentControlButtons/>
          </div>
                <ListGroup className="wd-assignment rounded-0">
                  <ListGroup.Item className="wd-assignment-item p-3 ps-1">
                  <a 
                  href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                     className="wd-assignment-link" > 

                    <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-1 fs-3"/>
                        <MdAssignment className="me-3 fs-3" style= {{ color: 'green'}}
                         />

            <div className="d-flex flex-column">
            <div className="fw-bold"> {assignment.title} </div>

            
                <div className="wd-assignment-text">
                  <span className="text-danger"> Multiple Modules</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className="fw-bold">Not available until </span>
                  {assignment.availMonth} {assignment.availDate} at {assignment.availTime}&nbsp;&nbsp;|
                  <br/>
                        <span className="fw-bold">Due </span>
                        {assignment.dueMonth} {assignment.dueDate} at {(assignment.dueTime)}&nbsp;&nbsp;|&nbsp;&nbsp;{assignment.points}pts 
                    </div>
                    </div>
                    </div>
                    <LessonControlButtons/>
                    </div>
                    </a>
                    </ListGroup.Item>
                    </ListGroup>
                    </ListGroup.Item>

 ))}

</ListGroup>
</div>
  );}
  