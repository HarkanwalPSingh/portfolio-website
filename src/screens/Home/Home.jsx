import React from "react";
import { Footer } from "../../components/Footer";
import { TwitterEmbedComponent } from "../../components/Twitter";
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
        <TwitterEmbedComponent className="twitter-embed" />
        <div className="overlap-6">
          <div className="overlap-7">
            <div className="text-wrapper-14"><a href="https://github.com/HarkanwalPSingh/portfolio-website">Portfolio Project 2023</a></div>
          </div>
          <div className="text-wrapper-15">Web Development</div>
        </div>
        <p className="text-wrapper-21">
        This project is a simple web application hosted on Github Pages, built solely for the purpose of showcasing my projects. 
        This application is built using HTML, CSS, and JavaScript(React, Storybook).
        </p>
        <img className="vector-3" alt="Vector" src="vector-line.svg" />
        <img className="vector-4" alt="Vector" src="vector-line.svg" />
        <img className="rectangle-5" alt="Rectangle" src="sample-image.svg" />
        <div className="overlap-8">
          <div className="overlap-9">
            <div className="text-wrapper-16">TwitterAPI V2</div>
          </div>
          <div className="text-wrapper-17">Serverless App</div>
        </div>
        <p className="text-wrapper-22">
        The Twitter V2 project, is me experimenting with some of the AI tools. The local version is available on Github but this project is hosted on GCP. 
        The key highlights of this project are:
        <li>Using AI tools to create tweet's image and context</li>
        <li>Triggering Serverless Functions on Cloud, based on CRON schedule</li>
        </p>
        <img className="vector-5" alt="Vector" src="vector-line.svg" />
        {/* <img className="rectangle-6" alt="Rectangle" src="sample-image.svg" /> */}
      </div>
    </div>
  );
};
