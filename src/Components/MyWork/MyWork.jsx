import React from "react";
import "./MyWork.css";
import project1 from "../assets/project1.png"; // Adjust the paths as necessary
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <h1>My latest work</h1>
      <div className="work-container">
        <div className="work-item">
          <img src={project1} alt="Project 1" />
          <p>
            Tic Tac Toe is a simple two-player game where players take turns
            marking a 3x3 grid with Xs and Os to achieve three in a row.
          </p>
        </div>
        <div className="work-item">
          <img src={project2} alt="Project 2" />
          <p>
            This quiz app allows users to test their knowledge across various
            subjects through multiple-choice questions and interactive quizzes.
            It often features scoring systems, leaderboards, and the ability to
            track progress over time.
          </p>
        </div>
        <div className="work-item">
          <img src={project3} alt="Project 3" />
          <p>
            An AI image generator utilizes advanced algorithms to create
            original images based on user inputs or predefined styles. It
            empowers users to explore creativity by transforming text prompts or
            images into visually stunning artworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
