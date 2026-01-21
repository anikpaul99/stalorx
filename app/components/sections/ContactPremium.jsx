"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function ContactPremium() {
  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@stalorx.com",
      href: "mailto:contact@stalorx.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1867-874406",
      href: "tel:+8801867874406",
    },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
  ];

  return (
    <section
      id="contact"
      className="relative z-10 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="divider-clean mb-16" />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-adaptive-primary">
                Ready To Build Something{" "}
              </span>
              <span className="text-gradient-brand">Amazing?</span>
            </h2>
            <p className="text-lg sm:text-xl text-adaptive-secondary max-w-2xl mx-auto">
              Let&apos;s turn your vision into reality. Get in touch and
              let&apos;s start crafting your success story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4 mb-8"
          >
            {contactCards.map((contact, idx) => {
              const IconComponent = contact.icon;
              const isLink = contact.href !== "#";
              const Element = isLink ? "a" : "div";
              const props = isLink ? { href: contact.href } : {};

              return (
                <Element
                  key={idx}
                  {...props}
                  className="card-clean rounded-2xl p-6 hover:border-brand-purple transition-all group block"
                  style={{ outline: "none" }}
                >
                  <IconComponent className="w-8 h-8 text-brand-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xs text-adaptive-tertiary mb-1 uppercase tracking-wider">
                    {contact.label}
                  </div>
                  <div className="text-sm font-semibold text-adaptive-secondary">
                    {contact.value}
                  </div>
                </Element>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:contact@stalorx.com"
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{ outline: "none", border: "none" }}
            >
              <Sparkles className="w-4 h-4" />
              <Mail className="w-5 h-5" />
              <span>Send Us a Message</span>
            </a>
            <a
              href="tel:+8801867874406"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{ outline: "none" }}
            >
              <Phone className="w-5 h-5" />
              <span>Schedule A Call</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
