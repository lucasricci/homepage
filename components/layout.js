import Link from "next/link"
import * as styles from "/styles/Layout.module.css"

const year = new Date().getFullYear()

export default function Layout({ children }) {
    return (
        <div>
            <nav className={styles.nav}>
                <Link className={styles.logo} href="/">
                    <h1>Lucas Ricci</h1>
                    <h2>Developer</h2>
                </Link>
                <div>
                    <input type="checkbox" id="nav_toggle" />
                    <label htmlFor="nav_toggle" className={styles.hamburger}>&#9776;</label>
                    <ul className={styles.nav_menu}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/articles">Articles</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
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