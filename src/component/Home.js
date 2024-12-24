import React from "react";
import './Home.css';
import img from './../img/me2.png';

import { useNavigate } from 'react-router-dom'; 

const Home = ({ theme }) => {
  const navigate = useNavigate(); 

 
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/Ashenafi sahele.pdf`; // PUBLIC_URL ensures proper path resolution
    link.download = "Ashenafi sahele.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 
  return (
    <>
      <div className={`home-content ${theme}`} id="home">
       
        <div className={`img ${theme}`}>
          <img src={img} alt="Me" className="me" />
        </div>
        <div className="greet-container">
        <h1 className="greet">
  <span>Hello,</span> my name is
</h1>

          <p>Ashenafi Sahele, I am a frontend developer certified in advanced React from Meta. I am <br /> a dedicated young man based in Ethiopia.</p>
          <button className={`btn ${theme}`} onClick={() => navigate('/about')}>About Me</button>
          <button className={`btn ${theme}`} onClick={downloadCV}>CV</button>
        </div>
      </div>
      
    </>
  );
};

export default Home;