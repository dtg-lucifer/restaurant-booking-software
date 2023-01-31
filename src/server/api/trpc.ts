import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "../db";
import { TRPCError, initTRPC } from "@trpc/server";
import { verifyToken } from "../../lib/auth";
import superjson from "superjson";


const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});


export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  const { req, res } = _opts
  return {
    prisma,
    req,
    res
  }
};

const isAdmin = t.middleware(async ({ ctx, next }) => {
  const { req } = ctx
  const token = req.cookies["user-token"]

  if (!token) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Missing token!" })
  }

  const verifiedToken = await verifyToken(token)

  if (!verifiedToken) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid token!" })
  }

  return next()
})

export const createTRPCRouter = t.router;
export const adminProcedure = t.procedure.use(isAdmin);
export const publicProcedure = t.procedure;