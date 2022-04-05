import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const ProjectsComponent = ({ bestProjects, teamProjects, allProjects, type }) => {
    switch (type) {
        case 1: const bestProjectList = bestProjects.map(project => {
            const techString = project.tech.join(' | ')
            return (
                <div className={styles['card']} key={project.id}>
                    <div className={styles['image-container']}>
                        <img className={styles['img']} src={project.img} alt="" />
                    </div>
                    <div className={styles['details']}>
                        <span className={styles['name']}>{project.name}</span>
                        <span className={styles['tech']}>{techString}</span>
                        <div className={styles['about']}>
                            {project.desc.map((item, idx) => {
                                return (
                                    <span className={styles['desc']} key={idx}>{item}</span>
                                )
                            })}
                        </div>
                        <div className={styles['btns']}>
                            <a className={styles['btn']} target="_blank" href={project.sourceCode}>Source Code</a>
                            <a className={styles['btn']} target="_blank" href={project.live}>See Live</a>
                        </div>
                    </div>
                </div>
            )
        })
            const teamProjectList = teamProjects.map(project => {
                const techString = project.tech.join(' | ')
                return (
                    <div className={styles['card']} key={project.id}>
                        <div className={styles['image-container']}>
                            <img className={styles['img']} src={project.img} alt="" />
                        </div>
                        <div className={styles['details']}>
                            <span className={styles['name']}>{project.name}</span>
                            <span className={styles['tech']}>{techString}</span>
                            <div className={styles['about']}>
                                {project.desc.map((item, idx) => {
                                    return (
                                        <span className={styles['desc']} key={idx}>{item}</span>
                                    )
                                })}
                            </div>
                            <div className={styles['btns']}>
                                <a className={styles['btn']} target="_blank" href={project.sourceCode}>Source Code</a>
                                <a className={styles['btn']} target="_blank" href={project.live}>See Live</a>
                            </div>
                        </div>
                    </div>
                )
            })
            return (
                <div className={styles['container']} id="projects">
                    <span className={styles['heading']}>Projects</span>
                    <div className={styles['projects']}>
                        <span className={styles['heading-2']}>Best Projects ➞ </span>
                        <div className={styles['cards']}>
                            {bestProjectList}
                        </div>
                        <span className={styles['heading-2']}>Team Projects ➞ </span>
                        <div className={styles['cards']}>
                            {teamProjectList}
                        </div>
                    </div>
                    <Link className={styles['heading-3']} to='/projects'>
                        View more projects ➞
                    </Link>
                </div>
            )
        case 2: const allProjectList = allProjects.map(project => {
            const techString = project.tech.join(' | ')
            return (
                <div className={styles['card']} key={project.id}>
                    <div className={styles['image-container']}>
                        <img className={styles['img']} src={project.img} alt="" />
                    </div>
                    <div className={styles['details']}>
                        <span className={styles['name']}>{project.name}</span>
                        <span className={styles['tech']}>{techString}</span>
                        <div className={styles['about']}>
                            {project.desc.map((item, idx) => {
                                return (
                                    <span className={styles['desc']} key={idx}>{item}</span>
                                )
                            })}
                        </div>
                        <div className={styles['btns']}>
                            <a className={styles['btn']} target="_blank" href={project.sourceCode}>Source Code</a>
                            <a className={styles['btn']} target="_blank" href={project.live}>See Live</a>
                        </div>
                    </div>
                </div>
            )
        })
            return (
                <div className={styles['container']} id="projects">
                    <Link className={styles['heading-3']} to='/'>
                        🠔 Back to Home Screen
                    </Link>
                    <span className={styles['heading']}>All Projects</span>
                    <div className={styles['projects']}>
                        <div className={styles['cards']}>
                            {allProjectList}
                        </div>
                    </div>
                </div>
            )
        default: return null
    }
}

export default ProjectsComponent