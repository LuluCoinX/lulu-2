import { motion } from 'framer-motion';
import { TrendingUp, Award, Shield, Coins } from 'lucide-react';

const news = [
  {
    icon: <TrendingUp className="w-6 h-6 text-green-400" />,
    title: "Market Update",
    text: "Bitcoin reaches new ATH!"
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "LuluCoin News",
    text: "Join our staking program"
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Security",
    text: "Audited by CertiK"
  },
  {
    icon: <Coins className="w-6 h-6 text-purple-400" />,
    title: "Trading",
    text: "Now listed on major DEXs"
  }
];

export function CryptoTicker() {
  return (
    <div className="w-full overflow-hidden bg-purple-900/50 backdrop-blur-sm rounded-xl py-4">
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="flex gap-16"
      >
        {[...news, ...news].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <div className="bg-purple-800/50 p-2 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-yellow-400">{item.title}</h3>
              <p className="text-white">{item.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}