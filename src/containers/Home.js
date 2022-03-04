import React from 'react';
import FixedComponent from '../components/Fixed';
import LandingComponent from '../components/Landing';
import ExperiencesComponent from '../components/Experiences';

const Home = () => {
    return (
        <div >
            <FixedComponent />
            <LandingComponent />
            <ExperiencesComponent />
        </div>
    )
}

export default Home