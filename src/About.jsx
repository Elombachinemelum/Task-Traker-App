import { Link } from "react-router-dom";

function About(){
    const style = {
        color: "black",
        textDecoration:"none",
    }
    return <>
        <h4>Version 1.1.0</h4>
        <Link style={style} to="/" >Home</Link>
    </>
}

export default About;