// `app/dashboard/page.tsx` is the UI for the `/certifications` URL
import { Metadata } from "next";
import Age from "../components/age";
import Link from "next/link";
import { BsAwardFill } from "react-icons/bs";

export const metadata: Metadata = {
	title: "Certifications | Irfan Nuha.",

	description: "Certifications ",
};
export default function Certifications() {
	return (
		<>
			<main className="min-h-fit mt-28">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 mt-10">
						<section>
							<header>
								<h2 className="text-2xl font-[900] text-neutral-700 uppercase tracking-4 antialiased text-center md:text-left hover:text-blue-700 cursor-pointer">
									Certifications
								</h2>
							</header>
						</section>
					</div>
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 border-t-0">
						<section>
							<p className="uppercase font-bold text-sm">
								SOME STATS ABOUT ME
							</p>
							<div className="flex flex-col mt-4">
								<div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
									<div className="py-2 inline-block min-w-full">
										<div className="overflow-hidden">
											<table className="min-w-full">
												<tbody>
													<tr className="bg-gray-100 border-b">
														<td
															colSpan={2}
															className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
															Current age
														</td>
														<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
															<p className="w-">
																<Age />
															</p>
														</td>
													</tr>
													<tr className="bg-white border-b">
														<td
															colSpan={2}
															className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
															Current City
														</td>
														<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
															Semarang, Indonesia
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="mt-16">
							<p className="uppercase font-bold text-sm">
								Here My Certification Showcase
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
								<div className=" p-4 border border-gray-200">
									<p className="tracking-[0.2em] font-bold flex items-center hover:text-blue-700 cursor-pointer">
										Front End Dev Certificate
										<BsAwardFill className="ml-1" />
									</p>
									<p className="text-xs tracking-4  mt-1">
										October, 2022
									</p>
									<p className="tracking-3 font-light text-sm mt-4 hover:text-blue-700">
										<Link href={"https://gamelab.id/"}>
											{" "}
											Gamelab.id &#8599;
										</Link>
									</p>

									<button className="mt-6 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition md:flex-row md:justify-center md:w-auto w-full">
										<Link
											href={
												"https://www.gamelab.id/certificate/GL1959969336"
											}>
											Certificate Details
										</Link>
									</button>
								</div>
								<div className=" p-4 border border-gray-200">
									<p className="tracking-[0.2em] font-bold flex items-center hover:text-blue-700 cursor-pointer">
										Software Engineering Competency
										Certificate
										<BsAwardFill className="ml-1" />
									</p>
									<p className="text-xs tracking-4  mt-1">
										April, 2024
									</p>
									<p className="tracking-3 font-light text-sm mt-4 hover:text-blue-700">
										<Link href={"https://bnsp.go.id/"}>
											{" "}
											National Professional Certification
											Agency &#8599;
										</Link>
									</p>

									<button className="mt-6 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition md:flex-row md:justify-center md:w-auto w-full">
										<Link href={"/certifications"}>
											Certificate Details
										</Link>
									</button>
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
		</>
	);
}
