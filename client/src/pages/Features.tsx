import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Database, FileCode2, MessageSquare, Shield, Layers, Users } from "lucide-react";

export default function Features() {
  const deepDives = [
    {
      id: "trac-data",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "TRAC Data Layer",
      subtitle: "The structured storage backbone",
      description: "TRAC acts as the ultimate source of truth. We abstract standard ERC-721 and SPL equivalents into a highly performant, queryable data structure. Store metadata, track asset ownership states, map rarity tiers, and log an append-only economic ledger of all token emissions.",
      points: ["Dynamic metadata storage", "Persistent transaction logs", "Governance and DAO proposals", "Fast read-replicas for game clients"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec674?w=800&q=80" // abstract digital nodes
    },
    {
      id: "smart-contracts",
      icon: <FileCode2 className="w-8 h-8 text-cyan-400" />,
      title: "Smart Contract Layer",
      subtitle: "Pre-audited financial primitives",
      description: "Don't write solidity from scratch. Use our pre-deployed factories to spin up in-game utility tokens, marketplace escrow systems, and staking mechanics. Setup fixed prices, dutch auctions, and enforce royalties universally.",
      points: ["NFT Minting Engine", "Tournament reward escrows", "Upgrade & crafting state transitions", "Royalty enforcement"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80" // abstract glowing cubes
    },
    {
      id: "intercom-p2p",
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      title: "Intercom P2P Layer",
      subtitle: "Real-time player communication",
      description: "Built for gamers. A secure WebSocket-based communication layer that lets players discover peers, negotiate trades, and coordinate guilds before ever touching the blockchain. On-chain settlement only happens when both parties agree.",
      points: ["Real-time encrypted chat", "Peer discovery & matchmaking", "Asset offer signaling", "Secure guild channels"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" // cyber network lines
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Platform <span className="text-gradient">Features</span></h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive suite of tools designed to handle the heavy lifting of Web3 integration, letting you focus on game design.
          </p>
        </div>

        <div className="space-y-32">
          {deepDives.map((feature, i) => (
            <div key={feature.id} className={`flex flex-col gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                  {feature.icon}
                  <span className="font-semibold text-white/90">{feature.subtitle}</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">{feature.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <span className="text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden glass-panel aspect-video border-white/10 p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 mix-blend-overlay z-10" />
                  {/* features abstract visual representation */}
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 rounded-3xl glass-panel p-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl z-0 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to see it in action?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dive into our developer SDK or get in touch to discuss your specific game's architecture.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/developers">
                <Button size="lg" variant="glow">View SDK Docs</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
