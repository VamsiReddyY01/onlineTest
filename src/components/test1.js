import React, { Component } from "react";
import classes from "../css/style.module.css";
import { questions1 } from "../propertyFiles/questions";
import { Container } from "react-bootstrap";
import Submit from "./submit.js";
import QuestionService from "../api/QuestionService";
// Test1 page
// Data being imported from property files

class Test1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0, // correct answer counter
            qstnCounter: 0, // question counter to display the repective questions
            selectedOption: '', //currently choosen option (answer) for the question
            show: true,
            isVisible: true,
            display: true //manages landing between test and submit pages
        }
        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.nextHandler = this.nextHandler.bind(this)
    }

    // Handling the option change once a radio button is clicked and passing the event as a parameter to save in the selected option

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });

        // If no selectedOption, value is undefined or null then the next button will be unavailable

        if (changeEvent.target.value !== 'undefined' || changeEvent.target.value !== 'null') {
            this.setState({ show: false })
        }

        // Once the user is on the last question the next button disappears and a submit button appears

        if (this.state.qstnCounter >= questions1.length - 1) {
            this.setState({ show: true, isVisible: false })
        }
    }

    nextHandler = () => {
        if (this.state.selectedOption === questions1[this.state.qstnCounter].Ans) {   // validating choosen option with the correct answer     
            this.setState({
                score: this.state.score + 1 // incrementing the score for correct option
            })
        }

        // Selected option is set back to null once the user clicks on next
        this.setState({
            selectedOption: '',
            qstnCounter: this.state.qstnCounter + 1, //incrementing the counter to display the next question
            show: true
        });
    }
    submithandler = (event) => {

        if (this.state.selectedOption === questions1[this.state.qstnCounter].Ans) {
            this.setState({
                score: this.state.score + 1, //incrementing the counter to display the next question
            })
        }
        this.setState({ display: false })   //to display submit component after clicking the submit
    }

    render() {
        return (
            <>
                {this.state.display ? (
                    <div className={classes.body}>
                        <Container className={classes.Container}>
                            <div className={classes.testPage}>
                                <button className={classes.btnNext} id="nextBtn" onClick={this.nextHandler}
                                    disabled={this.state.show}
                                    hidden={!this.state.isVisible}>Next
                                </button>

                                <button id="submit"
                                    disabled={!this.state.show}
                                    hidden={this.state.isVisible}
                                    className={classes.btnNext} onClick={this.submithandler}>Submit</button>

                            </div>
                            <div className={classes.questions}>
                                <div className="mainQuestion">
                                    <h2><em>Solve the question: </em></h2>
                                    <h2><strong>{questions1[this.state.qstnCounter].id}) </strong>{questions1[this.state.qstnCounter].q}</h2>
                                </div>
                                <div className={classes.options}>
                                    <label className="option">SELECT ONLY ONE</label>
                                    <div className="form-check" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <input className="form-check-input" style={{ marginLeft: '-3.25rem', marginTop: '0.7rem' }} type="radio" value="option1" name="optradio" checked={this.state.selectedOption === 'option1'}
                                            onChange={(changeEvent) => this.handleOptionChange(changeEvent)} />
                                        <label className="form-check-label">
                                            {questions1[this.state.qstnCounter].a}
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <input className="form-check-input" style={{ marginLeft: '-3.25rem', marginTop: '0.7rem' }} type="radio" value="option2" name="optradio" checked={this.state.selectedOption === 'option2'}
                                            onChange={(changeEvent) => this.handleOptionChange(changeEvent)} />
                                        <label className="form-check-label">
                                            {questions1[this.state.qstnCounter].b}
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <input className="form-check-input" style={{ marginLeft: '-3.25rem', marginTop: '0.7rem' }} type="radio" value="option3" name="optradio" checked={this.state.selectedOption === 'option3'}
                                            onChange={(changeEvent) => this.handleOptionChange(changeEvent)} />
                                        <label className="form-check-label">
                                            {questions1[this.state.qstnCounter].c}
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <input className="form-check-input" style={{ marginLeft: '-3.25rem', marginTop: '0.7rem' }} type="radio" value="option4" name="optradio" checked={this.state.selectedOption === 'option4'}
                                            onChange={(changeEvent) => this.handleOptionChange(changeEvent)} />
                                        <label className="form-check-label">
                                            {questions1[this.state.qstnCounter].d}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>) : (<Submit score={this.state.score} />)
                }
            </>
        );
    }
}

export default Test1;