import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentHeader() {
    const { cid } = useParams();
  const navigate = useNavigate();

    const handleAssignment = () => {
        const newAid = uuidv4();
        navigate(`/Kambaz/Courses/${cid}/Assignments/${newAid}`)
      }

    return (

<div id="wd-assignment-header" className="d-flex align-items-center mb-3">
<div 
className="d-flex align-items-center position-relative " style={{ flex: '1', minWidth: '70%'}}>
<span id="wd-assignment-grey"
className="position-absolute" style={{ left: '-40px', top: '20%'}}>
  <FaSearch/>
  </span>
<input
        type="text"
        placeholder="search for assignments"
        id="wd-assign"
        className="form-control ps-5"
        style={{ height: '43px',
            borderRadius: '5px'}}
        />
    </div>

    <div className="d-flex" style={{ flex: '0 0 5%'}}>
        </div>

    <div className="d-flex "  style={{ flex: '1', 'justifyContent': 'flex-end'}}>
        <Button variant="secondary" 
                className="me-2 wd-home-page-control-radius" 
                id="wd-collapse-all">
         +Group </Button> 

        <Button className="me-2 bg-danger" 
                id="wd-save-button"
                variant="secondary"
                onClick={handleAssignment}
                >  +Assignment  </Button>  
         </div>
         </div>


);}