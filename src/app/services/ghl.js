import axios from "axios";

export const sendToGHL = async (jsonData) => {
    const response = await axios.post(
        `https://services.leadconnectorhq.com/hooks/gzbJNoiIwMABRNjnLqV8/webhook-trigger/235fa25c-0974-46ae-b289-eb02649d47eb`,
        jsonData,
        { headers: { 'Content-Type': 'application/json' } }
    );

    if (response && response.data)
        return response.data;

    throw new Error("Something wen't wrong");

};