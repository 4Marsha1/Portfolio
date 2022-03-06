import React from 'react'
import { useState } from 'react'
import styles from './Projects.module.css'
import ReactCardFlip from 'react-card-flip'

const ProjectsComponent = ({ projectsData }) => {

    const [flipValues, setFlipValues] = useState(Array(projectsData.length).fill(false))

    const handleClick = (id) => {
        const change = flipValues[id - 1] = !flipValues[id - 1];
        setFlipValues([...flipValues, change])
    }

    const projects = projectsData.map((project, idx) => {

        const techString = project.tech.join(' | ')
        return (
            <ReactCardFlip className={styles['card']} key={idx} isFlipped={flipValues[project.id - 1]} flipDirection="horizontal" >
                <>
                    <img className={styles['img']} src={project.img} alt="" />
                    <div className={`${styles['overlay']} ${styles['extra']}`}>
                        <span className={styles['name']}>{project.name}</span>
                        <span className={styles['tech']}> {techString} </span>
                        <div className={styles['links']}>
                            <a href={project.sourceCode} target="_blank">Source Code</a>
                            <a href={project.live} target="_blank">Live Project</a>
                        </div>
                        <span className={styles['view']} onClick={() => handleClick(project.id)}>Read Details</span>
                    </div>
                </>
                <div className={styles['back']}>
                    <img className={styles['img']} src={project.img} alt="" />
                    <div className={styles['overlay']} onClick={() => handleClick(project.id)}>
                        {
                            project.desc.map(item => {
                                return <span className={styles['desc']}>{item}</span>
                            })
                        }
                    </div>
                </div>
            </ReactCardFlip>
        )
    })
    return (
        <div className={styles['container']} id='projects'>
            <span className={styles['heading']}>Projects</span>
            <div className={styles['cards']}>
                {projects}
            </div>
        </div>
    )
}

export default ProjectsComponent