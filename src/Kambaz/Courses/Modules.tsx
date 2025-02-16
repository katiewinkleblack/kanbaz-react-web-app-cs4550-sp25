import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import * as db from "../Database";
import { useParams } from "react-router-dom";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  

    return (
      <div id="wd-padding-right-left-modules">
        <ModulesControls /> 
        <br/> <br/> 
  
        <ListGroup className="rounded-0" id="wd-modules">
          {modules.filter((module: any) => module.course === cid)
          .map((module: any) => (

          <ListGroup.Item className="wd-module p-0 mmb-5 fs-5">
            <div id="wd-background-for-titles" className="p-3 ps-2">
            <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons/>
            </div>
            
            {module.lessons && (
            <ListGroup className="wd-lesson rounded-0">
              {module.lessons.map((lesson: any) => (
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons/>
                </ListGroup.Item>
              ))}
              </ListGroup>
            )}
              </ListGroup.Item>
          ))}
        </ListGroup>
        </div>
  );}

function useParms(): { cid: any; } {
  throw new Error("Function not implemented.");
}
  