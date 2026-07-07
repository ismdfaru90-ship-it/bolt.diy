import { createRequestHandler } from "@remix-run/cloudflare";
// @ts-ignore
import * as build from "./build/server/index.js";

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const handler = createRequestHandler(build, "production");
    return handler(request, env, ctx);
  },
};
