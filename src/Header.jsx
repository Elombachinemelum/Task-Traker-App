// we dont actually need to have React imported as of this version of React
import Button from "./Button";
// import { ReactPropTypes as propTypes } from "prop-types";

const Header = ({title, updateTaskStatus, addingTask})=>{

    return (
        <div className="header">
            <h1>{title}</h1>
            <Button bgColor={addingTask ? "orange" : "green"} text={addingTask ? "Close" :"Add"} updateTaskStatus={updateTaskStatus} />
            {/* <Button bgColor="red" text="Add" /> */}
            {/* <Button bgColor="yellow" text="Add" /> */}
        </div>
    )
}

// we can make a default prop for this component...
Header.defaultProps = {
    // here we can have our default props object we can add whatever default props we want and we can use it 
    // in the app as we have it...
    title: "Hello from React"
}

// Header.propTypes = {
//     title : propTypes.string
// }

export default Header;