import { getPostData } from "@/lib/blogs";
import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    try {
        const post = await getPostData(slug);
        return <BlogPostClient post={post} />;
    } catch (e) {
        notFound();
    }
}
