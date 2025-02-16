
const ConditionalInline = () => {
 const loggedIn = false;
 return (
   <div id="wd-conditional-output-inline">
     { loggedIn && <h2>Welcome Online</h2>      }
     {!loggedIn && <h2>Please login Online</h2> }
   </div>
);};
export default ConditionalInline;