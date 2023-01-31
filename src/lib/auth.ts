import { jwtVerify } from "jose";

interface JwtPayload {
	jti: string;
	iat: number;
}

export const getJwtSecret = (): string => {
	const secret = process.env.JWT_SECRET;

	if(!secret || secret.length === 0) {
		throw new Error("JWT_SECRET is not set");
	}

	return secret;
}

export const verifyToken = async (token: string) => {
	try {
		const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecret()));
		return verified.payload as JwtPayload;
	} catch (e) {
		console.error(e)
		throw new Error("Invalid token");
	}
}