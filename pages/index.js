import Script from 'next/script'
import styles from '@/styles/Home.module.css'

const hellos = [
  {
      lang: "English",
      msg: "Hello, World!"
  },
  {
      lang: "Mandarin",
      msg: "你好，世界!"
  },
  {
      lang: "Hindi",
      msg: "हैलो वर्ल्ड!"
  },
  {
      lang: "Spanish",
      msg: "¡Hola, mundo!"
  },
  {
      lang: "Portuguese",
      msg: "Olá, Mundo!"
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.animation}>
        <div className={styles.first}><div>Hello, World!</div></div>
        <div className={styles.fithy}><div>Olá, Mundo!</div></div>
        <div className={styles.third}><div>हैलो वर्ल्ड!</div></div>
        
      </section>
    </div>
  )
}
