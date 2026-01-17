import { Mail } from "lucide-react";
import Button from "../ui/Button";
import GradientText from "../ui/GradientText";
import Section from "../ui/Section";

export default function Contact() {
  return (
    <Section id="contact" background>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
          Ready To Build Something <GradientText>Amazing?</GradientText>
        </h2>
        <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8 px-4">
          Let&apos;s turn your vision into reality. Get in touch and let&apos;s
          start crafting your success story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href="mailto:contact@stalorx.com"
            className="group bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span className="break-all">contact@stalorx.com</span>
          </a>
          <Button href="tel:+880" variant="secondary">
            Schedule A Call
          </Button>
        </div>
      </div>
    </Section>
  );
}
