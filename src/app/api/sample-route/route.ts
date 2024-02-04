import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	// when `NEXTAUTH_SECRET` env variable is set, `getToken` will return a valid JWT without the need to specify a secret as second parameter
	const token = await getToken({ req });
	console.log("JSON Web Token", token);
	return NextResponse.json({ text: "Hello from API route", token: token });
}
