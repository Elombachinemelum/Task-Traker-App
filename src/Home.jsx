import Tasks from "./Tasks"
import AddTask from "./AddTask"


const Home = props=>{
    const {addingTask} = props;

    return(
        <>
            {addingTask && <AddTask />}
            <Tasks />
        </>
    )
}

export default Home;