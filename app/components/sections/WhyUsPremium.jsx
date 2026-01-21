"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Users } from "lucide-react";
import SectionPremium from "../ui/SectionPremium";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap = { rocket: Rocket, target: Target, users: Users };

export default function WhyUsPremium() {
  return (
    <SectionPremium>
      <div className="divider-clean mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-adaptive-primary">Why Partner With </span>
          <span className="text-gradient-brand">StalorX?</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_CHOOSE_US.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="text-center space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-adaptive-primary">
                {item.title}
              </h3>
              <p className="text-adaptive-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionPremium>
  );
}
