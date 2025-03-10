import { Provider } from "react-redux";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariable";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import store from "./store";
import StringStateVariables from "./StringStateVariable";
import ReduxExamples from "./ReduxExamples";
import CounterRedux from "./CounterRedux.tsx";
import AddRedux from "./AddRedux/index.tsx";
import TodoList from "./todos/TodoList.tsx";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }

    return (
    <Provider store={store}>
    <div className="wd-lab-padding">
    <h2>Lab4</h2>
    <ClickEvent/>
    <PassingDataOnEvent/>
    <PassingFunctions theFunction={sayHello}/>
    <EventObject/>
    <Counter/>
    <BooleanStateVariables/>
    <StringStateVariables/>
    <DateStateVariable/>
    <ObjectStateVariable/>
    <ArrayStateVariable/>
    <ParentStateComponent/>
    <ReduxExamples/>
    <CounterRedux/>
    <AddRedux/>
    <TodoList/>

    </div>
    </Provider>
    );
}