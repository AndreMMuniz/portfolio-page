import { getSortedPostsData } from "@/lib/blogs";
import BlogsClient from "./BlogsClient";

export default async function BlogsPage() {
    const posts = await getSortedPostsData();

    return <BlogsClient posts={posts} />;
}
