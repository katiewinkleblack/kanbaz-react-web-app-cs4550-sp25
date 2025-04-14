import { Navigate, Route } from "react-router";
import Labs from "./Labs";
import { HashRouter } from "react-router";
import { Routes } from "react-router";
import Kambaz from "./Kambaz";
import { Provider } from "react-redux";
import store from "./Kambaz/store";

function App() {
  return (

    <Provider store={store}>
 
    <HashRouter>
     <div>
      <Routes>
      <Route path="/" element= {<Navigate to="Kambaz"/>} />
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kambaz/*" element={<Kambaz />} />
      <Route path="/Project" element={<h1>Project</h1>} />
      </Routes>
     </div>
    </HashRouter>

    </Provider>
  );
}

export default App;