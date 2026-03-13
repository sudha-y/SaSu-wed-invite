import { motion } from "framer-motion";
import ganeshaIcon from "@/assets/ganesha-icon.png";
import heroBg from "@/assets/hero-bg.jpg";
import zariBorder from "@/assets/zari-border.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        {/* Ganesha Icon */}
        <motion.img
          src={ganeshaIcon}
          alt="Lord Ganesha - Remover of Obstacles"
          className="w-24 h-24 md:w-32 md:h-32 mb-6 animate-float drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Sanskrit Mantra */}
        <motion.p
          className="mantra-text text-lg md:text-xl mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          ॐ श्री गणेशाय नमः
        </motion.p>
        <motion.p
          className="mantra-text text-sm md:text-base mb-8 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          "மங்களம் கொடுப்பவரே, விக்னங்களை நீக்குபவரே"
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-mustard-gold-light font-body text-lg md:text-xl tracking-widest uppercase mb-2">
            Together with their families
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-2">
            <span className="gold-shimmer">Priya</span>
            <span className="text-mustard-gold-light text-3xl md:text-4xl mx-3 font-light">&</span>
            <span className="gold-shimmer">Karthik</span>
          </h1>
          <p className="text-mustard-gold-light font-body text-xl md:text-2xl tracking-[0.3em] uppercase mt-4">
            Request your gracious presence
          </p>
        </motion.div>

        {/* Date */}
        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-4 text-primary-foreground">
            <div className="h-px w-16 bg-mustard-gold/50" />
            <p className="font-display text-2xl md:text-3xl font-semibold tracking-wider">
              December 2026
            </p>
            <div className="h-px w-16 bg-mustard-gold/50" />
          </div>
          <p className="text-mustard-gold-light font-body text-lg mt-2">Chennai, Tamil Nadu</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-mustard-gold/50 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-mustard-gold animate-glow" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Zari Border */}
      <img
        src={zariBorder}
        alt=""
        className="absolute bottom-0 left-0 w-full h-16 md:h-20 object-cover opacity-60"
      />
    </section>
  );
};

export default HeroSection;
