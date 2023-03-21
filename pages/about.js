import styles from '/styles/About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Greetings fellow humans!</h1>
            </div>
            <p>I am Lucas </p>

            <div className={styles.contact}>
                <a href="https://linkedin.com/in/lucaslricci" target="_blank">
                    <img align="center" src="https://img.shields.io/badge/-lucasricci-05122A?style=for-the-badge&logo=linkedin" alt="linkedin"/>
                </a>
                <a href="mailto:llricci@protonmail.com" target="_blank">
                    <img align="center" src="https://img.shields.io/badge/-lr.lucasricci-05122A?style=for-the-badge&logo=protonmail&logoColor=white" alt="protonmail"/>
                </a>
                <a href="https://youtube.com/@lucasricci" target="_blank">
                    <img align="center" src="https://img.shields.io/badge/-lucasricci-05122A?style=for-the-badge&logo=youtube" alt="youtube"/>
                </a>
            </div>
        </div>
    )
}