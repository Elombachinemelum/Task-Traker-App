import Task from "./Task";
import {useSelector} from "react-redux";

const Tasks = ()=>{
    // read value of the tasks from the store....
    const tasks = useSelector(state =>state.taskHandler);

    return (
        <>
            {/* we already have an id embedded in each of the tasks so no need to have a second argument*/}
            {/* for when there is no more Task component to render */}
            {tasks.length !==0 ?
                tasks.map(task => (<Task key={task.id} task={task} />)):
                <h3>No tasks at this time.</h3>
            }
        </>
    )
}

export default Tasks;