import { Rocket, Target, Users } from "lucide-react";
import GradientText from "../ui/GradientText";
import Section from "../ui/Section";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap = {
  rocket: Rocket,
  target: Target,
  users: Users,
};

export default function WhyUs() {
  return (
    <Section>
      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-purple-500/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 px-4">
            Why Partner With <GradientText>StalorX?</GradientText>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.id} className="text-center space-y-3 sm:space-y-4">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto`}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
