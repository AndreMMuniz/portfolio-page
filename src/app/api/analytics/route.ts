import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
    try {
        // Initialize Neon dynamically at runtime so Next.js build doesn't fail 
        // if DATABASE_URL is not set during local build time.
        if (!process.env.DATABASE_URL) {
            console.warn("DATABASE_URL is not defined in environment variables.");
            return new Response(JSON.stringify({ error: "Missing database configuration" }), { status: 500 });
        }
        const sql = neon(process.env.DATABASE_URL);

        const body = await request.text();
        let data;
        try {
            data = JSON.parse(body);
        } catch {
            return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
        }

        // Capture standard headers for additional info
        const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
        const userAgent = request.headers.get("user-agent") || "unknown";

        // Create table if not exists (initially)
        // Neon Serverless does not support chained SQL template execution easily outside of transactions, 
        // so executing them separately is safer for the serverless driver.
        await sql`
      CREATE TABLE IF NOT EXISTS analytics(
    id SERIAL PRIMARY KEY,
    server_timestamp TIMESTAMPTZ DEFAULT NOW(),
    client_ip TEXT,
    client_user_agent TEXT,
    type TEXT,
    url TEXT,
    pathname TEXT,
    referrer TEXT,
    city TEXT,
    region TEXT,
    country TEXT,
    duration_seconds INTEGER,
    client_timestamp TEXT
);
`;

        // Insert the tracking data
        await sql`
      INSERT INTO analytics(
    client_ip,
    client_user_agent,
    type,
    url,
    pathname,
    referrer,
    city,
    region,
    country,
    duration_seconds,
    client_timestamp
) VALUES(
    ${ip},
    ${userAgent},
    ${data.type || 'unknown'},
    ${data.url || null},
    ${data.pathname || null},
    ${data.referrer || null},
    ${data.city || 'unknown'},
    ${data.region || 'unknown'},
    ${data.country || 'unknown'},
    ${data.durationSeconds || null},
    ${data.timestamp || null}
);
`;

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Analytics API Error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
