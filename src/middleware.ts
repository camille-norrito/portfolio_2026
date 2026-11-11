import { defineMiddleware } from "astro:middleware";

// Retire les commentaires HTML des pages envoyées au navigateur
export const onRequest = defineMiddleware(async (_context, next) => {
    const response = await next();
    if (!response.headers.get("content-type")?.includes("text/html")) return response;

    const html = await response.text();
    return new Response(html.replace(/<!--[\s\S]*?-->/g, ""), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
    });
});
