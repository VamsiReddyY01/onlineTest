import React, { Component } from 'react';
import classes from '../css/style.module.css';
import Submit from "./submit.js";
import QuestionService from "../api/QuestionService";

// Test2 page

class Test2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dbQuestions: [],
            score: 0, // correct answer counter
            qstnCounter: 0, // question counter to display the repective questions
            selectedOption: '', //currently choosen option (answer) for the question
            show: true,
            isVisible: true,
            display: true //manages landing between test and submit pages
        }
        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.nextHandler = this.nextHandler.bind(this)
        // this.QuestionContainer = this.QuestionContainer.bind(this)
    }
    componentDidMount() {
        QuestionService.executeQuestionService("2")
            .then(response => response.json())
            .then(data => {
                // Update the component's state with the fetched data
                this.setState({ dbQuestions: data });
            })

    }
    // Handling the option change once a radio button is clicked and passing the event as a parameter to save in the selected option

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
        console.log(this.state.selectedOption)
        // If no selectedOption, value is undefined or null then the next button will be unavailable

        if (changeEvent.target.value !== 'undefined' || changeEvent.target.value !== 'null') {
            this.setState({ show: false })
        }

        // Once the user is on the last question the next button disappears and a submit button appears

        if (this.state.qstnCounter >= this.state.dbQuestions.length - 1) {
            this.setState({ show: true, isVisible: false })
        }
    }

    nextHandler = (answer) => {
        if (this.state.selectedOption === answer) {   // validating choosen option with the correct answer     
            this.setState({
                score: this.state.score + 1, // incrementing the score for correct option   
            })
        }
        this.setState({
            selectedOption: '',
            qstnCounter: this.state.qstnCounter + 1, //incrementing the counter to display the next question
            show: true
        })
    }
    submithandler = (answer) => {
        if (this.state.selectedOption === answer) {
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
                        {this.state.dbQuestions.filter((question, idx) => idx < this.state.qstnCounter + 1).map((question, index) => {
                            // this.QuestionContainer(question.id,question.question,question.a,question.b,question.c,question.d,question.answer)
                            return (
                                <div key={index} className={classes.Container}>

                                    <button className={classes.btnNext} id="nextBtn" onClick={() => this.nextHandler(question.answer)}
                                        disabled={this.state.show}
                                        hidden={!this.state.isVisible}>Next
                                    </button>

                                    <button id="submit"
                                        disabled={!this.state.show}
                                        hidden={this.state.isVisible}
                                        className={classes.btnNext} onClick={() => this.submithandler(question.answer)}>Submit</button>

                                    <div className={classes.questions}>

                                        <div className="mainQuestion">
                                            <h2><em>Solve the question: </em></h2>
                                            <h2><strong>{this.state.qstnCounter+1}) </strong>{question.question}</h2>
                                        </div>

                                        <div key={index} className={classes.options}>
                                            <label className="option">SELECT ONLY ONE</label>

                                            <div className="form-check" style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input className="form-check-input" style={{ marginLeft: '-3.25rem', marginTop: '0.7rem' }} type="radio" value="option1" name="optradio" defaultChecked={this.state.selectedOption === 'option1'}
                                                    onChange={(changeEvent) => this.handleOptionChange(changeEvent)} />
                                                <label className="form-check-label">
                                                    {question.a}
                                                </label>
                                            </div>

                                            <div className="form-check" style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input className="form-check-input" style={{ marginLeft: '-3.25rem', marginTop: '0.7rem' }} type="radio" value="option2" name="optradio" defaultChecked={this.state.selectedOption === 'option2'}
                                                    onChange={(changeEvent) => this.handleOptionChange(changeEvent)} />
                                                <label className="form-check-label">
                                                    {question.b}
                                                </label>
                                            </div>

                                            <div className="form-check" style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input className="form-check-input" style={{ marginLeft: '-3.25rem', marginTop: '0.7rem' }} type="radio" value="option3" name="optradio" defaultChecked={this.state.selectedOption === 'option3'}
                                                    onChange={(changeEvent) => this.handleOptionChange(changeEvent)} />
                                                <label className="form-check-label">
                                                    {question.c}
                                                </label>
                                            </div>

                                            <div className="form-check" style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input className="form-check-input" style={{ marginLeft: '-3.25rem', marginTop: '0.7rem' }} type="radio" value="option4" name="optradio" defaultChecked={this.state.selectedOption === 'option4'}
                                                    onChange={(changeEvent) => this.handleOptionChange(changeEvent)} />
                                                <label className="form-check-label">
                                                    {question.d}
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        )
                        }
                    </div>) : (<Submit score={this.state.score} />)
                }
            </>
        );
    }
}

export default Test2;