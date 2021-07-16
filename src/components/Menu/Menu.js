import React,{ useState } from "react"
import $ from "jquery";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./Menu.css";
function Menu(){
    const closeMenu = () => {
        $("#headerControl").attr("aria-expanded", "false");
        $("#headerControl").attr("class", "m-3 collapsed");
        $("#collapseExample").attr("class", "collapsing");
    };
 return(
    <div>
        <div className="responsiveMenu">
        <div className="collapse" id="collapseExample">
            <div className="card rounded-0 sousMenuResponsive">
            <nav>
                <NavLink
                to="/"
                className="p-3"
                onClick={() => closeMenu()}
                >
                    PageTest
                </NavLink>
                <NavLink
                to="/"
                className="p-3"
                onClick={() => closeMenu()}
                >
                    Dashboard
                </NavLink>
            </nav>
            </div>
        </div>
        </div>
        <div className="lateralBar col-lg-3 col-xl-2">
            <nav className="orginalNav">
                <NavLink 
                    exact
                    to="/" 
                    className="link-menu"//{selectedMenu === 0?"link-menu active":"link-menu"}
                >
                    Page Test
                </NavLink>
                <NavLink 
                    to="/dashboard" 
                    className="link-menu"//{selectedMenu === 1?"link-menu active":"link-menu"}
                >
                   Dashboard
                </NavLink>
            </nav>
        </div>
  </div>
)}

export default withRouter(Menu);