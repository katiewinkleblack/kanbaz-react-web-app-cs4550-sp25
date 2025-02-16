
import { ListGroup } from "react-bootstrap";
import "./courseStyle.css"

import { Link, useLocation, useParams } from "react-router-dom";
export default function CourseNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
      const links = [
        { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
        { label: "Modules",   path: `/Kambaz/Courses/${cid}/Modules`},
        { label: "Piazza",   path: `/Kambaz/Courses/${cid}/Piazza` },
        { label: "Zoom",   path: `/Kambaz/Courses/${cid}/Zoom` },
        { label: "Assignments",   path: `/Kambaz/Courses/${cid}/Assignments` },
        { label: "Quizzes",   path: `/Kambaz/Courses/${cid}/Quizzes` },
        { label: "Grades",   path: `/Kambaz/Courses/${cid}/Grades` },
        { label: "People",   path: `/Kambaz/Courses/${cid}/People` },

      ];
    
  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 round-0">

   
    {links.map((link) => (
        <ListGroup.Item 
        key={link.path} 
        as={Link} 
        to={link.path} 
        className={`
              ${pathname.includes(link.label) ? "wd-font-under" : "text-danger border-0"}`}>
          {link.label}
        </ListGroup.Item>
      ))}
      </ListGroup>
  );}