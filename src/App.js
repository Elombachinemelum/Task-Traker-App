import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import {Routes, Route} from "react-router-dom"
import Home from "./Home";

const App = ()=>{
    
    //make a state to toggle the add task form to show....
    const [addingTask, setAddingTask] = useState(false);

    const updateTaskStatus = ()=>{
        // console.log("logging from the app level", addingTask);
        setAddingTask(!addingTask);
    }


    return (
        <div className="container">
            <Header title="Task Tracker" updateTaskStatus={updateTaskStatus} addingTask={addingTask} />
            <Routes>
                <Route path="/"
                    element={<Home addingTask={addingTask}/>}
                />
                <Route path="/about" element={<About/>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;