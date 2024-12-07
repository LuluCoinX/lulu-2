import { motion } from 'framer-motion';
import { TrendingUp, Award, Shield, Coins, DogIcon, Rocket, Zap, Gem, Bitcoin, Workflow } from 'lucide-react';

const cryptoNews = [
  {
    icon: <Bitcoin className="w-6 h-6" />,
    title: "BTC",
    text: "Bitcoin reaches $75k milestone",
    color: "text-orange-400"
  },
  {
    icon: <DogIcon className="w-6 h-6" />,
    title: "DOGE",
    text: "SpaceX accepts Dogecoin payments",
    color: "text-yellow-400"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "SHIB",
    text: "Shibarium L2 solution live",
    color: "text-red-400"
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "PEPE",
    text: "PEPE launches NFT marketplace",
    color: "text-green-400"
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "FLOKI",
    text: "New staking protocol released",
    color: "text-blue-400"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "LULU",
    text: "LuluCoin reaches 100k holders",
    color: "text-purple-400"
  }
];

const marketUpdates = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Market Cap",
    text: "Meme coins exceed $50B",
    color: "text-emerald-400"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "DeFi",
    text: "New yield farming records",
    color: "text-cyan-400"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Trading",
    text: "24h volume hits $10B",
    color: "text-amber-400"
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Exchanges",
    text: "Top 10 DEX rankings update",
    color: "text-indigo-400"
  }
];

function NewsTicker({ items, duration = 30, delay = 0 }: { items: typeof cryptoNews, duration?: number, delay?: number }) {
  return (
    <div className="relative overflow-hidden py-6">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
        className="flex gap-12 absolute whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl backdrop-blur-sm"
          >
            <div className={`${item.color}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-white/90">{item.title}</h3>
              <p className="text-white/70">{item.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function CryptoNewsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-950 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
            Crypto Market Updates
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Stay informed with the latest updates from the cryptocurrency market
          </p>
        </motion.div>

        <div className="space-y-1 bg-gradient-to-r from-slate-900/50 to-cyan-900/50 rounded-2xl p-1">
          <NewsTicker items={cryptoNews} duration={40} />
          <NewsTicker items={marketUpdates} duration={35} delay={0.5} />
        </div>
      </div>
    </section>
  );
}