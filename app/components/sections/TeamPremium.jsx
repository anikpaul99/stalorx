"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Github, Linkedin, Mail, Star } from "lucide-react";
import CardPremium from "../ui/CardPremium";
import SectionPremium from "../ui/SectionPremium";
import { FOUNDERS } from "@/lib/constants";

export default function TeamPremium() {
  return (
    <SectionPremium id="team">
      <div className="divider-clean mb-16" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          <span className="text-adaptive-primary">Meet The </span>
          <span className="text-gradient-brand">Dream Team</span>
        </h2>
        <p className="text-lg sm:text-xl text-adaptive-secondary max-w-2xl mx-auto">
          Three passionate developers united by a vision to build exceptional
          software
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {FOUNDERS.map((founder, idx) => (
          <CardPremium
            key={founder.id}
            delay={idx * 0.15}
            className="group text-center"
          >
            <div className="relative mb-6 inline-block">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, 160px"
                  priority={idx === 0}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${founder.gradient} opacity-20 group-hover:opacity-10 transition-opacity`}
                />
              </motion.div>

              {/* Award Badge */}
              {/* <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div> */}

              {/* Star Decorations */}
              <Star className="absolute -top-4 left-1/4 w-3 h-3 text-brand-purple animate-pulse" />
              <Star
                className="absolute -bottom-4 right-1/4 w-3 h-3 text-brand-blue animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            <div className="text-center space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-adaptive-primary leading-tight">
                {founder.name}
              </h3>
              <div className="text-gradient-brand font-semibold">
                {founder.role}
              </div>
              <p className="text-sm text-adaptive-secondary">
                {founder.specialization}
              </p>

              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {founder.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-xs px-3 py-1 glass-premium rounded-full text-adaptive-secondary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="flex justify-center gap-3 pt-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  {
                    icon: Mail,
                    href: "mailto:contact@stalorx.com",
                    label: "Email",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 glass-premium rounded-full flex items-center justify-center hover:glass-strong transition-all constellation-glow"
                    aria-label={social.label}
                    style={{ outline: "none" }}
                  >
                    <social.icon className="w-5 h-5 text-adaptive-secondary" />
                  </motion.a>
                ))}
              </div>
            </div>
          </CardPremium>
        ))}
      </div>
    </SectionPremium>
  );
}
