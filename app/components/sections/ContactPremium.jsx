// "use client";

// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import ButtonPremium from "../ui/ButtonPremium";
// import SectionPremium from "../ui/SectionPremium";

// export default function ContactPremium() {
//   return (
//     <SectionPremium id="contact">
//       <div className="section-divider mb-16" />

//       <div className="max-w-4xl mx-auto text-center space-y-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
//             <span className="text-white">Ready To Build Something </span>
//             <span className="text-constellation">Amazing?</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-silver max-w-2xl mx-auto">
//             Let&apos;s turn your vision into reality. Get in touch and
//             let&apos;s start crafting your success story.
//           </p>
//         </motion.div>

//         {/* Contact Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="grid sm:grid-cols-3 gap-4 mb-8"
//         >
//           {[
//             {
//               icon: Mail,
//               label: "Email",
//               value: "contact@stalorx.com",
//               href: "mailto:contact@stalorx.com",
//             },
//             {
//               icon: Phone,
//               label: "Phone",
//               value: "+880 XXX XXX",
//               href: "tel:+880",
//             },
//             {
//               icon: MapPin,
//               label: "Location",
//               value: "Dhaka, Bangladesh",
//               href: "#",
//             },
//           ].map((contact, idx) => (
//             <motion.a
//               key={idx}
//               href={contact.href}
//               whileHover={{ y: -4 }}
//               className="glass-premium rounded-2xl p-6 hover:glass-strong transition-all constellation-glow group"
//             >
//               <contact.icon className="w-8 h-8 text-nebula-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
//               <div className="text-xs text-stardust mb-1 uppercase tracking-wider">
//                 {contact.label}
//               </div>
//               <div className="text-sm font-semibold text-platinum">
//                 {contact.value}
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//         >
//           <ButtonPremium
//             href="mailto:contact@stalorx.com"
//             variant="primary"
//             showSparkles
//             className="group"
//           >
//             <Mail className="w-5 h-5" />
//             Send Us a Message
//           </ButtonPremium>
//           <ButtonPremium href="tel:+880" variant="secondary">
//             <Phone className="w-5 h-5" />
//             Schedule A Call
//           </ButtonPremium>
//         </motion.div>
//       </div>
//     </SectionPremium>
//   );
// }

// v2

// 'use client'

// import { motion } from 'framer-motion'
// import { Mail, Phone, MapPin, Sparkles } from 'lucide-react'
// import SectionPremium from '../ui/SectionPremium'

// export default function ContactPremium() {
//   return (
//     <SectionPremium id="contact">
//       <div className="section-divider mb-16" />

//       <div className="max-w-4xl mx-auto text-center space-y-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
//             <span className="text-white">Ready To Build Something </span>
//             <span className="text-constellation">Amazing?</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-silver max-w-2xl mx-auto">
//             Let&apos;s turn your vision into reality. Get in touch and let&apos;s start crafting your success story.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="grid sm:grid-cols-3 gap-4 mb-8"
//         >
//           <motion.a
//             href="mailto:contact@stalorx.com"
//             whileHover={{ y: -4 }}
//             className="glass-premium rounded-2xl p-6 hover:glass-strong transition-all constellation-glow group"
//           >
//             <Mail className="w-8 h-8 text-nebula-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
//             <div className="text-xs text-stardust mb-1 uppercase tracking-wider">Email</div>
//             <div className="text-sm font-semibold text-platinum">contact@stalorx.com</div>
//           </motion.a>

//           <motion.a
//             href="tel:+880"
//             whileHover={{ y: -4 }}
//             className="glass-premium rounded-2xl p-6 hover:glass-strong transition-all constellation-glow group"
//           >
//             <Phone className="w-8 h-8 text-nebula-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
//             <div className="text-xs text-stardust mb-1 uppercase tracking-wider">Phone</div>
//             <div className="text-sm font-semibold text-platinum">+880 XXX XXX</div>
//           </motion.a>

//           <motion.div
//             whileHover={{ y: -4 }}
//             className="glass-premium rounded-2xl p-6 hover:glass-strong transition-all constellation-glow group"
//           >
//             <MapPin className="w-8 h-8 text-nebula-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
//             <div className="text-xs text-stardust mb-1 uppercase tracking-wider">Location</div>
//             <div className="text-sm font-semibold text-platinum">Dhaka, Bangladesh</div>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//         >

//             href="mailto:contact@stalorx.com"
//             className="btn-premium constellation-glow bg-gradient-to-r from-nebula-purple to-nebula-blue text-white border-0 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold relative group px-8 py-4 rounded-full"
//           >
//             <Sparkles className="w-4 h-4 opacity-70" />
//             <Mail className="w-5 h-5" />
//             <span>Send Us a Message</span>
//           </a>

//             href="tel:+880"
//             className="btn-premium constellation-glow glass-premium text-platinum hover:glass-strong inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold px-8 py-4 rounded-full"
//           >
//             <Phone className="w-5 h-5" />
//             <span>Schedule A Call</span>
//           </a>
//         </motion.div>

//       </div>
//     </SectionPremium>
//   )
// }

// v1 for contact update

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
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative z-10 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-white">Ready To Build Something </span>
              <span className="text-constellation">Amazing?</span>
            </h2>
            <p className="text-lg sm:text-xl text-silver max-w-2xl mx-auto">
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
                  className="glass-premium rounded-2xl p-6 hover:glass-strong transition-all constellation-glow group block"
                >
                  <IconComponent className="w-8 h-8 text-nebula-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xs text-stardust mb-1 uppercase tracking-wider">
                    {contact.label}
                  </div>
                  <div className="text-sm font-semibold text-platinum">
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
              className="btn-premium constellation-glow bg-gradient-to-r from-nebula-purple to-nebula-blue text-white inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold px-8 py-4 rounded-full border-0"
            >
              <Sparkles className="w-4 h-4 opacity-70" />
              <Mail className="w-5 h-5" />
              <span>Send Us a Message</span>
            </a>
            <a
              href="tel:+8801867874406"
              className="btn-premium constellation-glow glass-premium text-platinum hover:glass-strong inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold px-8 py-4 rounded-full"
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
