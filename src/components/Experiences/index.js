import React from 'react';
import styles from './Experiences.module.css';

const ExperiencesComponent = ({ experiencesData }) => {

    const experiences = experiencesData.map(exp => {
        return (
            <li key={exp.id}>
                <div className={styles["timeline-content"]}>
                    <span className={styles['role']}>{exp.role}</span>
                    <span className={styles['company']}>{exp.company}</span>
                    <span className={styles["date"]}>{exp.startDate} - {exp.endDate}</span>
                    <span className={styles['location']}>{exp.location}</span>
                    <span className={styles['desc']}>
                        {
                            exp.desc.map(item => {
                                return (
                                    <span>{item}</span>
                                )
                            })
                        }
                    </span>
                </div>
            </li>
        )
    })

    return (
        <div className={styles['parent']} id='experiences'>
            <span className={styles['heading']}>Experiences</span>
            <div className={styles["container"]}>
                <div className={styles["timeline"]}>
                    <ol>
                        {experiences}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ExperiencesComponent