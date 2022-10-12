/**
 * This file contains the root router of your tRPC-backend
 */
import { t } from '../trpc';
import { healthRouter } from './health';
import { messageRouter } from './message';

export const appRouter = t.router({
  health: healthRouter,
  msg: messageRouter,
});

export type AppRouter = typeof appRouter;
