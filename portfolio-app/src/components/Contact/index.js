import './index.css'
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {Container, Row, Col} from "react-bootstrap";
import contactImg from "../../assets/link/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send');

    const sendEmail = (e) => {
        e.preventDefault();

        setButtonText("Sending...");

        emailjs.sendForm('portfolio-kkvasan',
            'portfolio-template2022',
            form.current, 'ok1J_wHS5uawo3dOb')

            .then((result) => {
                setButtonText("Send");
                alert('Sent!');
                window.location.reload();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg}
                                     alt="Contact Us"/>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>


                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" placeholder="Name" name="user_name" required/>
                                            </Col>

                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" placeholder="Email Address" name="user_email"
                                                       required/>
                                            </Col>

                                            <Col size={12} className="px-1">
                                                <textarea rows="6" name="message" placeholder="Message"
                                                          required></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>

                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
