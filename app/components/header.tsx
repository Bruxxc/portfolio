"use client"

import styles from "../styles/header.module.css";

const Header = () => {
    return (
        <div className="z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">

                    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        BC
                        <span className="text-purple-700">.</span>
                    </h1>
                    
                    <div className={`flex items-center justify-center gap-7`}>
                    <a className="z-30" href="https://github.com/Bruxxc"><img className={styles.header_icon} src="./assets/icons/github_icon.png" alt="github_icon" /></a>
                    <a className="z-30" href="https://www.linkedin.com/in/bruno-condenanza-32926b245/"><img className={styles.header_icon} src="./assets/icons/linkedin_icon.png" alt="linkedin_icon" /></a>
                        
                    </div>

                </div>
            </header>
        </div>
    );
}

export default Header;