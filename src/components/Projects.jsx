// src/components/Projects.js
import React from 'react';
import './Projects.css'; 

function Projects() {

  const projects = [
    {
      title: 'Face Emotion Recognition',
      description: 'Developed a Face Emotion Recognition uisng CNN neural network for finding the emotion of a particular person like anger,happiness,sadness etc..',
      image: '/faceemo.jpg', // Update with your image path
      link: 'https://github.com/yourusername/project-one'
    },
    {
      title: 'PDF TOOLS ',
      description: 'Developed a PDF Tools Desktop application using Python and the tool helps to  convert any type of Document format into PDF Format ',
      image: '/pdftools.webp', // Update with your image path
      link: 'https://github.com/yourusername/project-two'
    },
    {
              title: 'AI Image Generator ',
      description: 'Developed a AI Generator using RAPID API and the techonolgies used are MERN ',
      image: 'ai1.jpg', // Update with your image path
      link: 'https://texttoimge.netlify.app/'

    },
    {
      title: ' Diabetes Prediction',
      description: 'Developed a Diabetes Prediction using KNNs for finding whether a person is affected by diabetes from the datasets and giving results with a accuracy of 90%',
      image: 'dia.jpg', // Update with your image path
      link: 'https://github.com/yourusername/project-two'

    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
