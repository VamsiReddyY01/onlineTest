import React, { Component } from 'react';
import classes from '../css/style.module.css';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isLoginfailed: true,
            showMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.authentication = this.authentication.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    authentication() {
        this.setState({ showMessage: true })
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            this.setState({ isLoginfailed: false })
            AuthenticationService.registerLogIn(this.state.username)
            this.props.navigate(`/home`)
        }
        else {
            this.setState({ isLoginfailed: true })
        }
        this.setState({ username: '', password: '' })
    }
    render() {
        return (
            <div className={classes.body}>
                <div className={classes.LoginContainer}>
                    <table>
                        <tbody>
                            {this.state.showMessage && this.state.isLoginfailed && <div className={classes.input}>Please enter the correct credentials!</div>}
                            <tr className={classes.input}><td>Username:</td><td><input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></td></tr>
                            <tr className={classes.input}><td>Password:</td><td> <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></td>
                            </tr></tbody></table>
                    <button className={classes.Loginbtn} onClick={this.authentication}>Login</button>
                </div>
            </div>
        )
    }
}
export default LoginComponent;
