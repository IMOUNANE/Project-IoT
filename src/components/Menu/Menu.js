import React from "react"
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./Menu.css";
function Menu(){

 return(
    <div>
        <div className="lateralBar col-lg-3 col-xl-2">
            <nav className="orginalNav d-flex flex-column align-items-center">
                <NavLink 
                    to="/" 
                    className="link-menu"//{selectedMenu === 1?"link-menu active":"link-menu"}
                >
                   Tableau de bord
                </NavLink>
                <NavLink 
                    to="/water" 
                    className="link-menu"//{selectedMenu === 1?"link-menu active":"link-menu"}
                >
                   Circuit eau de pluie 
                </NavLink>
                <NavLink 
                    to="/anomaly" 
                    className="link-menu"//{selectedMenu === 1?"link-menu active":"link-menu"}
                >
                   Anomalies 
                </NavLink>
                <NavLink 
                    to="/vat" 
                    className="link-menu"//{selectedMenu === 1?"link-menu active":"link-menu"}
                >
                   Reservoir d'eau de pluie
                </NavLink>
                <NavLink 
                    to="/consumption" 
                    className="link-menu"//{selectedMenu === 1?"link-menu active":"link-menu"}
                >
                   Consommation 
                </NavLink>
                <NavLink 
                    to="/planning" 
                    className="link-menu"//{selectedMenu === 1?"link-menu active":"link-menu"}
                >
                   Planning des bâtiments 
                </NavLink>
                <NavLink 
                    to="/maintenance" 
                    className="link-menu"//{selectedMenu === 1?"link-menu active":"link-menu"}
                >
                   Maintenance 
                </NavLink>
            </nav>
        </div>
  </div>
)}

export default withRouter(Menu);