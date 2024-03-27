// `app/dashboard/page.tsx` is the UI for the `/contact` URL
import Link from "next/link";
import { Metadata } from "next";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
	title: "Contact | Irfan Nuha.",

	description: "contact ",
};
export default function Contact() {
	return (
		<>
			<main className="min-h-fit mt-28">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 mt-10">
						<section>
							<header>
								<h2 className="text-2xl font-[900] text-neutral-700 uppercase tracking-4 antialiased text-center md:text-left hover:text-blue-700 cursor-pointer">
									Contact
								</h2>
							</header>
						</section>
					</div>
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 border-t-0">
						<section>
							<header>
								<p className="mt-4 text-sm text-gray-700">
									Feel free to get in touch. You can email me
									at:
								</p>
								<p className="mt-3 text-sm text-gray-700 underline underline-offset-2 decoration-dotted decoration-0 hover:no-underline hover:text-red-500 transition">
									<Link href={"mailto:irfannuhaa@gmail.com"}>
										Irfan nuha via mail
									</Link>
								</p>
								<div className="flex items-center space-x-4 mt-10">
									{/* Icon GitHub */}
									<Link
										href={"https://github.com/IrfanNha"}
										target="_blank">
										<FaGithub className="w-4 h-4 text-neutral-500 hover:text-blue-700 transition duration-300" />
									</Link>

									{/* Icon Email */}
									<Link href={"mailto:irfannuhaa@gmail.com"}>
										<HiOutlineMail className="w-4 h-4 text-neutral-500 hover:text-blue-700 transition duration-300" />
									</Link>

									{/* Icon LinkedIn */}
									<FaLinkedin className="w-4 h-4 text-neutral-500 hover:text-blue-700 transition duration-300" />
								</div>
							</header>
						</section>
					</div>
				</div>
			</main>
		</>
	);
}
