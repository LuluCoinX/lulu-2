import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  name: string;
  href: string;
  color: string;
}

export function SocialLink({ icon: Icon, name, href, color }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center space-y-2 text-white ${color} transition-colors`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-purple-800/50 p-6 rounded-2xl">
        <Icon className="w-8 h-8" />
      </div>
      <span className="font-medium">{name}</span>
    </motion.a>
  );
}