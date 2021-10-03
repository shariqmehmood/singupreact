import  React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        
<div className="topnav">
  <Link className="a" to="/">Home</Link>
  <Link className="a" to="/news">News</Link>
  {/*<Link className="a" to="#contact">Contact</Link>
  <Link className="a" to="#about">About</Link> */}
</div>

      
    )
}


export default Navbar;