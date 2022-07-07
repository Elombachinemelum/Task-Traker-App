// for deleting tasks
const deleter = anId =>(
    {
        type:"delete",
        payloadId: anId
    }
)

// for updating the task as a reminder...
const reminder = taskId =>(
    {
        type: "reminder",
        payloadId : taskId
    }
)

const addTask = newTask=>(
    {
        type: "add",
        payload: newTask
    }
)

export {reminder, addTask}

export default deleter;