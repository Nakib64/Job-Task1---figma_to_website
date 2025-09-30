import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Assuming lucide-react icons are available in the Next.js environment

// Data structured to precisely match the content and layout columns of the image.
const services = [
	{ name: "Plumbing", href: "#" },
	{ name: "Drainage", href: "#" },
	{ name: "Bathrooms", href: "#" },
	{ name: "Commercial", href: "#" },
];

const usefulLinksCol1 = [
	{ name: "Contact Us", href: "#" },
	{ name: "Updates", href: "#" },
	{ name: "About Us", href: "#" },
	{ name: "Rates", href: "#" },
];

const usefulLinksCol2 = [
	{ name: "Customer Services", href: "#" },
	{ name: "Updates", href: "#" },
	{ name: "Locations", href: "#" },
	{ name: "Sitemap", href: "#" },
];

const FooterLink = ({ href, children }) => (
	// Matched styling: simple black text, block, small margin
	<a href={href} className="text-sm text-[#2A2F32] block mb-2 hover:underline">
		{children}
	</a>
);

// Main Footer Component
export const Footer = () => {
	return (
		// Default white background, black text, minimal vertical padding
		<footer className="bg-white text-black py-8 md:py-10 ">
			<div className="grid grid-cols-1 xl:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-14 xl:gap-20 2xl:gap-30">
				{/* Top Section: Logo and Social Icons */}
				<div className="pr-8 flex flex-col gap-7">
					<h2 className="text-[32px] font-bold p-0 m-0">Business Logo</h2>
					<div className="flex items-center gap-4">
						<FaFacebook size={32} />
						<FaLinkedinIn size={32}/>
						<FaTwitter size={32}/>
						<FaInstagram size={32}/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 lg:gap-14">
					{/* Column 1: Our Services */}
					<div className="flex flex-col gap-4 xl:gap-6">
						<h3 className="text-[14px] font-bold ">Our Services</h3>
						<div className="space-y-4">
							{services.map((link) => (
								<FooterLink key={link.name} href={link.href}>
									{link.name}
								</FooterLink>
							))}
						</div>
					</div>

					{/* Column 2 & 3: Useful Links (Displayed in two columns/lists) */}
					<div className="col-span-1 md:col-span-2 text-[#2A2F32] w-full flex flex-col gap-4 xl:gap-6">
						<h3 className="text-[14px] font-bold ">Useful Links</h3>

						<div className="grid grid-cols-2 justify-between md:w-fit gap-2">
							{/* List 1 */}
							<div className="space-y-4">
								{usefulLinksCol1.map((link) => (
									<FooterLink key={link.name} href={link.href}>
										{link.name}
									</FooterLink>
								))}
							</div>
							{/* List 2 */}
							<div className="space-y-4">
								{usefulLinksCol2.map((link) => (
									<FooterLink key={link.name} href={link.href}>
										{link.name}
									</FooterLink>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Column 4: Contact Info (Full width on mobile/tablet) */}
				<div className="col-span-1 font-semibold flex flex-col gap-4 xl:gap-6">
					<h3 className="text-[14px] font-bold ">Contact Info</h3>

					<div className="space-y-5 text-[14px]">
						<div className="flex items-start">
							{/* Using an icon for structure, but minimal styling */}
							<MapPin className="w-4 h-4 flex-shrink-0 mr-2 mt-1 text-black" />
							<span className="leading-snug">1 Sail Street, London, SE11 6NQ</span>
						</div>

						<div className="flex items-center">
							<Mail className="w-4 h-4 flex-shrink-0 mr-2 text-black" />
							<a href="mailto:enquiries@PlumbingPros.com" className="hover:underline">
								enquiries@PlumbingPros.com
							</a>
						</div>

						<div className="flex items-center">
							<Phone className="w-4 h-4 flex-shrink-0 mr-2 text-black" />
							<a href="tel:02045276474" className="hover:underline">
								020 4527 6474
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Separator and Bottom Text */}
			<div className="mt-8 pt-6 ">
				<div className="text-[14px] text-[#2A2F32] opacity-50 text-center flex flex-col md:flex-row md:justify-between">
					<p>&copy; Plumbing Pros. All Rights Reserved</p>
					<p>Website by IH Adventure And Creative</p>
				</div>
			</div>
		</footer>
	);
};
