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
                <p className={styles.console}>lucas in ~ λ uname -a</p>
                <p>I drive Windows on a daily base, but I also have experience around Linux</p>
                <br></br>
                <div className={styles.python}>
                    <p className={styles.console}>lucas in ~ λ python</p>
                    <p>Python 3.11.2 on dutch-beer</p>
                    <p>Type "help", "copyright", "credits" or "license" for more information.</p>
                    <p>&gt;&gt;&gt; import this</p><br></br>
                    <p>The Zen of Python, by Tim Peters</p><br></br>
                    <p>
                        Beautiful is better than ugly.<br></br>
                        Explicit is better than implicit.<br></br>
                        Simple is better than complex.<br></br>
                        Complex is better than complicated.<br></br>
                        Flat is better than nested.<br></br>
                        Sparse is better than dense.<br></br>
                        Readability counts.<br></br>
                        Special cases aren't special enough to break the rules.<br></br>
                        Although practicality beats purity.<br></br>
                        Errors should never pass silently.<br></br>
                        Unless explicitly silenced.<br></br>
                        In the face of ambiguity, refuse the temptation to guess.<br></br>
                        There should be one-- and preferably only one --obvious way to do it.<br></br>
                        Although that way may not be obvious at first unless you're Dutch.<br></br>
                        Now is better than never.<br></br>
                        Although never is often better than *right* now.<br></br>
                        If the implementation is hard to explain, it's a bad idea.<br></br>
                        If the implementation is easy to explain, it may be a good idea.<br></br>
                        Namespaces are one honking great idea -- let's do more of those!<br></br>
                    </p>
                </div>
            </div>

            <div className={styles.contact}>
                <a href="https://linkedin.com/in/lucaslricci" target="_blank">
                    <img src="https://img.shields.io/badge/-lucasricci-203c63?style=for-the-badge&logo=linkedin" alt="linkedin" />
                </a>
                <a href="mailto:llricci@protonmail.com" target="_blank">
                    <img src="https://img.shields.io/badge/-llricci-203c63?style=for-the-badge&logo=protonmail&logoColor=white" alt="protonmail" />
                </a>
                <a href="https://youtube.com/@lucasricci" target="_blank">
                    <img src="https://img.shields.io/badge/-lucasricci-203c63?style=for-the-badge&logo=youtube" alt="youtube" />
                </a>
            </div>
        </div>
    )
}