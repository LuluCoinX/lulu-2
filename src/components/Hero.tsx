import { motion } from 'framer-motion';
import { DogIcon, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  const scrollToCommunity = () => {
    const communitySection = document.getElementById('community');
    if (communitySection) {
      communitySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/50 via-purple-950 to-black" />
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <DogIcon className="w-20 h-20 text-primary animate-float" />
          </motion.div>

          <h1 className="text-7xl font-bold mb-6 gradient-text">
            Welcome to LuluCoin
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <p className="text-2xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              The most adorable meme coin in the crypto universe! 
              <Sparkles className="inline-block ml-2 w-6 h-6 text-yellow-400" />
            </p>
          </motion.div>
          
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button>Buy LuluCoin</Button>
            <Button variant="secondary" onClick={scrollToCommunity}>Join Community</Button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-950 to-transparent" />
      </div>
    </section>
  );
}