import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineWhatsApp, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
              With over <strong>3 years of experience</strong> in both <strong>backend and frontend development</strong>
              , I specialize in crafting high-performance applications using <strong>Node.js</strong> and{' '}
              <strong>React</strong>. My comprehensive knowledge in <strong>DevOps practices</strong> ensures efficient
              development workflows and reliable deployment processes, while my expertise in{' '}
              <strong>eCommerce integrations</strong> allows me to seamlessly connect your platforms with various online
              marketplaces and services.
            </p>
            <h2 style={{ color: '#ff6347' }}>What I Offer:</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Scalable System Development:</strong> Building robust systems that grow with your business
                needs.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>eCommerce Integration:</strong> Connecting your platforms with multiple eCommerce solutions for
                enhanced functionality.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Full-Stack Expertise:</strong> Managing both backend and frontend development to provide
                cohesive and comprehensive solutions.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>DevOps Proficiency:</strong> Implementing best practices to streamline development, deployment,
                and maintenance processes.
              </li>
            </ul>
            <h2 style={{ color: '#ff6347' }}>Why Work With Me?</h2>
            <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
              I am passionate about transforming ideas into reality and committed to delivering projects that exceed
              expectations. Whether you're a startup looking to build your first application or an established business
              aiming to enhance your digital presence, I bring the skills and dedication needed to achieve your goals.
            </p>
            <h2 style={{ color: '#ff6347' }}>Let's Collaborate!</h2>
            <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
              I'm excited to work on innovative projects and help you navigate the challenges of software development.{' '}
              <a
                href="https://wa.me/201501072819"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ff6347', textDecoration: 'underline', fontWeight: 'bold' }}
              >
                Feel free to reach out
              </a>{' '}
              to discuss how we can collaborate to bring your vision to life.
            </p>{' '}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ahmedalhalfa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/201501072819"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ah.alhalfa@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmedalhalfa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
