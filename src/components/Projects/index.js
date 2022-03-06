import React from 'react'
import styles from './Projects.module.css';

const ProjectsComponent = ({ projectsData }) => {
    const topProjects = projectsData.slice(0, 4)
    const projects = topProjects.map(project => {
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
        <div className={styles['container']}>
            <span className={styles['heading']}>Projects</span>
            <div className={styles['projects']}>
                <span className={styles['heading-2']}>Best Projects</span>
                <div className={styles['cards']}>
                    {projects}
                </div>
            </div>
            <a href='#' className={styles['heading-3']}>View more projects ➞</a>
        </div>
    )
}

export default ProjectsComponent