import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Andre Muniz",
    description: "Insights on Bubble.io development, AI engineering, and automation.",
};

import { getSortedPostsData } from "@/lib/blogs";
import BlogsClient from "./BlogsClient";

export default async function BlogsPage() {
    const posts = await getSortedPostsData();

    return <BlogsClient posts={posts} />;
}
