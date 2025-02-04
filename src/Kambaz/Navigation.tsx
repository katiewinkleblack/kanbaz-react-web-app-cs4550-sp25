import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LiaBookSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { FaInbox } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";


export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation" style={{ width: 120}} 
    className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a className="list-group-item bg-black border-0 text-center"
      href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
        <img src="images/northeastern.jpg" width="75px"/>
        </a>
      <Link to="/Kambaz/Account" id="wd-account-link"
      className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text-white"/><br/> Account
      </Link>
      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
      className="list-group-item text-center border-0 bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger"/> <br/> Dashboard
        </Link>
        <Link to="/Kambaz/Dashboard" id="wd-course-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <LiaBookSolid className="fs-1 text-danger"/> <br/> Courses
        </Link>
        <Link to="/Kambaz/Calendar" id="wd-calendar-link"
      className="list-group-item text-center border-0 bg-black text-white"> 
      <SlCalender className="fs-1 text-danger"/> <br/> Calender
      </Link>
      <Link to="/Kambaz/Inbox" id="wd-inbox-link"
      className="list-group-item text-center border-0 bg-black text-white">
        <FaInbox className="fs-1 text-danger"/> <br/> Inbox
     </Link>
      <Link to="/Labs" id="wd-labs-link"
      className="list-group-item text-center border-0 bg-black text-white">
        <MdOutlineAssignment className="fs-1 text-danger"/> <br/> Labs
        </Link>
    </div>
);}
