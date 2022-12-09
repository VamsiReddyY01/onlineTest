import classes from "../css/style.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import AuthenticationService from "./AuthenticationService";


function Submit({ score }) {
    return (
        <div className={classes.body}>
            <Container className={classes.Container}>
                <div className={classes.submitPage}>
                    <h1>
                        Thank you for completing the test!
                        Your score is {score}
                    </h1><br />
                    <Link to='/login'>
                        <button className={classes.btnLogout} onClick={AuthenticationService.logout}>Logout!</button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Submit;