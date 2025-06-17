import { serve } from "bun";
import { OpenAPIBackend } from "openapi-backend";
import { getTime } from "./handlers/time";

const api = new OpenAPIBackend({
  definition: "./openapi.yaml",
  handlers: {
    getTime,
    notFound: async () => ({ statusCode: 404, body: "Not Found" }),
  },
});

await api.init();

console.log("Initializing server...");

serve({
  port: 3001,
  fetch: async (req) => {
    console.log("Received request:", req.method, req.url); 
    const url = new URL(req.url);
    const hasBody = req.method !== "GET" && req.method !== "HEAD";

    const request = {
      method: req.method,
      path: url.pathname,
      query: Object.fromEntries(url.searchParams.entries()),
      headers: Object.fromEntries(req.headers),
      body: hasBody ? await req.text() : undefined,
    };

    return api.handleRequest(request, req);

  },
});
  