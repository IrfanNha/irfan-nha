// `app/dashboard/page.tsx` is the UI for the `/projects` URL
import Link from "next/link";
import { ProjectComponent } from "../components/project/projectComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | Irfan Nuha.",

	description: "Projects ",
};
export default function Page() {
	return (
		<>
			<main className="min-h-fit mt-28">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 mt-10">
						<section>
							<header>
								<h2 className="text-2xl font-[900] text-neutral-700 uppercase tracking-4 antialiased text-center md:text-left hover:text-blue-700 cursor-pointer">
									Projects
								</h2>

								<p className="mt-4 tracking-4 font-light uppercase text-sm text-center md:text-left leading-loose w-full md:w-2/3 font-sans">
									A SELECTION OF PROJECTS THAT I'M NOT TOO
									ASHAMED OF
								</p>
							</header>
						</section>
					</div>
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 border-t-0">
						<section>
							<div className="mt-4">
								<ProjectComponent />
							</div>
						</section>
					</div>
				</div>
			</main>
		</>
	);
}
