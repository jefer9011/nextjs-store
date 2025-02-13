import { revalidateTag } from "next/cache";
import { env } from "process";
// bEndpoint para revalidar cache
export async function POST(request: Request) {
    const body = await request.json();
    const { tag, token } = body;
    
    if(!tag || !token) {
        return Response.json({error: 'Missin tag or token'}, {status: 400});
    }
    if(token !== env.CACHE_TOKEN) {
        return Response.json({error: 'Missing token'}, {status: 400});
    }

    revalidateTag(tag);

    return Response.json({success: true});
}