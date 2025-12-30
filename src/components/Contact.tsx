import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name !== "" && email !== "" && message !== "") {
      var templateParams = {
        name: name,
        email: email,
        message: message,
      };

      console.log(templateParams);
      emailjs
        .send(
          "service_v7zc2xu",
          "template_sfebfzc",
          templateParams,
          "T-Q7H5CTdq0ATyG7s"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSnackbarMessage(
              "Email sent successfully! I'll get back to you soon."
            );
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error);
            setSnackbarMessage(
              "Failed to send email. Please try again or contact me directly."
            );
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
          }
        );
    }
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  console.log(name, email, message);

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got an Idea needed to be developed? Feel free to reach out!</p>
          <form
            ref={form}
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError && e.target.value !== "") {
                      setNameError(false);
                    }
                  }}
                  className={nameError ? "error" : ""}
                />
                {nameError && (
                  <span className="error-message">Please enter your name</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email / Phone</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Please provide your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError && e.target.value !== "") {
                      setEmailError(false);
                    }
                  }}
                  className={emailError ? "error" : ""}
                />
                {emailError && (
                  <span className="error-message">
                    Please enter your email or phone number
                  </span>
                )}
              </div>
            </div>
            <div className="form-group body-form">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Send me any inquiries or questions"
                rows={10}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (messageError && e.target.value !== "") {
                    setMessageError(false);
                  }
                }}
                className={messageError ? "error" : ""}
              />
              {messageError && (
                <span className="error-message">Please enter the message</span>
              )}
            </div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
              className="submit-button"
            >
              Send
            </Button>
          </form>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbarSeverity}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;
