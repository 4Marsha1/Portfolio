import React from 'react';
import FixedComponent from '../components/Fixed';
import LandingComponent from '../components/Landing';
import ExperiencesComponent from '../components/Experiences';
import ProjectsComponent from '../components/Projects';
import experiencesData from '../data/experiences';
import projectsData from '../data/projects';


const Home = () => {
    return (
        <div >
            <FixedComponent />
            <LandingComponent />
            <ExperiencesComponent experiencesData={experiencesData} />
            <ProjectsComponent projectsData={projectsData} />
        </div>
    )
}

export default Home