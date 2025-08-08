import { cookies } from "next/headers";

export async function getCookie() {
    const cookieStore = await cookies();

    return cookieStore.get("theme").value;
}