/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Heart, 
  Sparkles, 
  Users, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Mail, 
  ArrowRight,
  Star,
  Quote
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0510] text-[#f5f2ed] font-sans selection:bg-[#ff4e00]/30 selection:text-white overflow-x-hidden">
      {/* Atmospheric Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://theheartofdreaming.com.br/wp-content/uploads/2024/07/purplebg2.jpg")' }}
      >
        <div className="absolute inset-0 bg-[#0a0510]/70 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Header / Profile */}
        <motion.header 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.div 
            variants={fadeIn}
            className="inline-block p-1 rounded-full bg-gradient-to-tr from-[#ff4e00] via-[#ff0080] to-[#7928ca] mb-6 shadow-2xl shadow-[#ff4e00]/20"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden border-4 border-[#0a0510]">
              <img 
                src="https://theheartofdreaming.com.br/wp-content/uploads/2025/02/Nunca-ha-tempo-suficiente-1-1024x1024.webp" 
                alt="Sandra Piedade" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-4"
          >
            The Heart <span className="italic text-[#ff4e00]">of</span> Dreaming
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-[#f5f2ed]/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Sandra Piedade — Inspiradora, educadora apaixonada e coach transformacional.
          </motion.p>
        </motion.header>

        {/* Main Content */}
        <motion.main 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-24"
        >
          {/* Mission Section */}
          <motion.section variants={fadeIn} className="text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#ff4e00]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-6">Crie uma Mentalidade Abundante</h2>
            <p className="text-lg text-[#f5f2ed]/80 leading-relaxed max-w-2xl mx-auto">
              Você é a chave para a transformação que busca. Sandra ajuda você a dissolver crenças limitantes e viver da melhor maneira possível, transformando seus sonhos na realidade da sua vida.
            </p>
          </motion.section>

          {/* Services Grid */}
          <motion.section variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-[#ff4e00]/20 flex items-center justify-center mb-6 text-[#ff4e00]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Treinamento em Grupo</h3>
              <p className="text-[#f5f2ed]/60 mb-6">Inspiração e insight coletivo para evoluir em comunidade.</p>
              <div className="flex items-center text-[#ff4e00] font-medium group-hover:translate-x-2 transition-transform">
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-[#7928ca]/20 flex items-center justify-center mb-6 text-[#7928ca]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Treinamento Privado 1:1</h3>
              <p className="text-[#f5f2ed]/60 mb-6">Uma jornada personalizada para o seu despertar interior.</p>
              <div className="flex items-center text-[#7928ca] font-medium group-hover:translate-x-2 transition-transform">
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </motion.section>


          {/* Links / Social */}
          <motion.section variants={fadeIn} className="flex flex-col items-center space-y-8">
            <div className="flex flex-col w-full max-w-sm gap-4">
              <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white text-[#0a0510] font-semibold hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-white/5">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all active:scale-95">
                <Instagram className="w-5 h-5" /> Instagram
              </a>
              <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all active:scale-95">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all active:scale-95">
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </motion.section>
        </motion.main>
      </div>
    </div>
  );
}
