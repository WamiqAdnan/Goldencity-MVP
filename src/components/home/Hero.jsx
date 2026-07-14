import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 glass-hero" />
      </div>

      <div className="relative container text-center text-white space-y-8">
        <motion.div
          className="glass-section p-8 md:p-12 max-w-4xl mx-auto bg-sapphire-900/50 backdrop-blur-lg border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Invest and Trade in Real Estate with Cryptocurrency
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-white/90 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Own fractional shares of premium properties through NFTs. Start investing with as little as $10.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
