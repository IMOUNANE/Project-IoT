import React from "react"
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Header.css";

 function Header(props){
    const {className} = props;
 return(
    <div className={className}>
        <header>
            <Link to="/" className="headerLeftPart col-lg-3 col-xl-2 p-0">
                <div className="headerTitle">
                <h4 className="text-center text-white">Willy</h4>
                </div>
            </Link>
            <div className="d-flex justify-content-between align-items-center col-lg-9 col-xl-10 p-3">
                <h1 className="title">Tableau de bord</h1>
            </div>
        </header>
  </div>
 )
}
export default withRouter(Header);