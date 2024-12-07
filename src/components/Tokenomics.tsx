import { motion } from 'framer-motion';
import { PieChart, Wallet, Rocket, Heart } from 'lucide-react';

const tokenomicsData = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "50% Liquidity Pool",
    description: "Locked forever to ensure stable trading"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "30% Community",
    description: "Reserved for community rewards and growth"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "10% Charity",
    description: "Supporting animal shelters worldwide"
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "10% Development",
    description: "Ensuring continuous platform improvement"
  }
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-purple-300 max-w-2xl mx-auto">
            Transparent and fair distribution ensuring long-term sustainability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-900/50 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-yellow-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-purple-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}