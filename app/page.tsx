import Link from "next/link";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
							`,
					}}
				/>
			</Head>
			<main className="min-h-fit mt-28">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 mt-10">
						<section>
							<header>
								<h2 className="text-2xl font-[900] text-neutral-700 uppercase tracking-4 antialiased text-center md:text-left hover:text-blue-700">
									<Link href={"/"}>About Me</Link>
								</h2>

								<p className="mt-4 tracking-4 font-light uppercase text-sm text-center md:text-left leading-loose w-full md:w-2/3 font-sans">
									I WILL PROVE MYSELF WITH MY ABILITY, AND I
									am confident in my abilities. IM TRYING TO
									FORWARD AND WANT TO KEEP IT.
								</p>
							</header>
						</section>
					</div>
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 border-t-0">
						<section>
							<p className="mt-4 text-sm tracking-3 leading-loose">
								Welcome to my website. Please feel free to read
								more here, or you can check out my&apos;
								<Link
									href={"/resume"}
									className="underline decoration-dotted underline-offset-2 text-gray-500 decoration-0 hover:no-underline hover:text-blue-700 transition">
									resume
								</Link>
								,&apos;
								<Link
									href={"/projects"}
									className="underline decoration-dotted underline-offset-2 text-gray-500 decoration-0 hover:no-underline hover:text-blue-700 transition">
									projects
								</Link>
								, view site&apos;
								<Link
									href={"/certifications"}
									className="underline decoration-dotted underline-offset-2 text-gray-500 decoration-0 hover:no-underline hover:text-blue-700 transition">
									statistics
								</Link>
								, or&apos;
								<Link
									href={"/contact"}
									className="underline decoration-dotted underline-offset-2 text-gray-500 decoration-0 hover:no-underline hover:text-blue-700 transition">
									contact
								</Link>
								&apos; me.
							</p>
							<p className="mt-5 text-sm tracking-3 leading-loose text-gray-800 antialiased">
								Im a skilled full stack developer with over 2
								years of experience in crafting web applications
								using a variety of technologies. My expertise
								covers both front-end and back-end development,
								and Ive successfully delivered projects for
								clients across different industries. <br />
								In my recent role, I led a team in creating a
								scalable e-commerce platform using modern web
								tech like React, Node.js, and MongoDB. I handled
								the platforms architecture and implemented
								features such as payment processing, user
								authentication, and real-time data
								visualization.
								<br />
								Throughout my career, Ive built RESTful APIs,
								integrated third-party APIs, and worked with
								databases like MySQL, PostgreSQL, and MongoDB.
								Im proficient in front-end technologies such as
								Angular, React, and Vue.js, and have experience
								with CSS frameworks like Bootstrap and
								Materialize.
								<br />
								Moreover, Im well-versed in PHP development,
								particularly with the Laravel framework. Ive
								developed custom applications, integrated
								various APIs, and worked with MySQL and other
								databases.
								<br />
								Beyond technical skills, I possess strong
								communication and collaboration abilities,
								excelling in both individual and team settings.
								Im committed to staying updated with the latest
								web development technologies and best practices,
								and Im passionate about creating high-quality,
								user-friendly applications that meet business
								and user needs.
								<br />
							</p>
						</section>
					</div>
				</div>
			</main>
		</>
	);
}
