// src/components/Skills.js
import React from 'react';
import './Skills.css'; // Import your CSS file for styling

function Skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <h6>Here's a list of skills I have acquired:</h6>
      <div className="skills-list">
         <div className="skill">
            
          <h2>Programming Languages</h2>
          <p>C++,JAVA,Python</p>
        </div>
        <div className="skill">
            
          <h2>Web Development</h2>
          <p>HTML, CSS, JavaScript, React, Node.js, Express</p>
        </div>
        <div className="skill">
          <h2>Design</h2>
          <p>Canva,Figma</p>
        </div>
        <div className="skill">
          <h2>Database Management</h2>
          <p>MySQL, MongoDB</p>
        </div>
        <div className="skill">
          <h2>Others</h2>
          <p>Git,Machine Learning</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
