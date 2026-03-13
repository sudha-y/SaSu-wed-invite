import { motion } from "framer-motion";
import zariBorder from "@/assets/zari-border.png";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-primary relative overflow-hidden">
      <img src={zariBorder} alt="" className="absolute top-0 left-0 w-full h-10 object-cover opacity-30" />
      
      <motion.div
        className="container max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="mantra-text text-lg mb-6">
          "இரு குடும்பங்கள், ஒரு இதயம்"
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
          Priya & Karthik
        </h3>
        <p className="text-mustard-gold-light font-body text-lg">
          December 15, 2026 · Chennai
        </p>
        <div className="mt-8 h-px w-32 mx-auto bg-mustard-gold/30" />
        <p className="mt-6 font-body text-sm text-mustard-gold-light/60">
          Made with love · #PriyaWedsKarthik
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
