import React from 'react';
import Project from '../Project/project';
import projects from '../../assets/project.json'


function projectGallery(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map(project => {
            return (
                <div className="col">
                    <Project title={project.title} 
                    deployedLink={project.deployedLink}
                    repoLink={project.repoLink}
                    screenshot={project.screenshot}
                    ></Project>
                    </div>
            )
            })}
    </div>
  )
}

export default projectGallery