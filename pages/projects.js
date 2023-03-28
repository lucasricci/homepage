import styles from '@/styles/Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1>Projects</h1>
            <div className={styles.grid_container}>
                <a target="_blank" href='https://github.com/ManimCommunity/awesome-manim' rel="noopener noreferrer"><img width={400} height={225} src='/thumbnails/awesome-manim.png'/></a>
                <a target="_blank" href='#' rel="noopener noreferrer"><img width={400} height={225} src='/thumbnails/tv-static.jpg'/></a>
                <a target="_blank" href='#' rel="noopener noreferrer"><img width={400} height={225} src='/thumbnails/tv-static.jpg'/></a>
                <a target="_blank" href='#' rel="noopener noreferrer"><img width={400} height={225} src='/thumbnails/tv-static.jpg'/></a>
                <a target="_blank" href='#' rel="noopener noreferrer"><img width={400} height={225} src='/thumbnails/tv-static.jpg'/></a>
                <a target="_blank" href='#' rel="noopener noreferrer"><img width={400} height={225} src='/thumbnails/tv-static.jpg'/></a>
            </div>
        </div>
    )

}