import { motion } from "framer-motion";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import floralDivider from "@/assets/floral-divider.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const CoupleSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="text-accent font-body text-lg tracking-[0.3em] uppercase mb-3">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Written in the Stars
          </h2>
          <img src={floralDivider} alt="" className="mx-auto w-48 md:w-64 h-auto opacity-80" />
        </motion.div>

        {/* Magazine Spread Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={couple1}
                alt="Pre-wedding photo - The Couple"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent rounded-lg opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
              The Bride
            </h3>
            <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-4">
              <span className="font-display text-accent font-semibold">Priya Lakshmi</span>, daughter 
              of Mr. Ramanathan & Mrs. Meenakshi, brings grace, warmth, and an infectious 
              joy that lights up every room she enters.
            </p>
            <p className="font-body text-lg text-muted-foreground italic">
              "Like a jasmine in bloom, her presence fills the air with sweetness."
            </p>
          </motion.div>
        </div>

        {/* Groom Section - Reversed */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="md:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={couple2}
                alt="Pre-wedding photo - Sacred elements"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent rounded-lg opacity-50" />
          </motion.div>

          <motion.div
            className="md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
              The Groom
            </h3>
            <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-4">
              <span className="font-display text-accent font-semibold">Karthik Sundaram</span>, son 
              of Mr. Sundaram & Mrs. Vasantha, carries a steadfast spirit, deep devotion, 
              and a heart full of love for tradition and family.
            </p>
            <p className="font-body text-lg text-muted-foreground italic">
              "A soul rooted in dharma, reaching for the stars."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
