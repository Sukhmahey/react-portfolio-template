import React from "react";
import pip from "../assets/images/Linkdin.png";
import fitfound from "../assets/images/fitfound.webp";
import parksmart from "../assets/images/parksmartDemo.png";
import tiffinHub from "../assets/gifs/tiffinHub.mp4";
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
            href="https://tiffin-service-template.vercel.app/"
            target="_blank"
            rel="noreferrer"
            style={{
              borderRadius: "8px",
              display: "block",
              overflow: "hidden",
            }}
          >
            <video
              src={tiffinHub}
              className="zoom"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </a>
          <a
            href="https://tiffin-service-template.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Tiffin Hub</h2>
          </a>
          <p>
            Tiffin Hub is a template website I created for my friend's tiffin
            service company. It provides a modern and user-friendly platform for
            showcasing their tiffin service offerings, making it easy for
            customers to browse menus, place orders, and learn about the
            service.
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
        <div className="project">
          <a
            href="https://parksmart-sable.vercel.app/"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
            }}
          >
            <img
              src={parksmart}
              className="zoom"
              alt="thumbnail"
              width="100%"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            />
          </a>
          <a
            href="https://parksmart-sable.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ParkSmart</h2>
          </a>
          <p>
            ParkSmart is a smart parking solution that helps users find,
            reserve, and navigate to available parking spots effortlessly.
            Owners can list their spaces to earn money, creating opportunities
            for employment while making city parking more efficient and
            stress-free.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
