import { motion } from 'framer-motion';
import { investmentSteps } from '../../data/home';

function InvestmentSteps() {
  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-sapphire-800 dark:text-platinum-100">Start Investing in Minutes</h2>
        <p className="text-platinum-600 dark:text-platinum-300">Your journey to crypto-powered real estate investment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {investmentSteps.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="glass-card p-6 text-center group hover:shadow-glass-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="text-2xl text-primary-600" />
              </div>
              <div className="text-primary-600 dark:text-primary-300 text-2xl font-bold mb-4">Step {index + 1}</div>
              <h3 className="text-xl font-semibold mb-2 text-sapphire-800 dark:text-platinum-100">{step.title}</h3>
              <p className="text-platinum-600 dark:text-platinum-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default InvestmentSteps;
