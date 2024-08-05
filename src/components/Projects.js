import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import eim from "../assets/img/eim.jpg";
import myrtec from "../assets/img/myrtec.jpg";
import cleverlabs from "../assets/img/cleverlabs.jpg";
import napoles from "../assets/img/napoles.png";
import portfolio from "../assets/img/portfolio.jpg";
import magkahiosa from "../assets/img/magkahiosa.jpg";
import colorSharp2 from "../assets/img/banner-bg.png";
import influencerslake from "../assets/img/influencerslake.png";
import mtpines from "../assets/img/mt-pines.png";
import umttipmo from "../assets/img/um-ttipmo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const localProjects = [
    {
      title: "Napoles Dental Clinic Website",
      description: "Design, Development & Deployment",
      imgUrl: napoles,
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: portfolio,
    },
    {
      title: "MagkahiOSA:",
      description: "Centralized Document Management Processing Platform",
      imgUrl: magkahiosa,
    },
    {
      title: "Influencerslake:",
      description: "A Social Media Engagement Growth Booster Tool",
      imgUrl: influencerslake,
    },
    {
      title: "Mt. Pines Spring Resort:",
      description: "Spring Resort Website and Booking Website",
      imgUrl: mtpines,
    },
    {
      title: "UM-TTIPMO",
      description: "University of Mindanao Technology Transfer and Intellectual Property Management Office",
      imgUrl: umttipmo,
    },
  ];

  const internationalProjects = [
    {
      title: "Eagle Property Management",
      description: "Content Writing and SEO Analytics",
      imgUrl: eim,
    },
    {
      title: "Myrtec",
      description: "Content Writing and SEO Analytics",
      imgUrl: myrtec,
    },
    {
      title: "CleverLabs",
      description: "Content Writing and SEO Analytics",
      imgUrl: cleverlabs,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>P R O J E C T S</h2>
                <p>Experience in front-end development, SEO writing, and UI/UX design has led to visually stunning websites, improved performance, interactive features, and third-party API integration. Expertise in keyword research, on-page optimization, and analytics has improved search engine visibility and website traffic.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Local Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">International Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          finishedProjects.map((localProjects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...localProjects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          ongoingProjects.map((internationalProjects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...internationalProjects}
                                />
                            )
                          })
                        }
                      </Row>
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
