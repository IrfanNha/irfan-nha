import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
	{
		title: "Undiscord Team Chat App: Revolutionizing Team Communication (under development)",
		date: "April, 2024 (under development)",
		link: "/projects/undiscord",
		image: "undiscord.jpg",
		description:
			"Undiscord Team Chat App is a cutting-edge communication platform designed to enhance collaboration and streamline teamwork, reminiscent of Discord but tailored for professional environments. Built with Next.js, TypeScript, TRPC, and Prisma, and powered by a MySQL database, this application offers a seamless and efficient experience for teams to communicate, share ideas, and coordinate tasks.",
	},
	{
		title: "Bamboo and Rattan Craftsman Company Profile: Showcasing Artistry with Vue.js",
		date: "October, 2022",
		link: "/projects",
		image: "e-commerce.jpg",
		description:
			"Bamboo and Rattan Craftsman Company Profile, is an elegant showcase of the exquisite craftsmanship of bamboo and rattan artisans. Leveraging the power of Vue.js, this website offers a visually stunning and interactive platform to explore the timeless beauty and unique creations of our craftsmen.",
	},

	{
		title: "Laravel Blog: A Laravel and MySQL Based Blogging App",
		date: "June, 2022",
		link: "/projects",
		image: "article.jpg",
		description:
			"LaravelBlog is a robust and intuitive blogging application built using the Laravel framework and MySQL database. This application provides a flexible platform for users to create, manage, and share blog content easily and efficiently",
	},
	{
		title: "PPDB Website, Online student registration website",
		date: "March, 2021",
		link: "/projects",
		image: "ppdb.jpg",
		description:
			"This website is a student registration platform designed to facilitate the online registration process. Using the CodeIgniter 4 framework as the basis for its development, this website has the ability to store student data in a MySQL database. Apart from that, this website also utilizes the cURL library to connect to external services, such as retrieving additional information or verifying data.",
	},
];

export async function ProjectComponent() {
	return (
		<>
			{projects.map((project: any, index: number) => (
				<div key={index} className="border border-gray-300 my-10">
					<header className="mt-6 mb-14 mx-5">
						<p className="text-sm font-bold uppercase tracking-4 color-text-neutral-700">
							{project.title}
						</p>
						<p className="mt-4 font-light text-xs text-gray-700 tracking-4">
							{project.date}
						</p>
					</header>

					<div>
						<div className="relative overflow-hidden">
							<div>
								<Link href={project.link}>
									<Image
										src={`/projects/${project.image}`}
										alt="Picture of the author"
										width={1920}
										height={1080}
										style={{
											width: "100%",
											height: "auto",
										}}
										className="hover:scale-105 transition-transform duration-300 ease-in-out"
										priority
									/>
								</Link>
							</div>
							<div className="px-5 py-5 border-t border-t-gray-200 md:absolute md:bottom-0 md:left-0 w-full bg-white md:bg-opacity-55  hover:bg-opacity-70">
								<p className="font-light text-black">
									{project.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
