import { Navigate, Route } from "react-router";
import Labs from "./Labs";
import { HashRouter } from "react-router";
import { Routes } from "react-router";

function App() {
  return (
    <HashRouter>
     <div>
      <Routes>
      <Route path="/" element= {<Navigate to="Lab1"/>} />
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kambaz" element={<h1>Kambaz</h1>} />
      </Routes>
     </div>
    </HashRouter>
  );
}

export default App;