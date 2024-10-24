import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import bookit from '../../Assets/Projects/bookit.png';
import gemini from '../../Assets/Projects/gemini.png';
import reactJobs from '../../Assets/Projects/react-jobs.png';
import virtualR from '../../Assets/Projects/virtualr.png';
import expenseTracker from '../../Assets/Projects/expense-tracker.png';
import myTopMovies from '../../Assets/Projects/my-top-movies.png';
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-heading-container">
          <h1 className="project-heading">
            My Recent <strong className="purple">Work </strong>
          </h1>
          <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        </div>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookit}
              isBlog={false}
              title="Bookit"
              description="Bookit is a comprehensive room booking application built with Next.js. It allows users to browse available rooms, make bookings, and manage their reservations seamlessly. Admin users can add, edit, and delete rooms, as well as oversee all bookings."
              ghLink="https://github.com/ahmedalhalfa/booking-app"
              demoLink="https://halfa-dev-booking-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="Gemini Clone"
              description="Gemini Clone is a React-based web application that leverages Google's Gemini Generative AI to provide users with an interactive and intelligent conversational experience. Whether you're looking to brainstorm business ideas, seek travel suggestions, or improve website designs, Gemini Clone is here to assist."
              ghLink="https://github.com/ahmedalhalfa/gemini-clone"
              demoLink="https://halfa-dev-gemini-clone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactJobs}
              isBlog={false}
              title="React Jobs"
              description="A responsive and user-friendly job listing platform built with React. React Jobs allows developers to browse, add, edit, and delete job postings tailored for React developers. Leveraging modern technologies like Vite, Tailwind CSS, and React Router, the project offers a seamless experience for both job seekers and employers."
              ghLink="https://github.com/ahmedalhalfa/dev-jobs"
              demoLink="https://halfa-dev-react-jobs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualR}
              isBlog={false}
              title="VirtualR"
              description="VirtualR Development Tools is a side project showcasing a modern, responsive web application built with React and Vite. It demonstrates the use of various frontend technologies to create an intuitive interface for virtual reality (VR) development tools."
              ghLink="https://github.com/ahmedalhalfa/VirtualR-landing-page"
              demoLink="https://halfa-dev-virtualr-landing-page.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Expense Tracker"
              description="The Expense Tracker is a web application that allows users to track their income and expenses. It provides features such as adding transactions, viewing transaction history, and calculating the balance. The application is built using Next.js, React, and Prisma, and it uses Clerk for authentication."
              ghLink="https://github.com/ahmedalhalfa/expenses-tracker"
              demoLink="https://halfa-dev-expenses-tracker.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myTopMovies}
              isBlog={false}
              title="My Top Movies"
              description="My Top Movies is an IMDB backend replica built on top of NodeJs/Express Restful APIs"
              ghLink="https://github.com/ahmedalhalfa/My-Top-Movies"
              demoLink="https://documenter.getpostman.com/view/17188484/UV5UjyYG"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
