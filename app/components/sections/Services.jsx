import { Code, Zap, Shield, CheckCircle } from "lucide-react";
import Card from "../ui/Card";
import GradientText from "../ui/GradientText";
import Section from "../ui/Section";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  code: Code,
  zap: Zap,
  shield: Shield,
};

export default function Services() {
  return (
    <Section id="services" background>
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 px-4">
          What We <GradientText>Create</GradientText>
        </h2>
        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
          Comprehensive solutions powered by modern technology and innovative
          thinking
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Card key={service.id} className="group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm text-purple-300"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
