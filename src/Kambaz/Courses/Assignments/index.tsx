import { Button, ListGroup, Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import LessonControlButtons from "../LessonControlButtons";
import AssignmentControlButtons from "../AssignmentControlButtons";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import AssignmentHeader from "./AssignmentHeader";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./assigmentReducer";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
 

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();

  const assignments = useSelector((state: any) => state.assignmentReducer?.assignments ?? [] );

 
 
  const dispatch = useDispatch();

  const courseAssignments = assignments?.filter((a: any) => a.course === cid);

  const [modal, setModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  const handleDelete = ((a: any) => {
    setSelectedAssignment(a);
    setModal(true)
  });

  const deleteConfirmation = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment._id));
    }
    setModal(false);
    selectedAssignment(null);
  }


    return (

   <div id="wd-padding-right-left">
      <AssignmentHeader/>
     
     
  
        <ListGroup className="rounded-0" id="wd-assignments">

          
        {courseAssignments.map((assignment: any) => (

        <ListGroup.Item key={assignment._id}
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

<div className="p-3">
  <Button variant="danger" onClick={() => handleDelete(assignment)}>
    <BsTrash/>
  </Button>
</div>



                    </ListGroup.Item>

 ))}


</ListGroup>


<Modal show={modal} onHide={() => setModal(false)}  centered>
  <Modal.Header closeButton>
    <ModalTitle>Confirm Delete</ModalTitle>
    </Modal.Header>

    <ModalBody>
      Are you sure you wish to delete Assignment?
    </ModalBody>

    <ModalFooter>
      <Button variant="secondary" onClick={() => setModal(false)}>
        Cancel
      </Button>

    <Button variant="danger" onClick={deleteConfirmation}>
      Delete
    </Button>
    </ModalFooter>
</Modal>


</div>
  );}
  