import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/ContactForm";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Database, 
  MessageSquare, 
  Code2, 
  Gamepad2, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Terminal,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "TRAC Data Layer",
      desc: "Robust storage backbone for NFT metadata, asset ownership, and append-only economic ledgers."
    },
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Smart Contracts",
      desc: "Pre-audited contracts for dynamic minting, fixed-price marketplaces, and token staking."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      title: "Intercom P2P Layer",
      desc: "Real-time encrypted chat for players, matchmaking, and pre-trade negotiations."
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-emerald-400" />,
      title: "Cross-game Assets",
      desc: "Interoperability layer allowing assets to traverse between multiple connected game worlds."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
      title: "Secure Wallets",
      desc: "Abstracted wallet modules that handle keys securely without interrupting gameplay."
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-400" />,
      title: "Real-time Sync",
      desc: "On-chain leaderboard state sync and immediate UI updates via WebSocket APIs."
    }
  ];

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Grid & Orbs */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-cyan-400 mb-8 border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SDK v2.0 is now available in Beta
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter"
            >
              The drop-in <br className="hidden md:block" />
              <span className="text-gradient-accent">on-chain</span> <br className="hidden md:block" />
              engine.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              The modular TRAC + Intercom SDK. 
              Deploy NFTs, marketplaces, and secure chat with zero blockchain friction.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/developers">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                  Start Building
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                  Explore Features <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-card/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Infrastructure that <span className="text-cyan-400">just works</span>.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We abstract away the blockchain complexity so you can focus on building incredibly fun games.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / CODE PREVIEW */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Integrates seamlessly <br /> into your engine.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're using Unity, Unreal, or a custom WebGL engine, our TS/C# clients wrap complex contract calls into simple asynchronous functions.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "1. Connect SDK", desc: "Initialize the TRAC client with your API key." },
                  { title: "2. Query Assets", desc: "Fetch player's owned items instantly from the TRAC data layer." },
                  { title: "3. Mint & Trade", desc: "Execute secure transactions and P2P trades with a single method call." }
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <Link href="/developers">
                <Button variant="outline" className="mt-10">Read Documentation</Button>
              </Link>
            </div>
            
            {/* Code Window */}
            <div className="glass-panel rounded-2xl overflow-hidden border-white/20 shadow-2xl">
              <div className="bg-black/40 px-4 py-3 border-b border-white/10 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <Terminal className="w-3 h-3" /> game-manager.ts
                </div>
              </div>
              <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
                <pre>
                  <code className="text-gray-300">
                    <span className="text-purple-400">import</span> {'{ TracClient }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@trac/sdk'</span>;<br /><br />
                    <span className="text-muted-foreground">{"// Initialize the client"}</span><br />
                    <span className="text-purple-400">const</span> trac <span className="text-cyan-400">= new</span> <span className="text-yellow-200">TracClient</span>({'{'}<br />
                    {'  '}apiKey: <span className="text-green-400">process.env.TRAC_KEY</span>,<br />
                    {'  '}network: <span className="text-green-400">'mainnet'</span><br />
                    {'}'});<br /><br />
                    <span className="text-muted-foreground">{"// Grant a legendary asset after boss kill"}</span><br />
                    <span className="text-purple-400">async function</span> <span className="text-blue-300">onBossDefeated</span>(playerAddress) {'{'}<br />
                    {'  '}<span className="text-purple-400">try</span> {'{'}<br />
                    {'    '}<span className="text-purple-400">const</span> tx <span className="text-cyan-400">= await</span> trac.nfts.<span className="text-blue-300">mint</span>({'{'}<br />
                    {'      '}to: playerAddress,<br />
                    {'      '}assetId: <span className="text-green-400">'legendary_sword_01'</span>,<br />
                    {'      '}metadata: {'{'} rarity: <span className="text-green-400">'legendary'</span> {'}'}<br />
                    {'    }'});<br /><br />
                    {'    '}<span className="text-yellow-200">console</span>.<span className="text-blue-300">log</span>(<span className="text-green-400">`Minted! Tx: </span><span className="text-cyan-400">{'${'}</span>tx.hash<span className="text-cyan-400">{'}'}</span><span className="text-green-400">`</span>);<br />
                    {'  }'} <span className="text-purple-400">catch</span> (err) {'{'}<br />
                    {'    '}<span className="text-yellow-200">console</span>.<span className="text-blue-300">error</span>(err);<br />
                    {'  }'}<br />
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 relative overflow-hidden bg-card/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Build the future of gaming.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join top studios already using TRAC to power their in-game economies, assets, and player communications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white/90">Dedicated integration support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white/90">Custom smart contract auditing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white/90">Volume-based enterprise pricing</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
