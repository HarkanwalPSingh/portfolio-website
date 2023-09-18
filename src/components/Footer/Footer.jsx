import React from "react";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <a href="https://github.com/HarkanwalPSingh/"><img className="github" alt="GitHub" src="github.svg" /></a>
      <a href="https://www.linkedin.com/in/harkanwalpsingh/"><img className="linkedin" alt="Linkedin" src="linkedin.svg" /></a>
      <a href="mailto:harkanwal.p.singh@gmail.com"><img className="email" alt="Email" src="email.svg" /></a>
      <p className="text-wrapper">Copyright ©2023 All rights reserved</p>
    </div>
  );
};
