import React, { useEffect, useState } from "react";
import './skill.css';
import { FaNodeJs, FaGithub, FaComments } from "react-icons/fa";


const skills = [
  { name: "React", level: 60 },
  { name: "Firebase", level: 40 },
  { name: "MongoDB", level: 35 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
];

const circularSkills = [
  { name: "Node.js", level: 30},
  { name: "Git", level: 30 },
  { name: "Docker", level: 25 },
];

const Skills = ({theme}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay
    setTimeout(() => setLoaded(true), 100); // Delay to ensure elements are rendered
  }, []);

  return (
    <div className={`skills-container ${theme}`} id="skill" >
      {/* Column 1: Horizontal Bar Skills */}
      <div className="skill-bar-container">
        <h2>My Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: loaded ? `${skill.level}%` : "0%", // Animate the width change
                }}
              ></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
            
          </div>
        ))}
      </div>

      {/* Column 2: Circular Progress Bar Skills */}
      <div className="additional-skills">
        <h3>Additional Technical Skills</h3>
       <div  className="additional-icons">

       <FaNodeJs color="green" title="Node.js" className="icon" />
       
      <FaGithub  color="black" title="GitHub" className="icon" />
      <FaComments  color="blue" title="Communication Skills" className="icon" />
       </div>
      </div>
    </div>
  );
};

export default Skills;
