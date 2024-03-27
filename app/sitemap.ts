import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_URL}/about`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/resume`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/certifications`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/contact`,
			lastModified: new Date(),
		},
	];
}
