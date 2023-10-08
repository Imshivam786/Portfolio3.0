import React from 'react';
import styles from './Footer.module.css';
import {BsGithub, BsLinkedin ,BsInstagram , BsTwitter} from 'react-icons/bs';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.flex}>
                    <div>
                        <p>&copy; 2023 by Shivam Yadav. All rights reserved</p>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className={styles.icons}>
                        <a href="https://github.com/Imshivam786" target='_blank'><BsGithub size={30}/></a>
                        <a href="https://www.instagram.com/shivam_y20901/"><BsInstagram size={30}/></a>
                        <a href="https://www.linkedin.com/in/shivam-yadav-443b05208" target='_blank'><BsLinkedin size={30}/></a>
                        {/* <a href="./#"><BsTwitter size={30}/></a> */}
                       
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
