import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { IoBan } from "react-icons/io5";
export default function ModulesControls() {
 return (
   <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center mb-3">

    <div className="d-flex">
        <Button variant="secondary" 
                size="lg" 
                className="me-2" 
                id="wd-collapse-all">
         Collapse All </Button> 

        <Button className="me-2" 
                id="wd-view-progress"
                size="lg"
                variant="secondary">
         View Progress </Button>  

     <Dropdown className="me-2">
       <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
         <GreenCheckmark /> Publish All
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Item id="wd-publish-all-modules-and-items">
           <GreenCheckmark /> Publish all modules and items
         </Dropdown.Item>
         <Dropdown.Item id="wd-publish-modules-only">
           <GreenCheckmark /> Publish modules only
         </Dropdown.Item>
         <Dropdown.Item id="wd-unpublish-allmodules-items">
           <IoBan className="fs-5" /> Unpublish all modules and items
         </Dropdown.Item>
         <Dropdown.Item id="wd-unpublish-modules-only">
         <IoBan className="fs-5" /> Unpublish modules only
         </Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>

     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Module
     </Button>
     

   </div>
   </div>
);}
