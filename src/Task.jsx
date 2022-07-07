import {FaTimes} from "react-icons/fa";
import {useDispatch} from "react-redux";
import deleter, {reminder} from "./actions/delete";

const Task = ({task})=>{
    // to be able to delete items all we need do is filter the array of tasks
    // hence we can have a function from App.js pass it down here, call it and pass in the task id
    // or we can just use redux and react-redux for a global state.
    const dispatch = useDispatch();

    // because the reminder passed down as props is from state, when the particular tast changes in
    // state it also changes here and the reminder key will be set to true or false...


    return(
        <div className={`task ${task.reminder ? 'reminder' : null}`} onDoubleClick={()=> dispatch(reminder(task.id))}>
            <h3>
                {task.text} 
                <FaTimes
                    style={{backgroundColor:"orange", borderRadius:"2px", cursor:"pointer"}}
                    onClick={ ()=>dispatch(deleter(task.id)) } 
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;