import type { APIContext, MiddlewareNext } from "astro";

const middleware = (context: APIContext, next: MiddlewareNext) => {
	context.cookies.set('message', "ini pesan dari atas");
	console.log(context.cookies.get("pesanku")?.value);
	
	return next();
};

// Export onRequest. This should NOT be a default export
export const onRequest = middleware;