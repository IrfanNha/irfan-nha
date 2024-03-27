import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	robots: {
		index: false,
		follow: true,
	},

	description: "Privacy Policy",
};
export default function PrivacyPolicy() {
	return (
		<>
			<main className="min-h-fit mt-28">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 mt-10">
						<section>
							<header>
								<h2 className="text-2xl font-[900] text-neutral-700 uppercase tracking-4 antialiased text-center md:text-left hover:text-blue-700 cursor-pointer">
									Privacy Policy
								</h2>
							</header>
						</section>
					</div>
					<div className="bg-white py-14 px-5 md:px-14 border border-gray-200 border-t-0">
						<section>
							<p>
								This Privacy Policy governs the manner in which
								DavinciTeams collects, uses, maintains, and
								discloses information collected from users of
								the irfan-nha.vercel.app website Irfan
								portfolio. This privacy policy applies to the
								Site and all products and services offered by
								DavinciTeams.
							</p>
							<h3>Personal identification information:</h3>
							<p>
								We may collect personal identification
								information from Users in a variety of ways,
								including, but not limited to, when Users visit
								our site, register on the site, fill out a form,
								and in connection with other activities,
								services, features or resources we make
								available on our Site. Users may be asked for,
								as appropriate, name, email address. Users may,
								however, visit our Site anonymously. We will
								collect personal identification information from
								Users only if they voluntarily submit such
								information to us. Users can always refuse to
								supply personally identification information,
								except that it may prevent them from engaging in
								certain Site related activities.
							</p>
						</section>
					</div>
				</div>
			</main>
		</>
	);
}
