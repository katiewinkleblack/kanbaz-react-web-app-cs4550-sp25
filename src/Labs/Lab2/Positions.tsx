import "./index.css";

export default function Positions() {
return (
<div id="wd-positions">
<div id="wd-css-position-relative">
  <h2>Relative</h2>
  <div className="wd-bg-color-gray">
    <div className="wd-bg-color-yellow 
                    wd-dimension-portrait">
      <div className="wd-pos-relative-nudge-down-right">
        Portrait</div></div>
    <div className="wd-pos-relative-nudge-up-right 
        wd-bg-color-blue wd-fg-color-white 
        wd-dimension-landscape">
      Landscape</div>
    <div className="wd-bg-color-red wd-dimension-square">
      Square</div>
  </div>
</div>

<div id="wd-css-position-absolute">
  <h2>Absolute position</h2>
  <div className="wd-pos-relative">
    <div className="wd-pos-absolute-10-10 
         wd-bg-color-yellow wd-dimension-portrait">
      Portrait</div>
    <div className="wd-pos-absolute-50-50 
         wd-bg-color-blue wd-fg-color-white 
         wd-dimension-landscape">
      Landscape</div>
    <div className="wd-pos-absolute-120-20 
         wd-bg-color-red wd-dimension-square">
      Square</div>
  </div><br /><br /><br /><br /><br /><br /><br />
</div>

<div id="wd-css-position-fixed">
<h2>Fixed Position</h2>
Checkout the blue square doesn't scroll, its position is FIXED
<div className="wd-position-fixed">
    <div className="wd-dimension-square wd-po-fixed wd-bg-color-blue wd-fg-color-white">
        Fixed
    </div>
</div>
</div>
</div>
);}