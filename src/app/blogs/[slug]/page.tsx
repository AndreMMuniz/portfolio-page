import { getPostData } from "@/lib/blogs";
import BlogPostClient from "../BlogPostClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = await getPostData(slug);
        return {
            title: `${post.title} | Andre Muniz Blog`,
            description: post.excerpt,
            openGraph: {
                title: post.title,
                description: post.excerpt,
                type: "article",
                publishedTime: post.date,
                images: post.coverImage ? [post.coverImage] : [],
            },
            twitter: {
                card: "summary_large_image",
                title: post.title,
                description: post.excerpt,
                images: post.coverImage ? [post.coverImage] : [],
            },
        };
    } catch (e) {
        return {
            title: "Post Not Found",
        };
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    try {
        const post = await getPostData(slug);
        return <BlogPostClient post={post} />;
    } catch (e) {
        notFound();
    }
}
