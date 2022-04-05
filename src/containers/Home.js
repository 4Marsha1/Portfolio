import React from 'react';
import FixedComponent from '../components/Fixed';
import LandingComponent from '../components/Landing';
import ExperiencesComponent from '../components/Experiences';
import ProjectsComponent from '../components/Projects';
import CertificationsComponent from '../components/Certifications';
import ContactForm from '../components/Contact';
import Footer from '../components/Footer';
import experiencesData from '../data/experiences';
import { bestProjects } from '../data/projects';
import { teamProjects } from '../data/projects';
import certificationsData from '../data/certifications';


const Home = () => {
    return (
        <div >
            <FixedComponent />
            <LandingComponent />
            <ExperiencesComponent experiencesData={experiencesData} />
            <ProjectsComponent bestProjects={bestProjects} teamProjects={teamProjects} type={1} />
            <CertificationsComponent certificationsData={certificationsData} />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home