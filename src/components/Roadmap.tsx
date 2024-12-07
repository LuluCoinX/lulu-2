import { motion } from 'framer-motion';

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Launch & Community Building",
    items: [
      "Website Launch",
      "Social Media Presence",
      "Community Growth",
      "Initial Marketing Push"
    ]
  },
  {
    phase: "Phase 2",
    title: "Market Expansion",
    items: [
      "Exchange Listings",
      "Partnership Development",
      "Enhanced Marketing",
      "Community Events"
    ]
  },
  {
    phase: "Phase 3",
    title: "Utility Development",
    items: [
      "NFT Collection",
      "Staking Platform",
      "Mobile App Development",
      "Charity Integration"
    ]
  },
  {
    phase: "Phase 4",
    title: "Global Adoption",
    items: [
      "Major Exchange Listings",
      "Cross-chain Integration",
      "Global Marketing Campaign",
      "Metaverse Integration"
    ]
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Roadmap</h2>
          <p className="text-purple-300 max-w-2xl mx-auto">
            Our journey to revolutionize the meme coin space
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-800/30 p-8 rounded-2xl backdrop-blur-sm relative"
            >
              <div className="absolute -top-4 left-8 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full font-bold">
                {phase.phase}
              </div>
              <h3 className="text-xl font-bold text-white mt-4 mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-purple-200 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}