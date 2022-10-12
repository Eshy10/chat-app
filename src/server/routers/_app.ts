/**
 * This file contains the root router of your tRPC-backend
 */
import { t } from '../trpc';
import { messageRouter } from './message';

export const appRouter = t.router({
  msg: messageRouter,
});

export type AppRouter = typeof appRouter;
