import { Layout } from '../honox';

export const DashLayout: Layout = ({ children }) => (
	<section class="h-screen w-full">
		<div class="text-white text-4xl font-extrabold w-full text-center mt-10">
			Dashboard
		</div>
		<div class="h-full flex justify-center items-center">{children}</div>
	</section>
);
