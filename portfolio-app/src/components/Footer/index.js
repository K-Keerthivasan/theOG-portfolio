
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/Name-Logo.png";
import navIcon1 from "../../assets/link/linked-in.svg";
import navIcon2 from '../../assets/link/hackerrank.svg';
import navIcon3 from '../../assets/link/discord.svg';
import navIcon4 from '../../assets/link/youtube.svg';
import navIcon5 from '../../assets/link/blogger-b.svg';
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">

                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="Icon" /></a>
                            <a href="#"><img src={navIcon3} alt="Icon" /></a>
                            <a href="#"><img src={navIcon4} alt="Icon" /></a>
                            <a href="#"><img src={navIcon5} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
