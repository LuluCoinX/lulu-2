import { motion } from 'framer-motion';
import { TrendingUp, Award, Shield, Coins, DogIcon, Rocket, Zap } from 'lucide-react';

const luluNews = [
  {
    icon: <TrendingUp className="w-6 h-6 text-green-400" />,
    title: "LuluCoin Update",
    text: "Staking program launches next week!"
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Community",
    text: "100,000 holders milestone reached"
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Security",
    text: "Successfully audited by CertiK"
  },
  {
    icon: <Coins className="w-6 h-6 text-purple-400" />,
    title: "Trading",
    text: "Now available on major DEXs"
  }
];

const memeNews = [
  {
    icon: <DogIcon className="w-6 h-6 text-amber-400" />,
    title: "DOGE",
    text: "Dogecoin community grows by 25%"
  },
  {
    icon: <Rocket className="w-6 h-6 text-red-400" />,
    title: "SHIB",
    text: "Shiba Inu launches new DeFi platform"
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "PEPE",
    text: "PEPE coin sees 40% price surge"
  },
  {
    icon: <Coins className="w-6 h-6 text-green-400" />,
    title: "FLOKI",
    text: "Floki announces major partnership"
  }
];

function NewsTicker({ news, bgColor }: { news: typeof luluNews, bgColor: string }) {
  return (
    <div className={`w-full overflow-hidden ${bgColor} backdrop-blur-sm rounded-xl py-4`}>
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
            <div className="bg-black/20 p-2 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-white/90">{item.title}</h3>
              <p className="text-white/80">{item.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function CryptoNews() {
  return (
    <div className="space-y-4">
      <NewsTicker 
        news={luluNews} 
        bgColor="bg-gradient-to-r from-purple-900/80 to-indigo-900/80" 
      />
      <NewsTicker 
        news={memeNews} 
        bgColor="bg-gradient-to-r from-pink-900/80 to-rose-900/80" 
      />
    </div>
  );
}