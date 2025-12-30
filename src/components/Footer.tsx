import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Sukhmahey" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/sukhbirsinghdevs/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        A portfolio inspired from{" "}
        <a href="https://github.com/yujisatojr/react-portfolio-template">
          Yuji
        </a>{" "}
        and built by{" "}
        <a
          href="https://github.com/Sukhmahey/react-portfolio-template"
          target="_blank"
          rel="noreferrer"
        >
          Sukhbir Singh
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
