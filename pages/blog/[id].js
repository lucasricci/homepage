import styles from '/styles/BlogPage.module.css'
import Image from 'next/image'
import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it'
import xss from 'xss';

export default function Blog({ frontmatter, content }) {

    console.log(frontmatter);
    console.log(content);
    const clean = xss(content)

    return (
        <div>
            <Image src={`/${content.socialImage}`} className="w-3/4 mx-auto" width={320} height={200} />
            <div className="w-3/4 mx-auto">
                <h1 className="text-3x1">{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(clean) }}></div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    // Get all the paths from slugs or file names
    const files = fs.readdirSync("posts");
    const paths = files.map((files) => ({
        params: {
            id: files.replace(".md", ""),
        },
    }));
    console.log("paths", paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { id } }) {
    const fileName = fs.readFileSync(`posts/${id}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}