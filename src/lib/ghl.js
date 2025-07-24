import axios from "axios";

export async function sendToGHL(jsonData) {
    // const endpoint = `https://services.leadconnectorhq.com/hooks/${process.env.GHL_ID}/webhook-trigger${process.env.GHL_WEBHOOK_ID}`;
    const endpoint = `https://services.leadconnectorhq.com/hooks/gzbJNoiIwMABRNjnLqV8/webhook-trigger/235fa25c-0974-46ae-b289-eb02649d47eb`;

    try {
        const res = await axios.post(endpoint, jsonData,
            { headers: { "Content-Type": "application/json" } }
        );

        if(res?.data) return res.data;

        console.warn("No data returned.");
        return null;
    } catch (error) {
        console.error("Submision error.", error?.response?.data || error);
        throw new Error("Form submission failed.");
    }
}

// TODO: move ghl ids to env variables