import Link from "next/link";
import Image from 'next/image'
import * as styles from "/styles/Blog.module.css"

function Blogcard({ post }) {
    console.log(post)
    return (
        <div className="container w-100 mx-auto mb-16">
            <Image className={styles.socialImage} src={post.data.socialImage} width={320} height={200} />
            <Link href={`blog/${post.slug}`}>
                <h1 className={styles.metaTitle}>{post.data.metaTitle}</h1>
            </Link>
            <p className={styles.date}>{post.data.date}</p>
            <p className={styles.metaDesc}>{post.data.metaDesc}</p>
        </div>
    );
}

export default Blogcard;