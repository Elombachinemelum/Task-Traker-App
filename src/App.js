import React from "react";
import "./App.css";
import Header from "./Header"
// import { useState } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const App = ()=>{
    
    // make a state to store tasks
    // const [tasks, setTasks] = useState([...details])


    return (
        <div className="container">
            <Header />
            <AddTask/>
            <Tasks />
        </div>
    )
}

export default App;