// `app/dashboard/page.tsx` is the UI for the `/about` URL
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About | Irfan Nuha.",

	description: "About Irfan ",
};
export default function About() {
	return (
		<>
			<main className="min-h-max mt-28">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 mt-10">
						<section>
							<header>
								<h2 className="text-2xl font-[900] text-neutral-700 uppercase tracking-4 antialiased text-center md:text-left hover:text-blue-700">
									<Link href={"/"}>About My Skills</Link>
								</h2>
							</header>
						</section>
					</div>
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 border-t-0">
						<section>
							<header className="text-center mb-5">
								<p className="mt-4 text-sm tracking-4 leading-loose font-bold uppercase text-neutral-700 ">
									Skills
								</p>
								<p className="mt-4 text-sm tracking-3 leading-loose text-center text-gray-700 ">
									Note: I think these sections are silly, but
									everyone seems to have one.
									<br /> So, here are the tools that I use
									most often
								</p>
							</header>

							<div className="flex-auto md:text-center mt-14">
								<button className=" m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									NextJS
								</button>
								<button className=" m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									NodeJS
								</button>
								<button className=" m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									ReactJS
								</button>
								<button className=" m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									JavaScript
								</button>
								<button className=" m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									TypeScript
								</button>
								<button className="m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									Laravel
								</button>
								<button className="m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									PHP
								</button>
								<button className="m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									Tailwind
								</button>
								<button className="m-1 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									Git
								</button>
								<button className="m-1  py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									MySQL
								</button>
								<button className="m-1  py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									SQLite
								</button>
								<button className="m-1  py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition duration-600 ease-in-out">
									WordPress
								</button>
							</div>
						</section>
					</div>
				</div>
			</main>
		</>
	);
}
