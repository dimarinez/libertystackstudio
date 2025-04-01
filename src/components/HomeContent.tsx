// src/components/HomeContent.tsx
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import PageTransition from "./PageTransition";
import { FaTools, FaRocket, FaPaintBrush, FaBuilding, FaLink, FaMobileAlt, FaMagic, FaGlobe, FaAppStore } from "react-icons/fa";

export default function HomeContent() {
  const ref = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      } 
    },
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3 } 
    },
  };

  return (
    <PageTransition>
      <main ref={ref} className="relative overflow-hidden font-montserrat">
        {/* Hero Section with Video Background */}
        <motion.section
          id="home"
          className="min-h-screen bg-gradient-to-br from-[#2A4EFF] to-[#7B61FF] flex items-center justify-center text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/videos/hero-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="z-10 px-4 relative">
            <motion.h4
              className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 tracking-tight"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Made in the USA
            </motion.h4>
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              LibertyStack<span className="text-[#FF6B6B]">Studio</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-[#E2E8F0] max-w-3xl mx-auto"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Crafting cutting-edge ecommerce & mobile experiences.
            </motion.p>
          </div>
        </motion.section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24 bg-[#F7F9FC] relative">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-12 md:mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <div className="max-w-7xl mx-auto px-4 space-y-12 md:space-y-16">
            {/* Shopify Development */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2A4EFF] mb-6 md:mb-8 text-center">
                Shopify
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "Custom Shopify Apps",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Leverage React to craft bespoke Shopify apps with seamless interactivity and dynamic functionality.</li>
                        <li>Engineer sophisticated subscription systems and optimized checkout flows for enhanced revenue streams.</li>
                        <li>Deliver precision-tailored solutions that integrate flawlessly with your Shopify ecosystem.</li>
                      </ul>
                    ),
                    icon: <FaTools className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                  {
                    title: "Hydrogen Storefronts",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Build headless commerce experiences with Next.js, unlocking lightning-fast page loads and unmatched flexibility.</li>
                        <li>Scale effortlessly with Hydrogen’s modern architecture, designed for high-traffic ecommerce demands.</li>
                        <li>Elevate user engagement with cutting-edge UX design, optimized for conversions and retention.</li>
                      </ul>
                    ),
                    icon: <FaRocket className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                  {
                    title: "Theme Development",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Develop responsive Shopify themes with pixel-perfect precision across all devices.</li>
                        <li>Boost discoverability with SEO-optimized code structures that align with search engine algorithms.</li>
                        <li>Transform your brand identity into visually stunning, cohesive designs that captivate and convert.</li>
                      </ul>
                    ),
                    icon: <FaPaintBrush className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                ].map((service, index) => (
                  <motion.div 
                    key={index} 
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover="hover" 
                    className="p-6 md:p-8 glass-card flex flex-col items-center text-center"
                  >
                    {service.icon}
                    <h4 className="text-lg md:text-xl font-semibold text-[#2D3748] mt-4 mb-2">{service.title}</h4>
                    {service.desc}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Salesforce Commerce Cloud */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2A4EFF] mb-6 md:mb-8 text-center">
                Salesforce B2C Commerce Cloud
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "SFCC Consulting",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Provide expert SFRA (Storefront Reference Architecture) guidance to optimize frontend performance.</li>
                        <li>Refine UI/UX with data-driven design strategies, enhancing customer satisfaction and loyalty.</li>
                        <li>Architect robust backend solutions that streamline operations and support enterprise-scale growth.</li>
                      </ul>
                    ),
                    icon: <FaBuilding className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                  {
                    title: "API Integrations",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Integrate OCAPI for seamless front-end connectivity, enabling real-time data synchronization.</li>
                        <li>Connect payment gateways and third-party data APIs with precision for secure, efficient transactions.</li>
                        <li>Streamline complex workflows with custom API solutions, reducing operational friction.</li>
                      </ul>
                    ),
                    icon: <FaLink className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                  {
                    title: "PWA Optimization",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Develop React-powered Progressive Web Apps (PWAs) for lightning-fast, app-like experiences.</li>
                        <li>Prioritize mobile-first design with responsive layouts that adapt to any screen size.</li>
                        <li>Seamlessly integrate PWAs with SFCC, enhancing performance and offline capabilities.</li>
                      </ul>
                    ),
                    icon: <FaMobileAlt className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                ].map((service, index) => (
                  <motion.div 
                    key={index} 
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover="hover" 
                    className="p-6 md:p-8 glass-card flex flex-col items-center text-center"
                  >
                    {service.icon}
                    <h4 className="text-lg md:text-xl font-semibold text-[#2D3748] mt-4 mb-2">{service.title}</h4>
                    {service.desc}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Microsites & Mobile Development */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2A4EFF] mb-6 md:mb-8 text-center">
                Microsites & Mobile Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "Animated Landing Pages",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Harness React and Framer Motion to create fluid, high-impact animations that grab attention.</li>
                        <li>Design visually striking landing pages that drive engagement and boost conversion rates.</li>
                        <li>Optimize performance for rapid load times, ensuring a smooth, immersive user experience.</li>
                      </ul>
                    ),
                    icon: <FaMagic className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                  {
                    title: "Microsites",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Build React/Next.js-powered microsites with server-side rendering for superior speed and SEO.</li>
                        <li>Create campaign-ready platforms that launch quickly and align with marketing goals.</li>
                        <li>Craft custom UIs with meticulous detail, delivering standout digital experiences.</li>
                      </ul>
                    ),
                    icon: <FaGlobe className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                  {
                    title: "React Native Apps",
                    desc: (
                      <ul className="text-[#2D3748] list-disc list-inside text-left text-sm md:text-base">
                        <li>Develop cross-platform mobile apps with React Native, ensuring consistent performance on iOS and Android.</li>
                        <li>Deliver native-like UX with smooth animations and intuitive navigation, rivaling native apps.</li>
                        <li>Accelerate deployment with reusable codebases, minimizing time-to-market without sacrificing quality.</li>
                      </ul>
                    ),
                    icon: <FaAppStore className="text-3xl md:text-4xl text-[#2A4EFF]" />
                  },
                ].map((service, index) => (
                  <motion.div 
                    key={index} 
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover="hover" 
                    className="p-6 md:p-8 glass-card flex flex-col items-center text-center"
                  >
                    {service.icon}
                    <h4 className="text-lg md:text-xl font-semibold text-[#2D3748] mt-4 mb-2">{service.title}</h4>
                    {service.desc}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 md:py-24 bg-[#F7F9FC] relative">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-12 md:mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#2D3748] text-center mb-8 md:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Brands We’ve Worked For and With
          </motion.p>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "PGA Tour Superstore", svg: "/svgs/logo.svg" },
                { name: "Sackcloth & Ashes", svg: "/svgs/sackcloth-logo_2_c052efb8-7357-4f82-bc52-08888e8c92a3.svg" },
                { name: "ASICS", svg: "/svgs/asics-3.svg" },
                { name: "Disney", svg: "/svgs/disney-store-logo.svg" },
                { name: "UGG", svg: "/svgs/ugg.svg" },
                { name: "Hoka", svg: "/svgs/hoka.svg" },
                { name: "Teva", svg: "/svgs/teva.svg" },
                { name: "Columbia Sportswear", svg: "/svgs/columbia-sportswear-co-1.svg" },
                { name: "Sorel", svg: "/svgs/sorel.svg" },
              ].map((brand, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover="hover"
                  className="p-4 md:p-6 glass-card flex items-center justify-center"
                >
                  <img src={brand.svg} alt={`${brand.name} logo`} className="h-12 md:h-16 w-auto max-w-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-12 md:py-24 text-center" style={{ background: 'linear-gradient(to bottom right, #1A1F2B, #2A4EFF)' }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#E2E8F0] mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s build your next ecommerce success story.
          </motion.p>
          <motion.a
            href="mailto:contact@libertystackstudio.com"
            className="inline-block bg-[#2A4EFF] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#FF6B6B] transition-all duration-300 text-sm md:text-base"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Email: contact@libertystackstudio.com
          </motion.a>
        </section>
      </main>
    </PageTransition>
  );
}