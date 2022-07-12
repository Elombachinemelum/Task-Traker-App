import Task from "./Task";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import {getApiData} from "./actions/delete"

const Tasks = ()=>{
    const dispatch = useDispatch();
    // dispatch thunk action to populate store with data from DB..   
    useEffect(()=>{
        dispatch(getApiData())
    }, [])

    // read value of the tasks from the store....
    const tasks = useSelector(state =>state.taskHandler);
    
    return (
        <>
            {/* we already have an id embedded in each of the tasks so no need to have a second argument*/}
            {/* for when there is no more Task component to render */}
            {tasks.length !==0 ?
                //since we no longer use the id we gave and the DB does it for us, we should just use the index of each element
                tasks.map((task, taskIndex) => (<Task key={taskIndex} task={task} />)):
                <h3>No tasks at this time.</h3>
            }
        </>
    )
}

export default Tasks;