import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Unlocking <span className="text-gradient">Real Ownership</span> in Gaming
            </h1>
            <p className="text-xl text-muted-foreground">
              We believe players should own the assets they earn. But building the infrastructure to support that is notoriously difficult. That's why we built TRAC.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
              <p>
                Game developers want to build fun, immersive experiences. They don't want to spend months auditing solidity contracts, setting up IPFS clusters, or building complex websocket servers for peer-to-peer trading.
              </p>
              <p>
                TRAC was born out of frustration with existing Web3 gaming tools. Most SDKs force you into specific walled gardens or require players to understand crypto terminology before they can even play.
              </p>
              <p>
                We provide a <strong className="text-white">plug-and-play middleware</strong> that handles everything under the hood. From the TRAC Data Layer that logs asset metadata, to the Intercom protocol that manages real-time player matchmaking and negotiations.
              </p>
            </div>
            
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden glass-panel p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 mix-blend-overlay z-10" />
              {/* about us abstract visual */}
              <img 
                src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&q=80" 
                alt="Gaming Controller Abstract" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Join the Network */}
        <section className="border-y border-white/10 bg-card/30 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Build with us</h2>
            <p className="text-lg text-muted-foreground mb-10">
              TRAC is currently in closed beta. We are actively onboarding studios building MMOs, ARPGs, and competitive strategy games.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/">
                <Button size="lg" variant="glow" className="w-full sm:w-auto px-10">
                  Request Early Access
                </Button>
              </Link>
              <a href="mailto:hello@trac.network">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-10">
                  Contact Sales
                </Button>
              </a>
            </div>
          </div>
        </section>
        
      </div>
    </PageTransition>
  );
}
