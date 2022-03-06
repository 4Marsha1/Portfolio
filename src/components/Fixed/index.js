import React from 'react';
import styles from './Fixed.module.css';
import { animateScroll as scroll } from 'react-scroll/modules';
import { ReactComponent as MailSVG } from '../../static/mail.svg'
import { ReactComponent as GithubSVG } from '../../static/github.svg'
import { ReactComponent as LinkedInSVG } from '../../static/linkedin.svg'
import { ReactComponent as Up } from '../../static/upArrow.svg'

const FixedComponent = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['section']}>
                <span className={styles['logo']} onClick={() => scroll.scrollToTop()}>AB</span>
                <div className={styles['menu']}>
                    <span className={styles['text']}>Let's Connect ➞ </span>
                </div>
            </div>

            <div className={styles['section']}>
                <div className={styles['links']}>
                    <span className={styles['icons']}><GithubSVG className={styles['svg']} /> <span className={styles['name']}>Github </span>  </span>
                    <span className={styles['icons']}><LinkedInSVG className={styles['svg']} /> <span className={styles['name']}>LinkedIn</span>   </span>
                    <span className={styles['icons']}><MailSVG className={styles['svg']} /> <span className={styles['name']}> Contact</span>   </span>
                </div>
                <div className={styles['top']} onClick={() => scroll.scrollToTop()} >
                    <span className={styles['icon']}> <Up className={styles['svg']} /> </span>
                </div>
            </div>
        </div>
    )
}

export default FixedComponent