import styles from '@/styles/Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Projects</h1>
            </div>

            <div className={styles.content}>
                <a target="_blank" href='https://github.com/ManimCommunity/awesome-manim' rel="noopener noreferrer"><img width={320} height={180} src='/thumbnails/awesome-manim.png'/></a>
            </div>
        </div>
    )

}