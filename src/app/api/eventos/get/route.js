// import Padrinho from "@models/padrinho";
// import { connectToDB } from "@utils/database";
import { connectToDB } from "../../../../../utils/database";
import Evento from "../../../../../models/evento";

export const GET = async () => {
    try {
        await connectToDB()
        const prompts = await Evento.find()
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 