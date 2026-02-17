import './index.css';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/link/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send');
    const [statusMessage, setStatusMessage] = useState('');

    const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
            setStatusMessage('Email service is not configured. Please check environment variables.');
            return;
        }

        setStatusMessage('');
        setButtonText('Sending...');

        emailjs.sendForm(
            emailJsServiceId,
            emailJsTemplateId,
            form.current,
            emailJsPublicKey
        )
            .then(() => {
                setButtonText('Send');
                setStatusMessage('Message sent successfully.');
                form.current?.reset();
            })
            .catch(() => {
                setButtonText('Send');
                setStatusMessage('Failed to send message. Please try again.');
            });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img
                                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                    src={contactImg}
                                    alt="Contact"
                                />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" placeholder="Name" name="user_name" required />
                                            </Col>

                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" placeholder="Email Address" name="user_email" required />
                                            </Col>

                                            <Col size={12} className="px-1">
                                                <textarea rows="6" name="message" placeholder="Message" required />
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                    {statusMessage && <p className="mt-3">{statusMessage}</p>}
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
