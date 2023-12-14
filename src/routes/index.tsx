import { Endpoint } from '~/honox';

export const onRequestPost: Endpoint = ({ html }) =>
	html(<h1 class="text-4xl">POST</h1>);

export const onRequestGet: Endpoint = ({ html }) =>
	html(
		<div class="flex flex-col justify-center items-center">
			<h1 class="text-red-500 text-3xl">hello world</h1>
			<p hx-post="/" hx-trigger="load" hx-swap="outerHTML">
				hello world
			</p>
			<a href="/dash" class="btn btn-primary">
				Dashboard
			</a>
		</div>
	);
