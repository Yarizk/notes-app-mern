import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        
        <nav className="navbar bg-dark ">
            <h1 className="nav">
                <Link className="link" to="/" >Home</Link>
            </h1>
            <h1 className="nav">
                <Link className="link" to="/notes" >Notes</Link>
            </h1>
            <h1 className="nav">
                <Link className="link" to="/create" >Create</Link>
            </h1>
        </nav>
    )
}
export default Navbar;