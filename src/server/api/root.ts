import { adminRouter } from "./routers/admin";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  admin: adminRouter
});

export type AppRouter = typeof appRouter;
