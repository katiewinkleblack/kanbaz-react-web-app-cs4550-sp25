import { Container } from "react-bootstrap";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import Margins from "./Margins";
import Padding from "./Padding";
import Positions from "./Positions";
import ReactIconsSampler from "./ReactIcons";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {

    return (

      <Container>
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the STYLE attribute</h3>

        <div id="wd-css-id-selectors">
          <h3>ID Selectors</h3>
        <p id="wd-id-selector-1">
          Style attribute allows configuring look and feel
          right on the element. 
          </p>
          <p id="wd-id-selector-2">
          Although it's very convenient
          it is considered bad practice and you should avoid
          using the style attribute
        </p>
        </div>

        <div id="wd-className-selectors">
        <p className="wd-class-selector">
        Instead of using IDs to refer to elements, 
        you can use an element's CLASS attribute
        </p>

        <h4 className="wd-class-selector">
            This heading has the same style as the paragraph so we 
            can use className
        </h4>

        </div>

        <div id="wd-css-document-structure">
  <div className="wd-selector-1">
    <h3>Document structure selectors</h3>
    <div className="wd-selector-2">
      Selectors can be combined to refer elements in particular
      places in the document
      <p className="wd-selector-3">
        This paragraph's red background is referenced as
        <br />
        .selector-2 .selector3<br />
        meaning the descendant of some ancestor.<br />
        <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span><br />
          You can combine these relationships to create specific 
          styles depending on the document structure
      </p>
    </div>
  </div>
</div>

<ForegroundColors/>
<BackgroundColors/>
<Borders/>
<Padding/>
<Margins/>
<Corners/>
<Dimensions/>
<Positions/>
<Float/>
<GridLayout/>
<Flex/>
<ReactIconsSampler/>
<br/>
<BootstrapGrids/>
<br/>
<ScreenSizeLabel/>
<br/>
<BootstrapTables/>
<BootstrapForms/>
<BootstrapNavigation/>

      </Container>);}