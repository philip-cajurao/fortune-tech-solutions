import { sendToGHL } from "@/lib/ghl";

export async function POST(request) {
    try {
        const jsonData = await request.json();
        const result = await sendToGHL(jsonData);

        return new Response(JSON.stringify(result));
    } catch (error) {
        throw new Error("A problem occured while sending the message.");
    }
}
