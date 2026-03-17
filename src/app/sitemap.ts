import { getSortedPostsData } from "@/lib/blogs";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://munizandre.com";

    // Main pages
    const routes = ["", "/blogs"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Blog posts
    const posts = await getSortedPostsData();
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
}
