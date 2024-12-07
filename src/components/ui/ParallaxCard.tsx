import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxCard({ children, className = '' }: ParallaxCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeed={2000}
      gyroscope={true}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 ${className}`}
      >
        {children}
      </motion.div>
    </Tilt>
  );
}