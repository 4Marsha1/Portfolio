import React from 'react';
import FixedComponent from '../components/Fixed';
import LandingComponent from '../components/Landing';
import ExperiencesComponent from '../components/Experiences';
import ProjectsComponent from '../components/Projects';
import CertificationsComponent from '../components/Certifications';
import ContactForm from '../components/Contact';
import experiencesData from '../data/experiences';
import projectsData from '../data/projects';
import certificationsData from '../data/certifications';


const Home = () => {
    return (
        <div >
            <FixedComponent />
            <LandingComponent />
            <ExperiencesComponent experiencesData={experiencesData} />
            <ProjectsComponent projectsData={projectsData} />
            <CertificationsComponent certificationsData={certificationsData} />
            <ContactForm />
        </div>
    )
}

export default Home