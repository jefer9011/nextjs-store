import { revalidatePath } from "next/cache";
import { env } from "process";
// bEndpoint para revalidar cache
export async function POST(request: Request) {
    const body = await request.json();
    const { path, token } = body;
    
    if(!path || !token) {
        return Response.json({error: 'Missin path or token'}, {status: 400});
    }
    if(token !== env.CACHE_TOKEN) {
        return Response.json({error: 'Missing token'}, {status: 400});
    }

    revalidatePath(path);

    return Response.json({success: true});
}