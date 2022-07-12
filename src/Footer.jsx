import { Link } from "react-router-dom";

export default function Footer(){
    const currentYear = new Date().getFullYear();

    const style = {
        color: "black",
        textDecoration:"none",
    }
    return <footer>
        <p>CopyRight @ {currentYear}</p>
        <Link style={style} to="/about"><p style={{marginTop: ".8rem"}}>About</p></Link>
    </footer>
}