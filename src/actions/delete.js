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

const updateTasks = updatedTasks=>(
    {
        type: "add",
        payload: updatedTasks
    }
)

const populateState = state=>(
    {
        type: "populate",
        payload : state
    }
)

// now we need a thunk function to make requests to the database...
const getApiData = ()=>(
    dispatch=>{
        // fetch data from api...
        fetch("http://localhost:8000/tasks")
        .then(data=> data.json(), err=> console.log(err.message)) //turns data to real object
        .then(finalState=> dispatch(populateState(finalState))) //this way we have the final state in the store
    }
)

// we now need to make a thunk function for put fequests to the sever/ db
const updateTaskFromDb = taskId=>(
    dispatch=>{
        // query database for this specific task
        fetch(`http://localhost:8000/tasks/${taskId}`)
        .then(response=> response.json())
        .then(taskToUpdate => {
            // update the UI first for quicker user experience
            dispatch(reminder(taskId));
            let update = {
                ...taskToUpdate,
                reminder : !taskToUpdate.reminder //change it to the opposite of what it was...
            }
             // then we make a put request to the db to update this specific task...
             fetch(`http://localhost:8000/tasks/${taskId}`,{
                method: "PUT",
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(update)
            }).catch(err=>  
                console.log(`This error occured while trying to make put request to DB ${err.message}`))
               
        })
    }
)

const addTaskToDb = newPost=>(
    dispatch =>{
        // this ofcourse returns a promise but we dont need it so we dont save it to a vairable
        // trying to retun a promise just after we await its return can return a pending promise
        // but using it to do sommthing in the code will allow it to come back before making use of it
            fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost) //to turn new post into a Json type file
        }).then(()=>{
            // get updated data from db..
            fetch("http://localhost:8000/tasks")
            .then(response=> response.json())
            .then(updatedData=>{
                // dispatch the updatedTasks action to return the new state from the DB...
                dispatch(updateTasks(updatedData));
            })
        })
    }
)

export {getApiData, updateTaskFromDb, addTaskToDb}

export default deleter;