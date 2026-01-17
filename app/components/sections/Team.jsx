import { Award, Github, Linkedin, Mail } from "lucide-react";
import Card from "../ui/Card";
import GradientText from "../ui/GradientText";
import Section from "../ui/Section";
import { FOUNDERS } from "@/lib/constants";

export default function Team() {
  return (
    <Section id="team" background>
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 px-4">
          Meet The <GradientText>Dream Team</GradientText>
        </h2>
        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
          Three passionate developers united by a vision to build exceptional
          software
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {FOUNDERS.map((founder) => (
          <Card key={founder.id} className="group relative">
            <div className="relative mb-4 sm:mb-6">
              <div
                className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br ${founder.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center text-4xl sm:text-6xl shadow-2xl group-hover:scale-110 transition-transform`}
              >
                {founder.icon}
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>

            <div className="text-center space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold leading-tight">
                {founder.name}
              </h3>
              <div className="text-sm sm:text-base text-purple-400 font-semibold">
                {founder.role}
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                {founder.specialization}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {founder.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-purple-500/20 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-2 sm:gap-3 pt-3 sm:pt-4">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="mailto:contact@stalorx.com"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
