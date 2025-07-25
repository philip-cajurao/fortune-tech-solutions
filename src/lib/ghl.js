import axios from "axios";

export async function sendToGHL(jsonData, ghlId, ghlWebhookId) {
    const endpoint = `https://services.leadconnectorhq.com/hooks/${ghlId}/webhook-trigger/${ghlWebhookId}`;

    try {
        const res = await axios.post(endpoint, jsonData,
            { headers: { "Content-Type": "application/json" } }
        );

        return res.data;
    } catch (error) {
        if (error.response) {
            console.error("GHL Error:", {
                status: error.response.status,
            })
        } else if (error.request) {
            console.error("No response from GHL:", error.request)
        } else {
            console.error("Axios error:", error.message)
        }
        throw new Error("Form submission failed.");
    }
};
