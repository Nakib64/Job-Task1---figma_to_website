import Image from "next/image";
import Faq from "./Components/FAQ";
import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <main className="py-8 px-4 space-y-8 md:p-[40px] lg:p-[120px] md:space-y-[40px] lg:space-y-[120px]">
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
