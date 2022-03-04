import React from 'react';
import styles from './Experiences.module.css';

const ExperiencesComponent = () => {

    return (
        <div className={styles['parent']}>
            <span className={styles['heading']}>Experiences</span>
            <div className={styles["container"]}>
                <div className={styles["timeline"]}>
                    <ul>
                        <li>
                            <div className={styles["timeline-content"]}>
                                <span className={styles['role']}>SDE Intern</span>
                                <span className={styles['company']}>Ethan AI</span>
                                <span className={styles["date"]}>Feb 2022 - Mar 2022</span>
                                <span className={styles['location']}>Singapore</span>
                                <span className={styles['desc']}>
                                    • Worked on automation of data extraction using AWS Textract, and other
                                    AWS services like S3, EC2, Route53. <br />
                                    • Used technologies: React, Redux, MongoDB, AWS Services, Flask
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={styles["timeline-content"]}>
                                <span className={styles['role']}>Frontend Developer Intern</span>
                                <span className={styles['company']}>ZoukE</span>
                                <span className={styles["date"]}>May 2021 - July 2021</span>
                                <span className={styles['location']}>Remote</span>
                                <span className={styles['desc']}>
                                    • Worked on building the MVP for the Startup. <br />
                                    • Built several screens from scratch for the web-app using ReactJs, Redux and CSS.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperiencesComponent