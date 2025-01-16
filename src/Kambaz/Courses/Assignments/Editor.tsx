export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name" style={{ fontWeight: 'bold' }}>Assignment Name</label>
        <br/>
        <br/>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
            <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment">Assignment Group</label>
          </td>
          <td>
<select id="wd-assignment">
    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
    <option value="QUIZZES">QUIZZES</option>
    <option value="PROJECT">PROJECTS</option>
    <option value="EXAMS">EXAMS</option>
</select>
          </td>
        </tr>

        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-grade">Display Grade as</label>
          </td>
          <td>
<select id="wd-grade">
    <option selected value="PERCENTAGE">Percentage</option>
    <option value="POINTS">Points</option>
    <option value="LETTER GRADE">Letter Grade</option>
    <option value="COMPLETE/INCOMPLETE">Complete/Incomplete</option>
</select>
          </td>
        </tr>

        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-subtype">Display Grade as</label>
          </td>
          <td>
<select id="wd-subtype">
    <option selected value="ONLINE">Online</option>
    <option value="IN PERSON">In Person</option>
</select>
<br/>
<br/>
<label>Online Entry Options</label><br/>

<input type="checkbox" name="check-online" id="wd-chkbox-text"/>
<label htmlFor="wd-chkbox-text">Text Entry</label><br/>

<input type="checkbox" name="check-online" id="wd-chkbox-url"/>
<label htmlFor="wd-chkbox-url">Website URL</label><br/>

<input type="checkbox" name="check-online" id="wd-chkbox-recordings"/>
<label htmlFor="wd-chkbox-recordings">Media Recordings</label><br/>

<input type="checkbox" name="check-online" id="wd-chkbox-annotation"/>
<label htmlFor="wd-chkbox-annotation">Student Annotation</label><br/>

<input type="checkbox" name="check-online" id="wd-chkbox-uploads"/>
<label htmlFor="wd-chkbox-uploads">File Uploads</label>

          </td>
        </tr>
<br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign to</label>
          </td>
          <td>
            <input id="wd-assign" value="Everyone" />
          </td>
        </tr>  

<br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-date">Due</label>
          </td>
          <td>
          <input type="date"
       value="2024-05-13"
       id="wd-date"/><br/>
          </td>
        </tr> 

<br/>

<tr>
          <td align="right" valign="top" style={{ paddingRight: '30px' }}>
          <label htmlFor="wd-dateavail">Available from</label>
          </td>
          <td align="right" valign="top" style={{ paddingRight: '120px' }}>
            <label htmlFor="wd-dateuntil">Until</label>
          </td>
          </tr>
          <tr>
          <td>
          <input type="date" value="2024-05-06" id="wd-dateavail"/><br/>
          </td>
        
            <td>
          <input type="date" value="2024-05-20" id="wd-dateuntil"/><br/>
          </td>
        </tr>

</table>
<svg viewBox="0 0 100 100">
  <line	x1="-30" y1="7"
		x2="100" y2="7"
		stroke="black" />
</svg>

<div style={{ position: 'absolute', top: '710px', left: '350px'}}>
<button>Cancel</button> <button>Save</button>

</div>
</div>
);}