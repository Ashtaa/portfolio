import React from "react";
import './About.css'

const About = ({ theme }) => {
  return (
    <div className={`about-content ${theme}`}  id="about" >
      <div className="table" id="about-section">
        
        <table className="tab">
        <h1 className="h1">Hello</h1>
          <tbody className="box">
            <tr>
              <td className="td">Name:</td>
              <td className="td1">Ashenafi</td>
            </tr>
            <tr>
              <td className="td">Country:</td>
              <td className="td1">Ethiopia</td>
            </tr>
            <tr>
              <td className="td">Age:</td>
              <td className="td1">20</td>
            </tr>
            <tr>
              <td className="td">Certificate:</td>
              <td className="td1">Meta</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="aboutp">
        <h1 className="h1">About</h1>
        <p>
          My name is Ashenafi Sahele and I am a frontend developer based in Addis Ababa, Ethiopia. I am passionate about building high-quality, user-friendly web applications that deliver great experiences.
          <br /><br />
          I hold an advanced certification in React from Meta, which has equipped me with deep expertise in this leading JavaScript framework. I am constantly learning and expanding my skills to stay ahead of the latest web development trends and best practices.
          <br /><br />
          As a young, dedicated professional, I bring a strong work ethic and creative problem-solving abilities to every project I take on. I thrive on the opportunity to collaborate with cross-functional teams and contribute to the entire software development lifecycle.
          <br /><br />
          If you're looking for a frontend developer who combines technical mastery, an eye for design, and a passion for building remarkable digital experiences, I welcome the opportunity to discuss how I can contribute to your next project.
        </p>
      </div>
    </div>
  );
};

export default About;