import React from 'react';
import styles from './Fixed.module.css';
import { Link } from 'react-scroll/modules';
import { animateScroll as scroll } from 'react-scroll/modules';
import { ReactComponent as MailSVG } from '../../static/mail.svg'
import { ReactComponent as GithubSVG } from '../../static/github.svg'
import { ReactComponent as LinkedInSVG } from '../../static/linkedin.svg'
import { ReactComponent as Up } from '../../static/upArrow.svg'
import { useNavigate } from 'react-router-dom';

const FixedComponent = () => {
    const navigate = useNavigate();
    return (
        <div className={styles['container']}>
            <div className={styles['section']}>
                <span className={styles['logo']} onClick={() => {
                    navigate('/')
                    scroll.scrollToTop()
                }}>AB</span>
                <div className={styles['menu']}>
                    <Link className={styles['text']} to="contact" smooth={true} duration={1500}>Let's Connect ➞ </Link>
                </div>
            </div>

            <div className={styles['section']}>
                <div className={styles['links']}>
                    <a href='https://github.com/4Marsha1' target='_blank' className={styles['icons']}>
                        <GithubSVG className={styles['svg']} /> <span className={styles['name']}>Github </span>
                    </a>
                    <a href='https://www.linkedin.com/in/abhishek-bharadwaz-458993192/' target='_blank' className={styles['icons']}>
                        <LinkedInSVG className={styles['svg']} /> <span className={styles['name']}>LinkedIn</span>
                    </a>
                    <Link className={styles['icons']} to='contact' smooth={true} duration={1000}>
                        <MailSVG className={styles['svg']} /> <span className={styles['name']}> Contact</span>
                    </Link>
                </div>
                <div className={styles['top']} onClick={() => scroll.scrollToTop()} >
                    <span className={styles['icon']}> <Up className={styles['svg']} /> </span>
                </div>
            </div>
        </div>
    )
}

export default FixedComponent