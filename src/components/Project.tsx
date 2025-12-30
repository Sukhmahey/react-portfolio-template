import React from "react";
import pip from "../assets/images/Linkdin.png";
import fitfound from "../assets/images/fitfound.webp";
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
        <div className="project">
          <a
            href="https://fit-found.vercel.app/"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#B3D0ED",
              borderRadius: "8px",
            }}
          >
            <img
              src={fitfound}
              className="zoom"
              alt="thumbnail"
              width="100%"
              style={{
                backgroundColor: "#B3D0ED",
                borderRadius: "8px",
              }}
            />
          </a>
          <a
            href="https://fit-found.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>FitFound</h2>
          </a>
          <p>
            Fitfound is a job-matching web application which is designed to flip
            the traditional hiring model allowing employers to find candidates
            instead the other way around. It allows employers to find candidates
            using AI candidate matching and verified employment history and
            candidates will be provided insights on their profile.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
