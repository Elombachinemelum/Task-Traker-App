// import { ReactPropTypes as propTypes } from "prop-types";

const Button = (props)=>{
    const {bgColor, text, updateTaskStatus} = props
    // the color is handled in the class "btn"
    // and basically anything set here inline will over write the what's in the class
    return <button style={{backgroundColor: bgColor}} onClick={updateTaskStatus} className="btn">{text}</button>
}

// in the case where we pass in no bgColor or text. this default props object is used
Button.defaultProps = {
    bgColor: "black", 
    text : "Add"
}

// Button.propTypes = {
//     bgColor : propTypes.string
// }

export default Button;