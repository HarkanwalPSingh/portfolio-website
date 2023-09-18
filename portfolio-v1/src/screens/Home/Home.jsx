import React from "react";
import { Footer } from "../../components/Footer";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <img className="img" alt="Ellipse" src="harkanwal-profile.png" />
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">Download Resume</div>
        </div>
        <div className="greeting">
          <div className="greeting-2">
            Hi, I am Harkanwal,
            <br/>
            Software Engineer
          </div>
        </div>
        <p className="p">
        I'm a software engineer based in Bengaluru with 5 years of experience in the software industry. My area of focus for the past few years have been back-end development. 
        Over the years I have worked on various backend frameworks but mostly based on Python, Java and lately Scala.
        </p>
        <div className="overlap-group-2">
          <div className="text-wrapper-3">Works</div>
          <div className="text-wrapper-4">Blog</div>
        </div>
        <div className="text-wrapper-5">Contact</div>
        <div className="text-wrapper-12">Featured works</div>
        <Footer className="footer-instance" />
        <div className="overlap-6">
          <div className="overlap-7">
            <div className="text-wrapper-14">Portfolio Project 2023</div>
          </div>
          <div className="text-wrapper-16">Web Development</div>
        </div>
        <p className="text-wrapper-21">
        This project is a simple web application that allows users to create and manage to-do lists. The application is built using HTML, CSS, and JavaScript.
        </p>
        <img className="vector-3" alt="Vector" src="vector-line.svg" />
        <img className="vector-4" alt="Vector" src="vector-line.svg" />
        <img className="rectangle-5" alt="Rectangle" src="sample-image.svg" />
      </div>
    </div>
  );
};
