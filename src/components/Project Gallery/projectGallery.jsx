import React from 'react';
import Project from '../Project/project';
import projects from '../../assets/project.json'


function projectGallery(props) {
    const images = ["../../assets/me2.jpeg"]
  return (
    <div>
        {projects.map(project => {
            return (
                <div>
                    <Project title={project.title} 
                    deployedLink={project.deployedLink}
                    repoLink={project.repoLink}
                    screenshot={images.map(image => {
                        image
                    })}
                    ></Project>
                </div>
            )
            })}
    </div>
  )
}

export default projectGallery