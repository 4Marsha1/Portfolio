import React from 'react'
import { allProjects } from '../data/projects'
import ProjectsComponent from '../components/Projects'
import FixedComponent from '../components/Fixed'

const AllProjects = () => {
    return (
        <>
            <FixedComponent />
            <ProjectsComponent allProjects={allProjects} type={2} />
        </>
    )
}

export default AllProjects