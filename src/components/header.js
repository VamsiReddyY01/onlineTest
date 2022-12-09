import React from "react";
import classes from "../css/style.module.css";
import Navbar from "react-bootstrap/Navbar";
import { properties } from "../propertyFiles/homePage";


// Header page

function Header() {
    return (
        <div className={classes.header}>
            <Navbar className={classes.companyName}>
                <h2>{properties.companyName}</h2>
            </Navbar>
        </div>
    )
}

export default Header;