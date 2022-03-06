import React from 'react';
import { Link } from 'react-scroll/modules';
import styles from './Landing.module.css';
import profileImg from '../../static/profile-b&w.png';

const resume = 'https://drive.google.com/file/d/1DPGS1n2Li6y9QQyFpr7GPJJJjRb3vO7W/view?usp=sharing'

const LandingComponent = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['me']}>
                <span className={styles['name']}>ABHISHEK BHARADWAZ</span>
                <span className={styles['tag']}>Full stack developer and cloud enthusiast</span>
                <span className={styles['desc']}>
                    Hi! I am a pre-final year Computer Science and Engineering undergraduate from the
                    National Institute of Technology, Silchar. Over the past 1 year, I have worked in
                    2 companies as a developer intern, developing softwares using technologies such as
                    React, Redux, AWS, and more...
                </span>
                <span className={styles['links']}>
                    <Link to='experiences' smooth={true} duration={1000} className={styles['link']}>Read About Me </Link> |
                    <Link to='projects' smooth={true} duration={1000} className={styles['link']}>View Projects </Link> |
                    <a href={resume} target='_blank' className={styles['link']}> Resume </a>
                </span>
            </div>
            <div className={styles["scroll-downs"]}>
                <div className={styles["mousey"]}>
                    <div className={styles["scroller"]}></div>
                </div>
            </div>
            <div className={styles['img-wrapper']}>
                <img className={styles['img']} src={profileImg} alt="Profile Picture" />
            </div>
        </div>
    )
}

export default LandingComponent