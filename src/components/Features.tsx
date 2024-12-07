import { motion } from 'framer-motion';
import { Rocket, Shield, Users, Coins } from 'lucide-react';
import { ParallaxCard } from './ui/ParallaxCard';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "To The Moon",
    description: "Join us on our journey to astronomical heights with our community-driven approach."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Safe",
    description: "Built on advanced blockchain technology ensuring your investments are protected."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Growing Community",
    description: "Join thousands of LuluCoin enthusiasts in our vibrant ecosystem."
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Tokenomics",
    description: "Transparent and fair distribution with automatic liquidity generation."
  }
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose LuluCoin?
          </motion.h2>
          <motion.p 
            className="text-purple-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            More than just a meme coin, LuluCoin is building the future of decentralized fun.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <ParallaxCard key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-yellow-400 mb-4 mx-auto"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-300">{feature.description}</p>
              </motion.div>
            </ParallaxCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}