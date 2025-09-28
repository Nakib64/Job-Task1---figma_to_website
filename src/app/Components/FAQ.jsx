import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do plumbers deal with heating?",
    answer: "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer: "No, we do not charge a call out fee. You only pay for the services or repairs carried out by our engineer.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer: "We aim to dispatch an engineer within 24 hours of your request. In urgent cases, same-day service may be available depending on your location.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer: "First, turn off the main water supply to prevent further damage. Then, contact our support team immediately so we can send an engineer to fix the issue.",
  }
];

export default function Faq() {
  return (
    <div className=" md:space-y-[40px] lg:space-y-[120px]">
        <h1 className=" text-center text-[24px] md:text-[32px] lg:text-[48px] text-[#1B1743] font-bold">Frequently asked questions</h1>
         <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto ">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="text-[#1B1743]">
          <AccordionTrigger className="flex justify-between items-center px-4 py-4 md:py-6 text-[16px] md:text-[20px] lg:text-[28px] font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2 text-[#2A2F32] text-[14px] md:text-[18px]">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
   
  );
}
