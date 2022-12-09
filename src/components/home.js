import React, { Component } from "react";
import { properties } from '../propertyFiles/homePage.js';
import classes from '../css/style.module.css';
import '../css/bootstrap.css';

class Home extends Component {

    //All data is imported from a properties file

    render() {
        return (
            <div className={classes.body}>
                <div className={classes.Container}>
                    <h2>Welcome!</h2>
                    <h4>{properties.selecttestLabel}</h4><br />
                    <div className="dropdown">
                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select...
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/test1">Test1</a>
                            <a className="dropdown-item" href="./test2">Test2</a>
                        </div>
                    </div><br />
                </div>
            </div>
        );
    }
}

export default Home