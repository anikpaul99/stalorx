import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import GradientText from "../ui/GradientText";
import Section from "../ui/Section";
import { STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <Section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
        {/* Badge */}
        <div className="inline-block">
          <div className="bg-purple-500/20 border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
            ✨ Transforming Ideas Into Digital Reality
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight px-4 animate-slide-up">
          Build The Future
          <br />
          <GradientText>With StalorX</GradientText>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          We craft extraordinary digital experiences that drive growth, delight
          users, and stand the test of time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
          <Button href="#contact" variant="primary" showArrow>
            Let&apos;s Talk
          </Button>
          <Button href="#services" variant="secondary">
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-12 sm:pt-20 px-4">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="space-y-2 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
