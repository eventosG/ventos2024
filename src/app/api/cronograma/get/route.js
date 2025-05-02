import { connectToDB } from "../../../../../utils/database";
import Cronograma from "../../../../../models/cronograma";

export const GET = async () => {
    try {
        await connectToDB()
        const prompts = await Cronograma.find()
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 