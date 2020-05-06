import React, { Component } from 'react';
import './MyForm.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ReCAPTCHA from "react-google-recaptcha"
import { FacebookProvider, Page } from 'react-facebook';
import Popup from "reactjs-popup";

class MyForm extends Component {

    constructor(props) {
        super(props);

        //fuggvenyek bindolasa
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.sendData = this.sendData.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.clearForm = this.clearForm.bind(this);

        //state inicializalasa
        this.state = this.getInitialState();

        //referenciak az inputokhoz
        this.lastName = React.createRef();
        this.firstName = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
        this.message = React.createRef();
    }

    //inicializalja a state-et
    getInitialState() {
        return {
            valid: true,
            lastNameValid: "none",
            firstNameValid: "none",
            emailValid: "none",
            phoneValid: "none",
            captchaVal: false,
            showpopup: false
        }
    }

    //kezeli a form elkuldesi szandekot
    handleSubmit(event) {
        event.preventDefault();

        //log data
        console.log("lastName: " + this.lastName.current.value);
        console.log("firstName: " + this.firstName.current.value);
        console.log("email: " + this.email.current.value);
        console.log("phone: " + this.phone.current.value);
        console.log("message: " + this.message.current.value);

        this.setState({
            valid: this.validateForm(),
        }, function () {
                if (this.state.valid === true) {
                    this.sendData();
                    this.setState({ showpopup: true });
                }
                else {
                    //console.log("form invalid");
                    //barmi egyeb tevekenyseg, hiba kiiras, igeny szerint barmi lehet
                }
            }.bind(this));
    }

    //validalja a form adatokat
    validateForm() {
        let isFormValid = true;
        let emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        let phoneRegExp = /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/;
        console.log("emailMatches: " + emailRegExp.test(this.email.current.value));
        console.log("phoneMatches: " + phoneRegExp.test(this.phone.current.value));

        if (this.lastName.current.value === "") {
            this.setState({ lastNameValid: "block" });
            isFormValid = false;
        }
        if (this.firstName.current.value === "") {
            this.setState({ firstNameValid: "block" });
            isFormValid = false;
        }
        if (this.email.current.value === "" || !emailRegExp.test(this.email.current.value)) {
            this.setState({ emailValid: "block" });
            isFormValid = false;
        }
        if (this.phone.current.value === "" || !phoneRegExp.test(this.phone.current.value)) {
            this.setState({ phoneValid: "block" });
            isFormValid = false;
        }
        if (this.state.captchaVal === false || this.state.captchaVal === undefined) {
            isFormValid = false;
        }
        
        return isFormValid;
    }

    //ujrainicializalja a state-et ha valtozik az input erteke
    onInputChange() {
        this.setState(this.getInitialState());
    }

    //elkuldi a form adatokat a back endre
    sendData() {
        console.log('fetch előtt');
        fetch('https://testx7.hu:9000/email/inquiry', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lastName: this.lastName.current.value,
                firstName: this.firstName.current.value,
                email: this.email.current.value,
                phone: this.phone.current.value,
                message: this.message.current.value
            })
        }).then(function (response) {
            console.log("response: " + response.status);
            if (response.ok) {
                console.log("SUCCESS");
                
                //popup
            }
            else {
                console.log("SOMETHING WENT WRONG");
            }
        });
    }

    //captcha validalasa
    verifyCallback = (response) => {
        if (response) {
            this.setState({
                captchaVal: true,
            });
        }
    }

    //triggereli a form inputok torleset es bezarja a popup-ot
    closePopup() {
        this.clearForm();
        this.setState(this.getInitialState());
    }

    //torli a form inputok erteket
    clearForm() {
        this.lastName.current.value = "";
        this.firstName.current.value = "";
        this.email.current.value = "";
        this.phone.current.value = "";
        this.message.current.value = "";
    }

    render() {
        return (
            <div id="contact">
                <Form className="form-padding" onSubmit={this.handleSubmit}>
                    <Form.Label>Kérem pontosan töltse ki az űrlapot!</Form.Label>
                    <Form.Group controlId="formLastName">
                        <Form.Control type="text" placeholder="vezetéknév" ref={this.lastName} onChange={this.onInputChange} />
                        <Form.Control.Feedback type="invalid" style={{ display: this.state.lastNameValid }}>
                            Kérjük adja meg vezetéknevét!
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formFirstName">
                        <Form.Control type="text" placeholder="keresztnév" ref={this.firstName} onChange={this.onInputChange} />
                        <Form.Control.Feedback type="invalid" style={{ display: this.state.firstNameValid }}>
                            Kérjük adja meg keresztnevét!
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="e-mail" ref={this.email} onChange={this.onInputChange} />
                        <label className="form-example-label">Helyes formátum: example@example.com</label>
                        <Form.Control.Feedback type="invalid" style={{ display: this.state.emailValid }}>
                            Kérjük adja meg e-mail címét a helyes formátumban!
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control placeholder="telefonszám" ref={this.phone} onChange={this.onInputChange} />
                        <label className="form-example-label">Helyes formátum: +36201234567</label>
                        <Form.Control.Feedback type="invalid" style={{ display: this.state.phoneValid }}>
                            Kérjük adja meg telefonszámát a helyes formátumban!
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formText">
                        <textarea ref={this.message}
                            className="form-control myform-textarea"
                            rows="5"
                        />
                    </Form.Group>
                    <Form.Group className="captcha-div">
                        <ReCAPTCHA className="g-recaptcha"
                            sitekey="6LflLOAUAAAAAIGMs3rQ2amvF94nd_lCS7kS1Q1B"
                            onChange={this.verifyCallback}
                        />
                    </Form.Group>
                    <Button type="submit" className="myform-btn shift-green">KÜLDÉS</Button>
                </Form>
             
                <Popup open={this.state.showpopup} modal>
                        <div className="modal-content">
                            <div className="modal-items">
                                <label>Sikeres üzenetküldés! Kérjük nézze meg e-mail fiókját.</label>
                            </div>
                            <div className="modal-items">
                                <label>Köszönjük érdeklődését!</label>
                            </div>
                            <div className="modal-items">
                                <Button type="button" className="myform-btn shift-green" onClick={this.closePopup}>OK</Button>
                            </div>
                        </div>
                </Popup>
            </div>
        );
    }

}

export default MyForm;