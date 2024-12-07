import { motion } from 'framer-motion';
import { ParallaxCard } from './ui/ParallaxCard';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: "$0.000001", label: "Current Price" },
  { value: "1T", label: "Total Supply" },
  { value: "100K+", label: "Holders" },
  { value: "$10M", label: "Market Cap" }
];

export function TokenStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ParallaxCard>
                  <div className="text-center">
                    <motion.h3
                      className="text-5xl font-bold mb-2 gradient-text"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2, type: "spring" }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-purple-300 text-lg">{stat.label}</p>
                  </div>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}