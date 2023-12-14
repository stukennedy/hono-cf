import { html } from 'hono/html';
import { Context, Next } from 'hono';
import { HtmlEscapedString } from 'hono/utils/html';

type EndpointResponse =
	| Promise<HtmlEscapedString | HtmlEscapedString[]>
	| HtmlEscapedString
	| HtmlEscapedString[];
export type Endpoint = (context: Context) => Promise<Response> | Response;
export type Layout = (props: {
	context: Context;
	children: HtmlEscapedString;
}) => EndpointResponse;

export const layout = (layoutToApply: Layout, isRoot = false) => {
	return async (c: Context, next: Next) => {
		await next();
		const isHXBoosted = c.req.header('HX-Boosted') === 'true';
		const isHXRequested = c.req.header('HX-Request') === 'true';
		// render all layouts including root if there's no HX-Request header
		const isGet = c.req.method === 'GET';
		const renderRoot = isRoot && !isHXRequested;
		const renderLayout = !isRoot && (!isHXRequested || isHXBoosted || isGet);
		// console.log({
		// 	isRoot,
		// 	isHXRequested,
		// 	isHXBoosted,
		// 	isGet,
		// 	renderRoot,
		// 	renderLayout,
		// });
		if (renderRoot || renderLayout) {
			const curBody = (await c.res.text()) as unknown as TemplateStringsArray;
			// To overwrite res, set it to undefined before setting new value
			// https://github.com/honojs/hono/pull/970 released in https://github.com/honojs/hono/releases/tag/v3.1.0
			c.res = undefined;
			const newBody = await layoutToApply({
				context: c,
				children: await html(curBody),
			});
			const newBodyText = Array.isArray(newBody) ? newBody.join('\n') : newBody;
			c.res = await c.html(newBodyText);
		}
	};
};

export const redirect = (url: string, status = 303) =>
	new Response(null, {
		status,
		headers: {
			'HX-Location': url,
		},
	});
