import React from 'react';
import styles from './Certifications.module.css';

const CertificationsComponent = ({ certificationsData }) => {

    const certifications = certificationsData.map((certification, idx) => {
        return (
            <div className={styles['card']} key={certification.id}>
                <img className={styles['img']} src={certification.img} alt="" />
                <div className={styles['details']}>
                    <span className={styles['name']}>{certification.name}</span>
                    <span className={styles['platform']}>{certification.platform}</span>
                    <span className={styles['date']}>{certification.date}</span>
                    <a className={styles['credential']} href={certification.credential} target="_blank">See Credential</a>
                </div>
            </div>
        )
    })

    return (
        <div className={styles['container']}>
            <span className={styles['heading']}>Certifications</span>
            <div className={styles['cards']}>
                {certifications}
            </div>
        </div>
    )
}

export default CertificationsComponent