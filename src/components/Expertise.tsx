import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Node.js",
  "Express.js",
  "Firebase",
  "AWS",
  "Netlify",
  "Git",
  "Material UI",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "Swift",
  "Bare React Native",
  "Google Mediapipe Solution",
  "Facedetector",
  "Expo",
  "Redux",
  "Firebase",
  "AWS",
  "Git",
  "Docker",
  "CI/CD",
  "App Store Deployment",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have developed full-stack web applications from concept to
              deployment, leveraging React for dynamic UIs and Node.js/Flask for
              robust APIs and server logic. Proficient in the complete SDLC, I
              excel at integrating frontend and backend systems with databases
              like Firebase and cloud services including AWS.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Mobile App Development</h3>
            <p>
              I have developed cross-platform mobile applications using React
              Native, delivering native-like performance on iOS and Android from
              a single codebase. Once the application is built, I help clients
              set up DevOps testing, CI/CD pipelines, and deployment automation
              to support the successful Go-Live
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
