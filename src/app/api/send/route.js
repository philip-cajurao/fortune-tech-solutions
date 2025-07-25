import { sendToGHL } from "@/lib/ghl";

export async function POST(request) {
    try {
        const jsonData = await request.json();
        const result = await sendToGHL(jsonData, process.env.GHL_ID, process.env.GHL_WEBHOOK_ID);

        return new Response(JSON.stringify(result), {status: 200});
    } catch (error) {
        throw new Response(JSON.stringify({error: error.message || "Something went wrong."}), {status: 500});
    }
};
