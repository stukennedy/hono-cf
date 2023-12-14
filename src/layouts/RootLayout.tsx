import { Layout } from '../honox';

export const RootLayout: Layout = ({ children }) => (
	<html>
		<head>
			<title>Title</title>
			<meta charset="UTF-8" />
			<script src="/static/js/htmx@1.9.8.min.js"></script>
			<link
				href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
				rel="stylesheet"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="/static/styles.css" />
		</head>
		<body class="antialiased bg-body text-body font-body" hx-boost="true">
			{children}
		</body>
	</html>
);
