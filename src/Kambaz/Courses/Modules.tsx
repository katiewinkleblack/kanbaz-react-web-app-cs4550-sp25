import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
      <div id="wd-padding-right-left-modules">
        <ModulesControls /> 
        <br/> <br/> 
  
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mmb-5 fs-5">
            <div id="wd-background-for-titles" className="p-3 ps-2">
            <BsGripVertical className="me-2 fs-3" /> Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda <ModuleControlButtons/>
            </div>

            <ListGroup className="wd-lesson rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons/>
                </ListGroup.Item>
                <ListGroup className="wd-content rounded-0">
                  <ListGroup.Item className="wd-content-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Intro to the Course<LessonControlButtons/>
                    </ListGroup.Item>
                  <ListGroup.Item className="wd-content-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Intro to Web Development <LessonControlButtons/>
                    </ListGroup.Item>

            <ListGroup className="wd-lesson rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons/>
                </ListGroup.Item>
                <ListGroup className="wd-content rounded-0">
                  <ListGroup.Item className="wd-content-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 1 - Introduction <LessonControlButtons/>
                    </ListGroup.Item>
                  <ListGroup.Item className="wd-content-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 1 - Creating User <LessonControlButtons/>
                    </ListGroup.Item>
                
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons/>
                </ListGroup.Item>
                <ListGroup className="wd-content rounded-0">
                  <ListGroup.Item className="wd-content-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Introduction to Web Development <LessonControlButtons/> 
                    </ListGroup.Item>

                  <ListGroup.Item className="wd-content-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Creating an HTTP server with Node.js <LessonControlButtons/>
                    </ListGroup.Item>
                  <ListGroup.Item className="wd-content-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Creating a React Application <LessonControlButtons/> 
                    </ListGroup.Item>

        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mmb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />Week 1, Lecture 2 - Formatting User Interfaces with HTML <ModuleControlButtons/>
            </div>

</ListGroup.Item>
        </ListGroup>
        </ListGroup>
        </ListGroup>
        </ListGroup>
        </ListGroup>
        </ListGroup>
</ListGroup>
        </ListGroup.Item>
      </ListGroup>
      </div>
  );}
  