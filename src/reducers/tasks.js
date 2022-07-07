import { combineReducers } from 'redux'

const tasks = [
    {
        id : 1,
        text: "Doctors Apointment",
        day: "5th, February @ 14:30",
        reminder: false
    },
    {
        id : 2,
        text: "Meeting at school",
        day: "6th, February @ 14:39",
        reminder: false
    },
    {
        id : 3,
        text: "Food shopping",
        day: "5th, February @ 11:30",
        reminder: false
    },
    {
        id : 4,
        text: "Going to the gym",
        day: "5th, February @ 8:30",
        reminder: false
    }
]


function taskHandler(state= tasks, action){
    switch(action.type){
        case "delete":
            const remainder = state.filter(item => item.id !== action.payloadId)
            return remainder //an array returned from the filter..

        case "reminder":
            // const newStateArray = state.filter(task => task.id === action.payloadId ?
            //    {
            //     // since task is an object, we spread the task and return it into the new array being
            //     // populated and then change the reminder to the opposite of what it was. else we 
            //     // just return the task as it is...

            //    } : null)
            // the filter method does not work for long logic just somthing to compare and return into and array
            const newStateArray = [];
            state.forEach(task => {
                if(task.id === action.payloadId){
                    newStateArray.push({
                        ...task,
                        reminder: !task.reminder
                    })
                }else newStateArray.push(task)
            })
            return newStateArray;

            case "add":
                return [...state, action.payload]

        default: return state;
    }
}

const combinedReducer = combineReducers({
    taskHandler //ES6 style...
})

export default combinedReducer;