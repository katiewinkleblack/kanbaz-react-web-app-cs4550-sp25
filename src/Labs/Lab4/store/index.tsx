
import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../CounterRedux.tsx/counterReducer";
import addReducer from "../AddRedux/addReducer";
import todoReducer from "../todos/todoReducer";

const store = configureStore({

  reducer: { helloReducer,
    counterReducer,
    addReducer,
    todoReducer
   }});

export default store;