import { useState } from "react";
import {useDispatch} from "react-redux"
import { addTaskToDb } from "./actions/delete";

const AddTask = ()=>{
    const dispatch = useDispatch();

    // we need some app level state to allow us store info from the input fields
    const [task, setTask] = useState("");
    const [dayAndTime, setDayAndTime] = useState("");
    const [reminder, setReminder] = useState(false);
    const [infoCheck, setInfoCheck] = useState(undefined);

    // have a single function to handle all inputs
    function handleChanges(evt){
        const {name, value} = evt.target
        name === "task" && setTask(value);
        name === "day" && setDayAndTime(value)
        name === "reminder" && setReminder(!reminder)
        //console.log(value); //for a checkbox input the value is on or off...
    }

    // function to make check for us...
    const check = (info, what)=> {
        let infoChecked = info.toString()
        let whatChecked = what.toString()
        return infoChecked.includes(whatChecked); //expect a boolean
    }

    function verifyDateInfo(evt, info){
        evt.preventDefault()//prevents the form from refreshing the page...

        // need to be sure we have the right info
        let at = "@"; let th = "th"; let tick = ":"; let st = "st"; let cm = ","

        // info is the value of dayAndTime to be passed to the action
        if(check(info, at) && (check(info, th) || check(info, st)) && check(info, tick) && check(info, cm)) {
            // dispatch thunk to make post request and fetch the new data from the to be returned as new state...
            dispatch(addTaskToDb({
                //id : currentState.length + 1, //database wont really need you to add an Id field
                text: task,
                day: dayAndTime,
                reminder: reminder
            }))
            setInfoCheck(true)

            // clear all fields back to default
            setTask(""); setDayAndTime(""); setReminder(false);
        }else {
            setInfoCheck(false);
            // we also need to show the user an alert to let them know they entered the wrong info structure
            alert('Date and Time should be in this format "1st, January @ 14:00". Please use 24hour timing')
        }
    }

    return(
        <form className="add-from" onSubmit={evt=> verifyDateInfo(evt, dayAndTime)}>
            <div className="form-control">
                <label>Task</label>
                <input name="task" required autoFocus type="text" onChange={handleChanges} value={task} placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Day and time</label>
                {/* style input according to the validation of day and time */}
                <input
                    name="day" 
                    style={
                        infoCheck ? null
                        : infoCheck === false ? {border: "2px solid red"}
                        : null
                        }
                    required type="text" onChange={handleChanges} value={dayAndTime} placeholder="1st, January @ 14:00"
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input name="reminder" type="checkbox" checked={reminder} onChange={handleChanges} />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask;