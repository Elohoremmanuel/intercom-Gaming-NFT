import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Terminal, Download, FileJson, Key, Zap } from "lucide-react";

export default function Developers() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Developers</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Faster with <br/> the <span className="text-gradient">TRAC SDK</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything you need to integrate blockchain assets, real-time chat, and smart contracts directly into your game client.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Nav (Mock) */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-32 glass-panel rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Getting Started</h3>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="text-cyan-400 font-medium">Installation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Authentication</li>
                <li className="hover:text-white cursor-pointer transition-colors">Client Setup</li>
              </ul>

              <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Core Modules</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="hover:text-white cursor-pointer transition-colors">NFTs & Minting</li>
                <li className="hover:text-white cursor-pointer transition-colors">Player Wallets</li>
                <li className="hover:text-white cursor-pointer transition-colors">Intercom P2P Chat</li>
                <li className="hover:text-white cursor-pointer transition-colors">Marketplace</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-3 space-y-12">
            
            {/* Quick Start Card */}
            <div className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Download className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Installation</h2>
                  <p className="text-muted-foreground">Install the core TS/JS client library.</p>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-4 font-mono text-sm border border-white/10 flex justify-between items-center group">
                <span className="text-gray-300"><span className="text-purple-400">npm</span> install @trac/sdk @trac/intercom</span>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Copy</Button>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button variant="outline" className="gap-2"><FileJson className="w-4 h-4"/> Unity Package</Button>
                <Button variant="outline" className="gap-2"><FileJson className="w-4 h-4"/> Unreal Plugin</Button>
              </div>
            </div>

            {/* Auth Snippet */}
            <div className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Key className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Authentication</h2>
                  <p className="text-muted-foreground">Initialize the client with your project API key.</p>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 font-mono text-sm border border-white/10 overflow-x-auto">
                <pre>
                  <code>
<span className="text-purple-400">import</span> {'{ TracClient }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@trac/sdk'</span>;

<span className="text-purple-400">const</span> client <span className="text-cyan-400">= new</span> <span className="text-yellow-200">TracClient</span>({'{'}
  apiKey: <span className="text-green-400">'trac_live_8f92j...'</span>,
  network: <span className="text-green-400">'mainnet'</span>
{'}'});

<span className="text-muted-foreground">// Verify connection</span>
<span className="text-purple-400">await</span> client.<span className="text-blue-300">ping</span>();
                  </code>
                </pre>
              </div>
            </div>

            {/* Intercom Snippet */}
            <div className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Intercom P2P Trade</h2>
                  <p className="text-muted-foreground">Setup an intent-to-trade between two players.</p>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 font-mono text-sm border border-white/10 overflow-x-auto">
                <pre>
                  <code>
<span className="text-purple-400">const</span> channel <span className="text-cyan-400">= await</span> client.intercom.<span className="text-blue-300">createTradeChannel</span>({'{'}
  playerA: <span className="text-green-400">'0xPlayerA...'</span>,
  playerB: <span className="text-green-400">'0xPlayerB...'</span>
{'}'});

<span className="text-muted-foreground">// Propose an item swap</span>
<span className="text-purple-400">await</span> channel.<span className="text-blue-300">proposeOffer</span>({'{'}
  offering: [{'{'} assetId: <span className="text-green-400">'magic_shield'</span> {'}'}],
  requesting: [{'{'} assetId: <span className="text-green-400">'gold_coins'</span>, amount: <span className="text-orange-400">500</span> {'}'}]
{'}'});

<span className="text-muted-foreground">// Listen for acceptance</span>
channel.<span className="text-blue-300">on</span>(<span className="text-green-400">'accepted'</span>, <span className="text-purple-400">async</span> (signature) ={'>'} {'{'}
  <span className="text-muted-foreground">// Submit to smart contract to finalize</span>
  <span className="text-purple-400">await</span> client.market.<span className="text-blue-300">settleTrade</span>(signature);
{'}'});
                  </code>
                </pre>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
