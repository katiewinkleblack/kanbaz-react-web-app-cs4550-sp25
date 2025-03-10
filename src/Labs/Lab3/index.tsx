import { useSelector } from "react-redux";
import Add from "./Add";
import AddingAndRemovingToFromArrays from "./ArrayAddRemove";
import ArrayIndexAndLength from "./ArrayIndexLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionaIfElse from "./ConditionalIfElse";
import ConditionalInline from "./ConditionalInline";
import Destructing from "./Deconstructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import Find4 from "./Find4";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestruction";
import Highlights from "./Highlight";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import PathParameters from "./PathParameters";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import "./index3.css";
import TodoList from "./todos/TodoList";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Lab3() {

    const { todos } = useSelector((state: any) => state.todoReducer);
  

    console.log("Hello World");
    return(
    <div id="wd-lab-3" className="wd-lab-3-padding">
    <h2>Lab 3</h2>

<ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />

    

    <h4>Github Repository Link</h4>
Please
<a href="https://github.com/katiewinkleblack/kanbaz-react-web-app-cs4550-sp25/tree/a3" 
id="wd-github"> click here </a>
to be directed to Repository - clarify it is on Branch "a3"<hr/>

    <VariablesAndConstants/>
    <VariableTypes/>
    <BooleanVariables/>
    <IfElse/>
    <TernaryOperator/>
    <ConditionaIfElse/>
    <ConditionalInline/><hr/>
    <LegacyFunctions/>
    <ArrowFunctions/>
    <ImpliedReturn />
    <TemplateLiterals/>
    <SimpleArrays/>
    <ArrayIndexAndLength/>
    <AddingAndRemovingToFromArrays/>
    <ForLoops/>
    <MapFunction/>
    <Find4/>
    <FindIndex/>
    <FilterFunction/>
    <JsonStringify/>
    <House/>
    <TodoList/>
    <Spreading/>
    <Destructing/>
    <FunctionDestructing/>
    <DestructingImports/>
    <Classes/>
    <hr/>
    <Styles/>
    <hr/>
    <Add a={3} b={4} />

    <h4>Square of 4</h4>
    <Square>4</Square>
    <hr/>
    <h4>Highlight Text</h4>
    <Highlights>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
    </Highlights>
    <hr/>
    <PathParameters/>


</div>

)
;
}