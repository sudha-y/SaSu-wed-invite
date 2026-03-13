import { useState } from "react";
import { motion } from "framer-motion";
import floralDivider from "@/assets/floral-divider.png";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietary: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log("RSVP submitted:", formData);
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-md bg-background border border-border font-body text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors";
  const labelClasses = "block font-display text-base font-semibold text-primary mb-1.5";

  if (submitted) {
    return (
      <section className="py-20 md:py-32 bg-background" id="rsvp">
        <motion.div
          className="container max-w-2xl mx-auto px-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            நன்றி! Thank You!
          </h2>
          <p className="font-body text-xl text-foreground mb-4">
            Your response has been recorded. We look forward to celebrating with you!
          </p>
          <img src={floralDivider} alt="" className="mx-auto w-40 h-auto opacity-80" />
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-background" id="rsvp">
      <div className="container max-w-2xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-body text-lg tracking-[0.3em] uppercase mb-3">
            Kindly Respond
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            RSVP
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            We would be honoured by your presence
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 event-card p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className={labelClasses}>Full Name *</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className={inputClasses}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className={inputClasses}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className={labelClasses}>Will you attend? *</label>
            <select
              required
              className={inputClasses}
              value={formData.attending}
              onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
            >
              <option value="">Select...</option>
              <option value="yes">Joyfully Accept</option>
              <option value="no">Regretfully Decline</option>
            </select>
          </div>

          {formData.attending === "yes" && (
            <>
              <div>
                <label className={labelClasses}>Number of Guests</label>
                <select
                  className={inputClasses}
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClasses}>Dietary Preferences</label>
                <select
                  className={inputClasses}
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                >
                  <option value="">No preference</option>
                  <option value="vegetarian">Pure Vegetarian</option>
                  <option value="jain">Jain</option>
                  <option value="vegan">Vegan</option>
                  <option value="other">Other (mention below)</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className={labelClasses}>Message for the Couple</label>
            <textarea
              rows={3}
              placeholder="Share your blessings..."
              className={inputClasses + " resize-none"}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-md bg-primary text-primary-foreground font-display text-lg font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Send RSVP
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
