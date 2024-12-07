import { motion } from 'framer-motion';
import { DogIcon, Heart, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About LuluCoin</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <DogIcon className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Community First</h3>
              <p className="text-purple-200">
                Born from the love of dogs and crypto, LuluCoin brings together meme culture and serious technology.
              </p>
            </div>
            <div className="space-y-4">
              <Heart className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Charitable Mission</h3>
              <p className="text-purple-200">
                1% of all transactions go to animal shelters worldwide, making a real difference.
              </p>
            </div>
            <div className="space-y-4">
              <Globe className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Global Community</h3>
              <p className="text-purple-200">
                Join thousands of holders worldwide in our mission to make crypto fun and meaningful.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}