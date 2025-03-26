import { Button, ListGroup, Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "../AssignmentControlButtons";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import AssignmentHeader from "./AssignmentHeader";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./assigmentReducer";
import { useEffect, useState } from "react";
import * as assignmentClient from "./client";
import * as coursesClient from "../client";


export default function Assignments() {
  const { cid } = useParams();

 
  const assignments = useSelector((state: any) => state.assignmentReducer?.assignments ?? [] );

 
 
  const dispatch = useDispatch();


  const [modal, setModal] = useState(false);
  const [selectedAssignment] = useState<any>(null);


 const removeAssignment = async (aid: string) => {
    await assignmentClient.deleteAssignment(aid);
    dispatch(deleteAssignment(aid));
  };




  const deleteConfirmation = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment._id));
    }
    setModal(false);
    selectedAssignment(null);
  }


    
   const fetchAssignments = async () => {
      const findAssign = await coursesClient.findAssignmentForCourse(cid as string)
      dispatch(setAssignments(findAssign));
    };
    useEffect(() => {
      fetchAssignments();
    }, []);


    return (

   <div id="wd-padding-right-left">
      <AssignmentHeader/>
     
     
  
        <ListGroup className="rounded-0" id="wd-assignments">

          
        {assignments.map((assignment: any) => (

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
  <Button variant="danger" onClick={() => removeAssignment(assignment._id)}>
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
  