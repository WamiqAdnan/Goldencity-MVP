import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import CountUp from '../CountUp';
import { featuredProperties } from '../../data/properties';

function FeaturedProperties() {
  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-sapphire-800 dark:text-platinum-100">Featured Investment Opportunities</h2>
        <p className="text-platinum-600 dark:text-platinum-300">Curated properties with verified returns and immediate tokenization</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            className="card group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative h-48 rounded-t-2xl overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 glass-card px-3 py-1 text-primary-600 dark:text-primary-300 font-semibold text-sm">
                {property.status}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-sapphire-800 dark:text-platinum-100">{property.title}</h3>
              <p className="text-platinum-600 dark:text-platinum-300 mb-4">{property.location}</p>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-platinum-500 dark:text-platinum-400">Price</p>
                  <p className="font-semibold text-sapphire-800 dark:text-platinum-100">${property.price.usd.toLocaleString()}</p>
                  <p className="text-sm text-primary-600 dark:text-primary-300">{property.price.eth} ETH</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-platinum-500 dark:text-platinum-400">ROI</p>
                  <p className="font-semibold text-green-600 dark:text-green-400"><CountUp end={parseFloat(property.roi)} decimals={1} suffix="% Annual" /></p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-600 dark:text-platinum-300">Total Investors</span>
                  <span className="font-medium text-sapphire-700 dark:text-platinum-100"><CountUp end={property.metrics.totalInvestors} /></span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-600 dark:text-platinum-300">Funded</span>
                  <span className="font-medium text-sapphire-700 dark:text-platinum-100"><CountUp end={parseInt(property.metrics.funded, 10)} suffix="%" /></span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-600 dark:text-platinum-300">Min Investment</span>
                  <span className="font-medium text-sapphire-700 dark:text-platinum-100">{property.metrics.minInvestment}</span>
                </div>
              </div>

              <Link
                to={`/properties/${property.id}`}
                className="btn w-full flex items-center justify-center"
              >
                Invest Now
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProperties;
