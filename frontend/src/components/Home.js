import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../logo.png";

export default function Home() {
  return (
    <section className="home" id="home">
      <Container className="homepage-container">
        <img src={logo} width={150} alt="logo"></img>

        <h1 className="header1">A recommendation system that actually work</h1>
        <div className="content">
          <p className="p1">
            Tell us your interest and discover your best matches. With Convinze,
            find only relevant content.
          </p>
          <a href="/signup">
            <Button className="btn1">Let's get started</Button>
          </a>
        </div>
        <a href="/signup">
          <p>I have an account or create account</p>
        </a>
      </Container>
    </section>
  );
}
