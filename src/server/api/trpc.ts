import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "../db";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

type CreateContextOptions = Record<string, never>;

const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  return {
    prisma,
  };
};


const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});


export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  return createInnerTRPCContext({});
};

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;