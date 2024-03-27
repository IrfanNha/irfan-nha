import { MetadataRoute } from "next";
import { userAgent } from "next/server";

export default async function robots(): Promise<MetadataRoute.Robots> {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/admin", "/privacy"],
			},
		],
		sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
	};
}
