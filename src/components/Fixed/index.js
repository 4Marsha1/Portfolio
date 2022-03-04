import React from 'react';
import styles from './Fixed.module.css';
import { ReactComponent as MailSVG } from '../../static/mail.svg'
import { ReactComponent as GithubSVG } from '../../static/github.svg'
import { ReactComponent as LinkedInSVG } from '../../static/linkedin.svg'
import { ReactComponent as Up } from '../../static/upArrow.svg'

const FixedComponent = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['section']} >
                <span className={styles['logo']}>AB</span>
                <div className={styles['menu']}>
                    <span className={styles['text']}>MENU</span>
                    <div className={styles['hamburger']}>
                        <div className={styles['line']}></div>
                        <div className={styles['line']}></div>
                        <div className={styles['line']}></div>
                    </div>
                </div>
            </div>

            <div className={styles['section']}>
                <div className={styles['links']}>
                    <span className={styles['icons']}><GithubSVG className={styles['svg']} />    </span>
                    <span className={styles['icons']}><LinkedInSVG className={styles['svg']} />   </span>
                    <span className={styles['icons']}><MailSVG className={styles['svg']} />   </span>
                </div>
                <div className={styles['top']} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                    <span className={styles['icons']}> <Up className={styles['svg']} /> </span>
                </div>
            </div>
        </div>
    )
}

export default FixedComponent