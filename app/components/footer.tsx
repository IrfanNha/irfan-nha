import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/profile.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
	return (
		<>
			<div className="container mx-auto lg:px-10 md:px-10 px-0">
				<div className="mt-14 border-y border-gray-300 2xl:border-b 2xl:border-y-0">
					<header className="my-10 py-10 px-5 2xl:px-0 md:px-14 flex flex-col items-center 2xl:items-start">
						<Image
							src={profilePic}
							alt="Irfan Nuha"
							height={200}
							width={200}
							className="rounded-full"
						/>
						<h2 className="mt-6 text-3xl font-[900] text-neutral-700 uppercase tracking-4 antialiased text-center md:text-left 2xl:text-start">
							<Link href={"/"}>Irfan Nuha</Link>
						</h2>
						<p className="mt-6 text-gray-400 font-light underline underline-offset-2 uppercase tracking-[0.3rem]  text-xs decoration-dotted decoration-0 hover:no-underline hover:text-blue-700 transition  2xl:text-start">
							<Link href={"mailto:irfannuhaa@gmail.com"}>
								irfannuhaa@gmail.com
							</Link>
						</p>
					</header>
				</div>
				<div className="mt-10">
					<section className=" py-10 px-5 2xl:py-0 md:px-0 ">
						<p className="font-bold tracking-4 text-neutral-700 text-sm uppercase">
							About
						</p>
						<p className="mt-6 text-xs font-normal text-gray-800 antialiased leading-loose tracking-3">
							Hello, I'm Irfan, a web developer with over a year
							of experience in Front-end, Back-end, and CMS
							development. Despite my brief time in the industry,
							I've tackled both sides of web development with
							enthusiasm, finding challenges to be my greatest
							motivator. Now, I'm seeking opportunities in Full
							Stack development to advance my career. I believe in
							pushing boundaries and contributing to team growth.
							Thank you for considering me!
						</p>
						<button className="mt-6 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition md:flex-row md:justify-center md:w-auto w-full">
							<Link href={"/resume"}>Learn More</Link>
						</button>
					</section>
				</div>
			</div>
			<footer className=" mt-10">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					<div className=" py-10 px-5 md:px-0 border-t border-t-gray-300">
						<section>
							<header>
								<div className="flex items-center space-x-4">
									{/* Icon GitHub */}
									<Link
										href={"https://github.com/IrfanNha"}
										target="_blank">
										<FaGithub className="w-4 h-4 text-gray-400 hover:text-blue-700 transition duration-300" />
									</Link>

									{/* Icon Email */}
									<Link href={"mailto:irfannuhaa@gmail.com"}>
										<HiOutlineMail className="w-4 h-4 text-gray-400 hover:text-blue-700 transition duration-300" />
									</Link>

									{/* Icon LinkedIn */}
									<FaLinkedin className="w-4 h-4 text-gray-400 hover:text-blue-700 transition duration-300" />
								</div>
								<div className="mt-9">
									<p className="uppercase font-light text-[0.6rem] tracking-4 text-gray-400">
										© irfan nuha&apos;
										<Link
											href={"/"}
											className="underline decoration-dotted underline-offset-2 hover:no-underline decoration-0 hover:text-blue-700 transition">
											irfannha.com.
										</Link>
									</p>
								</div>
							</header>
						</section>
					</div>
				</div>
			</footer>
		</>
	);
}
