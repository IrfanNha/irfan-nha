// `app/dashboard/page.tsx` is the UI for the `/resume` URL
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resume | Irfan Nuha.",
	description: "Resume ",
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
									Resume
								</h2>

								<p className="mt-4 tracking-4 font-bold uppercase text-xs text-center md:text-left leading-loose w-full md:w-2/3 font-sans text-neutral-700">
									<Link
										className="hover:text-blue-700"
										href={"#education"}>
										EDUCATION
									</Link>{" "}
									<Link
										className="hover:text-blue-700"
										href={"#experience"}>
										EXPERIENCE
									</Link>{" "}
									<Link
										className="hover:text-blue-700"
										href={"/resume"}>
										RECOMMENDATIONS
									</Link>
								</p>
							</header>
						</section>
					</div>
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 border-t-0">
						<article>
							<section id="#education">
								<p className="mt-4 text-sm tracking-[0.2em] leading-loose font-bold text-neutral-700 uppercase text-center">
									Education
								</p>
								<p className="mt-4 text-sm tracking-[0.1em] leading-loose font-light">
									Software Engineering Vocational High School
								</p>
								<p className="text-xs tracking-[0.1em] leading-loose font-light ">
									<span className="underline underline-offset-2 decoration-dotted decoration-0 hover:text-blue-700 hover:no-underline">
										<Link
											href={"smkn9semarang.sch.id"}
											target="_blank">
											Semarang Vocational HS
										</Link>
									</span>
									, 2024
								</p>
							</section>
							<section id="#experience">
								<header>
									<p className="mt-4 text-sm tracking-[0.2em] leading-loose font-bold text-neutral-700 uppercase text-center">
										Experience
									</p>
								</header>

								<div>
									<p className="mt-4 text-xs tracking-[0.2em] leading-loose font-bold text-neutral-700 uppercase">
										Front End Internship
									</p>
									<p className="mt-1 text-xs tracking-[0.19em] leading-loose font-bold text-neutral-700 uppercase hover:text-blue-700 cursor-pointer">
										<Link
											href={"gamelab.id"}
											target="_blank">
											Gamelab.id
										</Link>
									</p>
									<p className="text-[10px] tracking-4 leading-loose font-light text-gray-500">
										07/2022 - 10/2022
									</p>
									<ul className="mt-3 list-disc ml-4">
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											Contribute in the development of
											responsive user interfaces for
											e-commerce platforms.
										</li>
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											improving user experience and
											ensuring optimal usability across a
											wide range of devices and screen
											resolutions.
										</li>
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											Responsible for the design and
											development of intuitive and
											attractive user interfaces for web
											applications.
										</li>
									</ul>
								</div>

								<div>
									<p className="mt-6 text-xs tracking-[0.2em] leading-loose font-bold text-neutral-700 uppercase">
										Full stack developer
									</p>
									<p className="mt-1 text-xs tracking-[0.19em] leading-loose font-bold text-neutral-700 uppercase hover:text-blue-700 cursor-pointer">
										pt adya global media
									</p>
									<p className="text-[10px] tracking-4 leading-loose font-light text-gray-500">
										03/2023 - 7/2023
									</p>
									<ul className="mt-3 list-disc ml-4">
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											Responsible for regular maintenance
											and improvement of website
											functionality, including bug fixes,
											performance optimization and
											addition of new features
										</li>
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											Manage databases and ensure
											efficient system integration between
											frontend and backend, including
											database query optimization and
											reliable API development.
										</li>
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											helps develop end-to-end web
											applications using technologies such
											as Laravel in the backend, resulting
											in stable, scalable and responsive
											applications
										</li>
									</ul>
								</div>

								<div>
									<p className="mt-6 text-xs tracking-[0.2em] leading-loose font-bold text-neutral-700 uppercase">
										Mid-Full Stack Web Developer
									</p>
									<p className="mt-1 text-xs tracking-[0.19em] leading-loose font-bold text-neutral-700 uppercase hover:text-blue-700 cursor-pointer">
										<Link
											href={"crocodic.com"}
											target="_blank">
											Crocodic Studio
										</Link>
									</p>
									<p className="text-[10px] tracking-4 leading-loose font-light text-gray-500">
										07/2022 - 10/2022
									</p>
									<ul className="mt-3 list-disc ml-4">
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											Carry out regular website
											performance and security monitoring,
											by implementing best practices in
											application performance monitoring.
										</li>
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											Responsible for server maintenance
											and monitoring, including
											configuration, handling security
											updates.
										</li>
										<li className="mb-1 text-[0.85em] text-gray-600 tracking-3">
											SEO Optimization and Web Analytics:
											Implement best SEO practices and use
											web analytics tools such as Google
											Analytics to track and analyze user
											behavior
										</li>
									</ul>
								</div>
							</section>
						</article>
					</div>
				</div>
			</main>
		</>
	);
}
