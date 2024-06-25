import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export const getDataFromToken =async (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET!));
        return payload.userId;
    } catch (error: any) {
        throw new Error(error.message);
    }

}