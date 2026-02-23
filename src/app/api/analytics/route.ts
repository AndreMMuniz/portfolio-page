import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
    try {
        const body = await request.text();
        let data;
        try {
            data = JSON.parse(body);
        } catch {
            return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
        }

        // Capture standard headers for additional info
        const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
        const userAgent = request.headers.get("user-agent") || "unknown";

        // Prepare log entry finding country/city if provided by the client,
        // otherwise just logging the raw IP for now.
        const logEntry = {
            server_timestamp: new Date().toISOString(),
            client_ip: ip,
            client_user_agent: userAgent,
            ...data,
        };

        const filePath = path.join(process.cwd(), "analytics.jsonl");

        // Append to file
        fs.appendFileSync(filePath, JSON.stringify(logEntry) + "\n", "utf8");

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Analytics API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
