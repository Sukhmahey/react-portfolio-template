import React from "react";
import pip from "../assets/images/Linkdin.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://pip-wmdd.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pip} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://pip-wmdd.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>PIP - Practise Improve Perform</h2>
          </a>
          <p>
            PIP is a mobile application that helps people with social anxiety
            feel more comfortable in everyday interactions.
            <br />
            It provides a safe, private space where users can practice real-life
            social scenarios and receive objec- tive AI feedback on both verbal
            and non-verbal com- munication. With a progressive, level-based
            system, PIP supports users as they build confidence step by step,
            making social situations easier and more manageable in daily life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
