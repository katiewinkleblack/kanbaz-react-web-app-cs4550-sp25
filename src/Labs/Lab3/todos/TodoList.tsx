
import TodoItem from "./TodoItems";
import todoss from "./todos.json";

export default function TodoList() {
 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
       { todoss.map(todo => {
           return(<TodoItem todo={todo}/>);   })}
     </ul><hr/>
   </>
);}
