import { motion } from 'framer-motion';
import { Twitter, Globe, MessageCircle, Github, MessagesSquare, Mail, MapPin } from 'lucide-react';
import { SocialLink } from './ui/SocialLink';

const socialLinks = [
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/lulucoin",
    color: "hover:text-blue-400"
  },
  {
    icon: Globe,
    name: "Website",
    href: "https://lulucoin.com",
    color: "hover:text-green-400"
  },
  {
    icon: MessageCircle,
    name: "Telegram",
    href: "https://t.me/lulucoin",
    color: "hover:text-sky-400"
  },
  {
    icon: MessagesSquare,
    name: "Discord",
    href: "https://discord.gg/lulucoin",
    color: "hover:text-indigo-400"
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/lulucoin",
    color: "hover:text-gray-400"
  },
  {
    icon: Mail,
    name: "Email",
    href: "mailto:contact@lulucoin.com",
    color: "hover:text-red-400"
  }
];

const offices = [
  "Singapore",
  "London",
  "New York",
  "Ontario"
];

export function Community() {
  return (
    <section id="community" className="py-20 bg-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-purple-300 max-w-2xl mx-auto mb-12">
            Be part of the fastest-growing meme coin community. Connect with us on our social platforms!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {socialLinks.map((social, index) => (
              <SocialLink key={index} {...social} />
            ))}
          </div>

          <div className="bg-purple-800/30 rounded-3xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Global Offices</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {offices.map((office, index) => (
                <div key={index} className="bg-purple-700/30 rounded-xl p-4">
                  <p className="text-white">{office}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}