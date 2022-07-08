import React from "react";
import "./App.css";
import Header from "./Header"
import { useState } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const App = ()=>{
    
    //make a state to toggle the add task form to show....
    const [addingTask, setAddingTask] = useState(false);

    const updateTaskStatus = ()=>{
        console.log("logging from the app level", addingTask);
        setAddingTask(!addingTask);
    }


    return (
        <div className="container">
            <Header updateTaskStatus={updateTaskStatus} addingTask={addingTask} />
            {addingTask && <AddTask />}
            <Tasks />
        </div>
    )
}

export default App;