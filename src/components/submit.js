import React from 'react';
import classes from "../css/style.module.css";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";


function Submit({ score }) {
    return (
        <div className={classes.body}>
            <div className={classes.Container}>
                <div className={classes.submitPage}>
                    <h1>
                        Thank you for completing the test!
                        Your score is {score}
                    </h1><br />
                    <Link to='/login'>
                        <button className={classes.btnLogout} onClick={AuthenticationService.logout}>Logout!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Submit;