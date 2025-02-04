import { Button } from "react-bootstrap";
import { BiImport } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoDisturbAlt, MdHome } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";

export default function CourseStatus() {
    return (
      <div id="wd-course-status" style={{ width: "300px"}}>
        <h2>Course Status</h2>

        <div className="d-flex">
            <div className="w-50 pe-1">
        <Button variant="secondary" size="lg" className="w-100 text-nowrap">
            <MdDoDisturbAlt className="me-2 fs-5" /> Unpublish </Button> 
       </div>

            <div className="w-50">
        <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </Button> 
       </div>
       </div>
        <br/>

        <Button variant="secondary" size="lg" className="w-100 text-start mb-1">
            <BiImport className="me-2 fs-5" /> Import Existing Content </Button> 
        <Button variant="secondary" size="lg" className="w-100 text-start mb-1">
            <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button> 
        <Button variant="secondary" size="lg" className="w-100 text-start mb-1">
            <MdHome className="me-2 fs-5" /> Choose Home Page </Button> 
        <Button variant="secondary" size="lg" className="w-100 text-start mb-1">
            <RiBarChart2Fill className="me-2 fs-5" /> View Course Screen </Button> 
        <Button variant="secondary" size="lg" className="w-100 text-start mb-1">
            <BsMegaphone className="me-2 fs-5" /> New Announcement </Button> 
        <Button variant="secondary" size="lg" className="w-100 text-start mb-1">
            <RiBarChart2Fill className="me-2 fs-5" /> New Analytics </Button> 
        <Button variant="secondary" size="lg" className="w-100 text-start mb-1">
            <IoIosNotifications className="me-2 fs-5" /> View Course Notifications </Button> 
     
      </div>
      
      );}