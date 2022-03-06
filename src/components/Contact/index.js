import React, { useRef, useState } from 'react'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser'
import { ReactComponent as MailSVG } from '../../static/mail.svg'
import { ReactComponent as PhoneSVG } from '../../static/phone.svg'
import { ReactComponent as GithubSVG } from '../../static/github.svg'
import { ReactComponent as LinkedInSVG } from '../../static/linkedin.svg'

const ContactForm = () => {
    const form = useRef();
    const [sent, setSent] = useState(0)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3x8bhj7', 'template_r6c324r', form.current, 'vXu4dv2jc7bJBvCOt')
            .then((result) => {
                console.log(result.text);
                setSent(1)
            }, (error) => {
                console.log(error.text);
                setSent(2)
            });
    };

    return (
        <div className={styles['container']} id='contact'>
            <div className={styles['heading']}>Let's Connect!</div>
            <div className={styles['form-container']}>
                <div className={styles['details']}>
                    <span className={styles['text']}> <MailSVG className={styles['svg']} /> abhishekbharadwaz22@gmail.com</span>
                    <span className={styles['text']}> <PhoneSVG className={styles['svg']} /> +91 7636012703 </span>
                    <span className={styles['text']}> <GithubSVG className={styles['svg']} /> 4Marsha1 </span>
                    <span className={styles['text']}> <LinkedInSVG className={styles['svg']} /> Abhishek Bharawaz </span>
                </div>
                <form ref={form} onSubmit={sendEmail} className={styles['form']}>
                    {sent === 1 ? <span className={styles['msg']}>Message Sent Successfully!</span>
                        : sent === 2 ? <span className={`${styles['msg']} ${styles['error']}`}>Error! Message not sent</span> : <></>}
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <button className={styles['send-btn']}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm