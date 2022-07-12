// we dont actually need to have React imported as of this version of React
import Button from "./Button";
import {useLocation} from "react-router-dom";
// import { ReactPropTypes as propTypes } from "prop-types";

const Header = ({title, updateTaskStatus, addingTask})=>{
    const location = useLocation();

    return (
        <div className="header">
            <h1>{title}</h1>
            {/* to render button only when we are not in the "/about" route */}
            {location.pathname !== "/about" &&
                <Button bgColor={addingTask ? "orange" : "green"} text={addingTask ? "Close" :"Add"} updateTaskStatus={updateTaskStatus} />
            }
            {/* <Button bgColor="red" text="Add" /> */}
            {/* <Button bgColor="yellow" text="Add" /> */}
        </div>
    )
}

// we can make a default prop for this component...
Header.defaultProps = {
    // here we can have our default props object we can add however many default props we want. 
    // this is a fall back props in the event that a title prop is not passed to this component...
    title: "Hello from React"
}

// Header.propTypes = {
//     title : propTypes.string
// }

export default Header;