import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addModule, deleteModule, editModule, updateModule } from "./modulesReducer";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
 



    return (
      <div id="wd-padding-right-left-modules">
        <ModulesControls moduleName={moduleName} setModuleName={setModuleName} 
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid}));
          setModuleName("");
        }}
         /> 
        <br/> <br/> 
  
        <ListGroup className="rounded-0" id="wd-modules">
          {modules.filter((module: any) => module.course === cid)
          .map((module: any) => (

          <ListGroup.Item className="wd-module p-0 mmb-5 fs-5">
            <div id="wd-background-for-titles" className="p-3 ps-2">
            <BsGripVertical className="me-2 fs-3" />  

            {!module.editing && module.name}
            {module.editing && (
              <FormControl className="w-50 d-inlin-block"
              onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value}))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(updateModule({...module, editing: false}));
                }
              }}
              value={module.name} />
            )}

            <ModuleControlButtons  
            moduleId={module._id}
            deleteModule={(moduleId) => {
              dispatch(deleteModule(moduleId))}
            }
            editModule={(moduleId) => {
              dispatch(editModule(moduleId))}
            }
            />
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


  