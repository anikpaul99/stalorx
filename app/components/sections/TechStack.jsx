import GradientText from "../ui/GradientText";
import Section from "../ui/Section";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
  return (
    <Section>
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 px-4">
          Powered By <GradientText>Cutting-Edge Tech</GradientText>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {TECH_STACK.map((tech, idx) => (
          <div
            key={idx}
            className="px-3 sm:px-6 py-2 sm:py-3 bg-slate-800/50 border border-purple-500/30 rounded-full text-xs sm:text-sm font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all cursor-default"
          >
            {tech}
          </div>
        ))}
      </div>
    </Section>
  );
}
