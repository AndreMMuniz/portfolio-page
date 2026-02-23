import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export interface BlogPost {
    slug: string;
    title: string;
    title_pt?: string;
    date: string;
    excerpt: string;
    excerpt_pt?: string;
    content: string;
    content_pt?: string;
    coverImage?: string;
}

export async function getSortedPostsData() {
    // Check if directory exists, if not return empty array
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return {
            slug,
            ...(matterResult.data as { title: string; title_pt?: string; date: string; excerpt: string; excerpt_pt?: string; coverImage?: string }),
        };
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const content = processedContent.toString();

    let content_pt;
    if (matterResult.data.content_pt) {
        const processedPt = await remark().use(html).process(matterResult.data.content_pt);
        content_pt = processedPt.toString();
    }

    return {
        slug,
        content,
        content_pt,
        ...(matterResult.data as { title: string; title_pt?: string; date: string; excerpt: string; excerpt_pt?: string; coverImage?: string }),
    };
}
