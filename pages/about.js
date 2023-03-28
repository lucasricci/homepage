import styles from '/styles/About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <h1>About</h1>

            <div className={styles.content}>
                <p className={styles.console}>lucas in ~ λ whoami</p>
                <p>I am Lucas, a 18 years old student who really likes to code</p>
                <br></br>
                <p className={styles.console}>lucas in ~ λ cat main_languages.txt</p>
                <p>Currently, I mainly use Python. However I am learning front-end skills</p>
                <br></br>
                <p className={styles.console}>lucas in ~ λ ls /tools </p>
                <p className={styles.dirs}>git &nbsp;excel &nbsp;node</p>
                <br></br>
            </div>

            <div className={styles.contact}>
                <a href="https://linkedin.com/in/lucaslricci" target="_blank">
                    <img src="https://img.shields.io/badge/-lucasricci-203c63?style=for-the-badge&logo=linkedin" alt="linkedin"/>
                </a>
                <a href="mailto:llricci@protonmail.com" target="_blank">
                    <img src="https://img.shields.io/badge/-llricci-203c63?style=for-the-badge&logo=protonmail&logoColor=white" alt="protonmail"/>
                </a>
                <a href="https://youtube.com/@lucasricci" target="_blank">
                    <img src="https://img.shields.io/badge/-lucasricci-203c63?style=for-the-badge&logo=youtube" alt="youtube"/>
                </a>
            </div>
        </div>
    )
}