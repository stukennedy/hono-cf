import { Endpoint } from '~/honox';

export const onRequestPost: Endpoint = async ({ html, req }) => {
	return html(<h2>hello {req.url}</h2>);
};

export const onRequestGet: Endpoint = async ({ html }) => {
	return html(
		<div>
			<h1>Dashboard</h1>
			<p hx-post="/dash" hx-trigger="load" hx-swap="outerHTML"></p>
		</div>
	);
};
