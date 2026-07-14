import { motion } from 'framer-motion';
import { howItWorks } from '../../data/home';

function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-sapphire-900 via-sapphire-800 to-sapphire-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sapphire-900/50 to-transparent"></div>
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How GoldenCity Works</h2>
          <p className="text-sapphire-200">Understanding our tokenized real estate platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card bg-sapphire-800/30 p-6 backdrop-blur-lg border-sapphire-700/30 group hover:bg-sapphire-700/40 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-sapphire-200 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
