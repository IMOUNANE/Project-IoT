import React from "react"
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faBars,
  faBell
} from "@fortawesome/free-solid-svg-icons";
 function Header(props){
    const {className} = props;
 return(
    <div className={className}>
        <header>
            <Link to="/" className="headerLeftPart col-lg-3 col-xl-2 p-0">
                <div className="headerTitle">
                <h4 className="mg-txt text-white">Save Water</h4>
                </div>
            </Link>
            <div className="headerRightPart col-lg-9 col-xl-10 px-3 py-2">
                <div className="headerBar">
                <a
                    id="headerControl"
                    data-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="m-3"
                >
                <FontAwesomeIcon icon={faBars} className="text-white" size="2x" />
                </a>
                </div>

                {/* Est-ce que l'utilisateur a été trouvé ? Si oui, on affiche son avatar, sinon on affiche le Skeleton Loader */}

                <span className="avatarContainer cursor-pointer">
                    <span className="show">
                    <a
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="avatarContainer cursor-pointer"
                    >
                        <img
                            src="/logo192.png"
                            alt="profil"
                            width="50"
                            height="50"
                        />
                        
                    </a>
                    <div
                        className="dropdown-menu menu-header mt-4 mr-3 p-0"
                        id="dropdown"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <NavLink to="#" className="dropdown-item p-2 pl-4">
                            <FontAwesomeIcon icon={faCog} />
                            Paramètres
                        </NavLink>
                        <NavLink to="/" className="dropdown-item p-2 pl-4">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Déconnexion
                        </NavLink>
                    </div>
                    </span>
                </span>
            </div>
        </header>
  </div>
 )
}
export default withRouter(Header);