import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import pdf from '../../Assets/resume.pdf';
import { Button } from 'react-bootstrap';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Ahmed Alhalfa </span>
            from <span className="purple"> Alexandria, Egypt.</span>
            <br />I am currently employed as a software engineer at{' '}
            <a
              href="https://juthor.sa"
              style={{ color: '#ff6347', textDecoration: 'underline', fontWeight: 'bold' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Juthor
            </a>
            .
            <br />I have completed Bachelor's degree in Computer Engineering at{' '}
            <a
              href="https://www.mans.edu.eg/en"
              style={{ color: '#ff6347', textDecoration: 'underline', fontWeight: 'bold' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mansoura University
            </a>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>"Strive to build things that make a difference!" </p>
          <footer className="blockquote-footer">Ahmed</footer>
        </blockquote>
        <Button variant="primary" href={pdf} target="_blank" style={{ marginTop: '20px' }}>
          Download Resume
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
