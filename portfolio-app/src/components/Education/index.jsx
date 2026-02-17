import './index.css'
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {SoftwareCard} from "./SoftwareCard";
import {Skills} from "./Skills";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from "../../assets/icons/icons8-adobe-after-effects-240.png";
import projImg2 from "../../assets/icons/icons8-adobe-photoshop-240.png";
import projImg3 from "../../assets/icons/icons8-adobe-premiere-pro-240.png";
import projImg4 from "../../assets/icons/icons8-adobe-xd-240.png";
import projImg5 from "../../assets/icons/icons8-blender-3d-240.png";
import projImg6 from "../../assets/icons/icons8-zbrush-240.png";
import projImg7 from "../../assets/icons/icons8-unity-250.png";
import projImg8 from "../../assets/icons/icons8-unreal-engine-250.png";


export const Education = () => {

    const software = [
        {
            title: "Unity",
            description: "Game Design & Development",
            imgUrl: projImg7,
        },
        {
            title: "Unreal Engine",
            description: "Game Design & Development",
            imgUrl: projImg8,
        },
        {

            title: "Adobe After Effects",
            description: "Editing & Design",
            imgUrl: projImg1,
        },
        {
            title: "Adobe Photoshop",
            description: "Editing & Design",
            imgUrl: projImg2,
        },
        {
            title: "Adobe Premier Pro",
            description: "Editing & Design",
            imgUrl: projImg3,
        },
        {
            title: "Adobe XD",
            description: "UI & UX",
            imgUrl: projImg4,
        },
        {
            title: "Blender",
            description: "3D Modelling",
            imgUrl: projImg5,
        },
        {
            title: "Zbrush",
            description: "3D Sculpting",
            imgUrl: projImg6,
        },

    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="education" id="educations">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Education & Skills</h2>
                                    <Tab.Container id="education-tabs" defaultActiveKey="first">
                                        <Nav variant="pills"
                                             className="nav-pills mb-5 justify-content-center align-items-center"
                                             id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Education</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Skills</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Software Skills</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp"
                                                     className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <div className="education-bx wow zoomIn">
                                                    <h2>Education</h2>

                                                    <hr/>
                                                    <h3>MCA - College Of Engineering Guindy <h4>(2020-22)</h4></h3>

                                                    <ul>
                                                        <li>CGPA - 7.99</li>
                                                    </ul>
                                                    <hr/>
                                                    <h3>BCom(CS) -Ramakrishna Mission Vivekananda College
                                                        <h4>(2020-22)</h4></h3>

                                                    <ul>
                                                        <li>CGPA - 6.3</li>
                                                    </ul>

                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">

                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam,
                                                    quod neque provident velit, rem explicabo excepturi id illo
                                                    molestiae blanditiis, eligendi dicta officiis asperiores delectus
                                                    quasi inventore debitis quo.</p>


                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="education-bx wow zoomIn">
                                                                <h2>Skills</h2>
                                                                <p>Lorem Ipsum is simply dummy text of the printing and
                                                                    typesetting industry.<br></br> Lorem Ipsum has been
                                                                    the industry's standard dummy text.</p>
                                                                <br/><br/>
                                                                <br/><br/>
                                                                <section className="row">

                                                                    <Skills/>

                                                                </section>


                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>

                                            </Tab.Pane>

                                            <Tab.Pane eventKey="third">
                                                <div className="education-bx wow zoomIn">
                                                    <h2>Software Skills</h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                                        quam,
                                                        quod neque provident velit, rem explicabo excepturi id illo
                                                        molestiae blanditiis, eligendi dicta officiis asperiores
                                                        delectus
                                                        quasi inventore debitis quo.</p>
                                                    <div>
                                                        <Row>
                                                            {
                                                                software.map((project, index) => {
                                                                    return (
                                                                        <SoftwareCard
                                                                            key={index}
                                                                            {...project}
                                                                        />
                                                                    )
                                                                })
                                                            }
                                                        </Row>

                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
