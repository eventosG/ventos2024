import { connectToDB } from "../../../../../utils/database";
import RoadMap from "../../../../../models/roadMap";

export const GET = async () => {
    try {
        await connectToDB()
        const prompts = await RoadMap.find()
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 