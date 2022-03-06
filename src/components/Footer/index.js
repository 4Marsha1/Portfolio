import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles['footer']}>
            <span className={styles['text']}>Feel Free to reach out to me any time!</span>
            <span className={styles['who']}>Full Stack Developer | Cloud Ethusiast </span>
            <span className={styles['me']}>Copyright &copy; Abhishek Bharadwaz 2022</span>
            <span className={styles['love']}>Made with 🤍; </span>
        </div>
    )
}

export default Footer