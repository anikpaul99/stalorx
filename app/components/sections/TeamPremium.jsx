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
          <span className="text-text-black">Meet The </span>
          <span className="text-gradient-brand">Dream Team</span>
        </h2>
        <p className="text-lg sm:text-xl text-text-gray max-w-2xl mx-auto">
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
                whileHover={{ scale: 1.05 }}
                className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, 160px"
                  priority={idx === 0}
                />
              </motion.div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-black leading-tight">
              {founder.name}
            </h3>
            <div className="text-gradient-brand font-semibold mt-2">
              {founder.role}
            </div>
            <p className="text-sm text-text-gray mt-2">
              {founder.specialization}
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {founder.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-light-gray border border-border-gray rounded-full text-text-gray"
                >
                  {skill}
                </span>
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
                  className="w-10 h-10 border border-border-gray rounded-full flex items-center justify-center hover:border-brand-blue transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-text-gray" />
                </motion.a>
              ))}
            </div>
          </CardPremium>
        ))}
      </div>
    </SectionPremium>
  );
}
