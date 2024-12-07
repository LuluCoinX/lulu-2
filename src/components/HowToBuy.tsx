import { motion } from 'framer-motion';
import { Wallet, ArrowRight, Coins, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Wallet />,
    title: "Create Wallet",
    description: "Download MetaMask or Trust Wallet and create your wallet"
  },
  {
    icon: <Coins />,
    title: "Get BNB",
    description: "Purchase BNB through your preferred exchange"
  },
  {
    icon: <ArrowRight />,
    title: "Connect to DEX",
    description: "Connect your wallet to PancakeSwap"
  },
  {
    icon: <Rocket />,
    title: "Swap for LuluCoin",
    description: "Use our contract address to swap BNB for LuluCoin"
  }
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 bg-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">How to Buy</h2>
          <p className="text-purple-300 max-w-2xl mx-auto">
            Follow these simple steps to join the LuluCoin community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-900/50 p-8 rounded-2xl backdrop-blur-sm text-center"
            >
              <div className="text-yellow-400 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-800/50 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-purple-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}