import { MoveRight } from "lucide-react";
import React from "react";

const Contact = () => {
	return (
		<div className="bg-[#0058FF] rounded-[24px] p-4 gap-4 md:gap-6 md:p-10 lg:gap-8 lg:p-20 text-white flex flex-col items-center">
			<h1 className="text-[24px] md:text-[32px] lg:[48px] font-bold text-center">
				Get In Touch
			</h1>
			<p className="text-[14px] lg:[18px] text-center">
				Contact us now to enquire our plumbing services, whether you have a
				commercial project that requires support, or a domestic plumbing task that
				needs the attention of a trusted professional.
			</p>
			<button className="bg-white text-[#0058FF] text-[14px] md:text-4 font-bold rounded-[8px] py-[10px] px-[20px] md:px-6 w-fit flex items-center gap-2">
  <span>Book a Professional Plumber</span>
  <MoveRight className="w-4 h-4" />
</button>

		</div>
	);
};

export default Contact;
