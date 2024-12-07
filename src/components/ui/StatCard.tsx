import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div 
      className="glass-card p-6 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-5xl font-bold mb-2 gradient-text">{value}</h3>
      <p className="text-purple-300 text-lg">{label}</p>
    </motion.div>
  );
}
