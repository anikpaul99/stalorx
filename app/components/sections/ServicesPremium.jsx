"use client";

import { motion } from "framer-motion";
import { Code, Zap, Shield, CheckCircle } from "lucide-react";
import CardPremium from "../ui/CardPremium";
import SectionPremium from "../ui/SectionPremium";
import { SERVICES } from "@/lib/constants";

const iconMap = { code: Code, zap: Zap, shield: Shield };

export default function ServicesPremium() {
  return (
    <SectionPremium id="services">
      <div className="divider-clean mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          <span className="text-adaptive-primary">What We </span>
          <span className="text-gradient-brand">Create</span>
        </h2>
        <p className="text-lg sm:text-xl text-adaptive-secondary max-w-2xl mx-auto">
          Comprehensive solutions powered by modern technology and innovative
          thinking
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES.map((service, idx) => {
          const Icon = iconMap[service.icon];
          return (
            <CardPremium key={service.id} delay={idx * 0.1} className="group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-adaptive-primary mb-4">
                {service.title}
              </h3>
              <p className="text-adaptive-secondary leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-adaptive-secondary"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-purple flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardPremium>
          );
        })}
      </div>
    </SectionPremium>
  );
}
