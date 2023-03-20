import Link from "next/link"
import Image from 'next/image'
import * as styles from "/styles/Layout.module.css"

const year = new Date().getFullYear()

export default function Layout({ children }) {
    return (
        <div>
            <nav className={styles.nav}>
                <Link className={styles.logo} href="/">
                    {/*<Image src="/logo.png" width="60" height="60" alt="logo"/>*/}
                    <h1>Lucas Ricci</h1>
                    <h2>Developer</h2>
                </Link>
                <div className={styles.nav_menu}>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                </div>
            </nav>

            <div className={styles.content}>
                <main>{children}</main>
            </div>

            <footer className={styles.footer}>
                <p>&#169; {year} by Lucas Ricci</p>
            </footer>
        </div>
    )
}