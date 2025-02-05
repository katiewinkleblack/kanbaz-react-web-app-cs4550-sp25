import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { IoBan } from "react-icons/io5";
export default function ModulesControls() {
 return (
   <div id="wd-modules-controls" className="d-flex align-items-center mb-3">

    <div className="d-flex ms-auto">
        <Button variant="secondary" 
                
                className="me-2 wd-home-page-control-radius" 
                id="wd-collapse-all">
         Collapse All </Button> 

        <Button className="me-2" 
                id="wd-collapse-all"
            
                variant="secondary">
         View Progress </Button>  

     <Dropdown className="me-2">
       <Dropdown.Toggle variant="secondary"  id="wd-collapse-all">
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

     <Button variant="danger" className="me-1" id="wd-module-add-button">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Module
     </Button>
     

   </div>
   </div>
);}
