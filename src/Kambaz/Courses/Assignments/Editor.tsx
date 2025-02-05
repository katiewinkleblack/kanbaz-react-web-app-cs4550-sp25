import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { FaXmark } from "react-icons/fa6";

export default function AssignmentEditor() {
    return (
<div id="wd-padding-right-left">
<div id="wd-assignments-editor">
   <div id="wd-bootstrapforms">
     <div id="wd-css-styling-forms">  
        <Form>
            <FormGroup className="mb-3" controlId="wd-name">

              <FormLabel htmlFor="wd-name" className="mb-0">Assignment Name</FormLabel>
        <FormControl
        type="text"
        placeholder="name"
        id="wd-assign"
        className="me-2 mt-2"
        />
        </FormGroup>


        <div className="mt-4 wd-straight-border">
        <br/>
        The assigment is 
        <span className="text-danger"> available online</span>
        
        <br/><br/>
        Submit a link to the landing page of your Web application running on Netlify.
        <br/>
        <br/>
        The landing page should include the following:
        <br/>
        <br/>
        <ul id="assignment-requirements">
        <li>Your full name and section</li>
        <li>Links to each of the lab assignments</li>
        <li>Links to the Kambaz application</li>
        <li>Links to all relevent source code repositories</li>
        </ul>
        The Kambaz application should include a link to navigate back to the landing page.
        </div>
        <br />
        
        <FormGroup className="mb-3 mt-2" controlId="wd-points-editor">
        <div className="d-flex align-items-center ms-auto" style={{ maxWidth: '85.5%' }}>
        <FormLabel htmlFor="wd-points" className="mb-0 wd-label wd-points-label">Points </FormLabel>
          <FormControl
            type="number"
            id="wd-points" 
            defaultValue={100}
            max={100}
            />
         </div>
        </FormGroup>
       

       <FormGroup className="mb-3 mt-4" controlId="wd-assignment-group">
       <div className="d-flex align-items-center ms-auto" style={{ maxWidth: '85.5%' }}>
       <FormLabel htmlFor="wd-assignment-group" className="mb-0 wd-label wd-group-label">Assignment Group</FormLabel>
          <FormControl
          as="select"
          id="wd-assignemnt-group"
          style= {{appearance: 'auto'}}
          >
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>PROJECTS</option>
            <option>EXAMS</option>
            </FormControl>
          </div>
        </FormGroup>


      <FormGroup className="mb-3 mt-4" controlId="wd-display-grade">
      <div className="d-flex align-items-center ms-auto" style={{ maxWidth: '85.3%' }}>
        <FormLabel htmlFor="wd-display-grade" className="mb-0 wd-label wd-grade-label">Display Grade as </FormLabel>
          <FormControl
          as="select"
          id="wd-display-grade"
          style={{ appearance: 'auto'}}
          >
            <option>Percentage</option>
            <option>Points</option>
            <option>Letter Grade</option>
            <option>Complete/Incompplete</option>
            </FormControl>
          </div>
        </FormGroup>
  
<div className="d-flex align-items-center ms-auto" style={{ maxWidth: '85%' }}>
<FormLabel htmlFor="wd-subtype" className="mb-0 wd-label wd-top-left">Submittion Type</FormLabel>
<div className="mt-4 wd-straight-border-two">
<FormGroup className="mb-3 mt-3" controlId="wd-subtype">

    <FormControl 
    as="select"
    id="wd-subtype"
    style={{appearance: 'auto'}}
    >
    <option selected value="ONLINE">Online</option>
    <option value="IN PERSON">In Person</option>
  </FormControl>

<br/>
<span className="wd-bold d-block" style={{ marginTop: '1px' }} >Online Entry Options</span>
<br/>
<div className="form-check">
<input 
type="checkbox" 
className="form-check-input" 
id="wd-chkbox-text"
name="check-online"
/>
<label className="form-check-label" htmlFor="wd-chkbox-text">
  Text Entry
  </label>
  </div>

<div className="form-check">
<input 
type="checkbox" 
className="form-check-input" 
id="wd-chkbox-url"
name="check-online"
/>
<label className="form-check-label" htmlFor="wd-chkbox-url">
 Website URL
  </label>
  </div>

<div className="form-check">
<input 
type="checkbox" 
className="form-check-input" 
id="wd-chkbox-recordings"
name="check-online"
/>
<label className="form-check-label" htmlFor="wd-chkbox-recordings">
  Media Recordings
  </label>
  </div>

<div className="form-check">

<input 
type="checkbox" 
className="form-check-input" 
id="wd-chkbox-annotation"
name="check-online"
/>
<label className="form-check-label" htmlFor="wd-chkbox-annotation">
Student Annotation
  </label>
  </div>

<div className="form-check">
<input 
type="checkbox" 
className="form-check-input" 
id="wd-chkbox-uploads"
name="check-online"
/>
<label className="form-check-label" htmlFor="wd-chkbox-uploads">
  File Uploads
  </label>
</div>
</FormGroup>
</div>
</div>

  
<div className="d-flex align-items-center ms-auto" style={{ maxWidth: '85%' }}>
<FormLabel htmlFor="wd-subtype" className="mb-0 wd-label wd-assign-label">Assign</FormLabel>
<div className="mt-4 wd-straight-border-two">
<FormGroup className="mb-3 mt-3" controlId="wd-subtype">

<div id="wd-assign" className="mb-0">
  <span className="wd-bold">Assign to</span>
  <div className="mt-2 wd-straight-border wd-height wd-kambaz-relative">
    
  <span id="wd-assign-everyone"
  className="position-absolute" style={{ left: '65px', top: '25%'}}>
  <FaXmark  className="fs-5"/>
  </span>
<input
        type="text"
        value="Everyone"
        id="wd-background-for-everyone"
        className="form-control"
        style={{height: '40px',
            borderRadius: '3px'}}
        />
    </div>
    </div>
   

<br/>
<div className="wd-due">
<FormLabel htmlFor="wd-due" className="mb-0">
<span className="wd-bold">Due</span></FormLabel>
        <FormControl
        type="datetime-local"
        value="2025-05-13T11:59"
        id="wd-due"
        className="me-2 mt-1"
        />
</div>
<br/>

<div className="wd-from-until d-flex">
  <div className="mb-3 flex-grow-1">
<FormLabel htmlFor="wd-from-until" className="mb-0">
<span className="wd-bold">Available from</span></FormLabel>
        <FormControl
        type="datetime-local"
        value="2025-05-06T12:00"
        id="wd-due"
        className="me-3 mt-1"
        />
      </div>
<div className="mb-3 flex-grow-1">
<FormLabel htmlFor="wd-from-until" className="mb-0">
<span className="wd-bold">Until</span></FormLabel>
        <FormControl
        type="datetime-local"
        value="2025-05-06T12:00"
        id="wd-due"
        className="mt-1"
        />

</div>
</div>


  </FormGroup>
</div>
</div>

<hr className="mt-5"/>

<div className="d-flex justify-content-end">
        <Button variant="secondary" 
                className="me-2" 
                id="wd-cancel-button"
                >
         Cancel </Button> 

        <Button className="me-2 bg-danger" 
                id="wd-save-button"
                variant="secondary">
         Save </Button>  
    </div>

</Form>
</div>
</div>
</div>
</div>

);}