import { MapPin, Phone, Instagram, ArrowRight, Truck, ShieldCheck, CheckCircle2, Menu, X, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function DicasConstrucao() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src="/logo.png" alt="MG Areias e Britas" className="h-16 w-auto mix-blend-multiply" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Início</Link>
              <Link to="/#sobre" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Sobre Nós</Link>
              <Link to="/#produtos" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Produtos</Link>
              <Link to="/duvidas-frequentes" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">FAQ</Link>
              <Link to="/calculadora-de-obra" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Calculadora</Link>
              
              <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-md font-semibold transition-colors flex items-center gap-2 shadow-sm">
                <Phone className="w-4 h-4" />
                Faça um Orçamento
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-neutral-600 hover:text-neutral-900 focus:outline-none p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
              <Link to="/" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Início</Link>
              <Link to="/#sobre" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Sobre Nós</Link>
              <Link to="/#produtos" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Produtos</Link>
              <Link to="/duvidas-frequentes" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">FAQ</Link>
              <Link to="/calculadora-de-obra" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Calculadora de Obra</Link>
              <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-primary-500 text-white px-4 py-3 rounded-md font-bold mx-2">
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link to="/" className="hover:text-primary-600 flex items-center gap-1">
              <HomeIcon className="w-4 h-4" />
              Início
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-neutral-900 font-medium">Dicas de Construção</span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <section className="py-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/hero-bg.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={FADE_UP}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6"
          >
            Dicas de Construção: O Guia Completo para sua Obra
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={FADE_UP} transition={{ delay: 0.1 }}
            className="text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto"
          >
            Saiba onde comprar areia em Caldas Novas, a importância da areia limpa e como garantimos agilidade para construtoras e obras de todos os tamanhos.
          </motion.p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-neutral max-w-none">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={STAGGER}>
              
              <motion.h2 variants={FADE_UP} className="text-3xl font-display font-bold text-neutral-900 mb-6 mt-12">
                Onde comprar Areia em Caldas Novas?
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-neutral-600 leading-relaxed mb-6">
                Encontrar o fornecedor certo de areia e brita em Caldas Novas é essencial para evitar atrasos na sua obra. A <strong>MG Areias e Britas</strong> destaca-se no mercado por ser uma empresa local que compreende o ritmo da construção civil na região. Nós fornecemos todos os tipos de areia (fina, média e grossa) e britas, sempre com o melhor custo-benefício. Se você está construindo, reformando ou gerenciando uma grande obra na cidade das águas quentes, conte com a nossa logística eficiente.
              </motion.p>

              <motion.h2 variants={FADE_UP} className="text-3xl font-display font-bold text-neutral-900 mb-6 mt-12">
                A Importância de Comprar Areia Limpa
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-neutral-600 leading-relaxed mb-6">
                É fundamental saber que a qualidade da areia impacta diretamente na segurança e durabilidade da construção. 
              </motion.p>
              <ul className="space-y-4 mb-8">
                <motion.li variants={FADE_UP} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-700"><strong>Evita rachaduras e fissuras:</strong> Areia suja ou com excesso de matéria orgânica enfraquece a argamassa e o concreto.</span>
                </motion.li>
                <motion.li variants={FADE_UP} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-700"><strong>Economia de cimento:</strong> Areias de boa procedência exigem menos cimento para atingir a resistência desejada, reduzindo custos.</span>
                </motion.li>
                <motion.li variants={FADE_UP} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-700"><strong>Acabamento superior:</strong> Especialmente a areia fina, quando limpa, proporciona um reboco liso e sem imperfeições.</span>
                </motion.li>
              </ul>
              
              <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 my-12">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Truck className="w-8 h-8 text-primary-500" />
                  Soluções para o mercado B2B
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Trabalhamos lado a lado com <strong>construtoras, engenheiros, arquitetos e concreteiras</strong>. Sabemos que no mercado B2B, atrasos significam prejuízos. Por isso, a MG Areias e Britas oferece:
                </p>
                <ul className="list-disc pl-5 text-neutral-600 space-y-2 mb-6">
                  <li>Fornecimento em grande escala.</li>
                  <li>Condições especiais e faturamento para empresas.</li>
                  <li>Padronização de granulometria, garantindo o mesmo traço de concreto durante toda a obra.</li>
                </ul>
                <a href="https://wa.me/5564992465992?text=Olá, sou de uma construtora/empresa e gostaria de informações sobre fornecimento B2B." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Falar com nosso setor corporativo <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <motion.h2 variants={FADE_UP} className="text-3xl font-display font-bold text-neutral-900 mb-6 mt-12">
                Entrega Rápida com Frota Própria
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-neutral-600 leading-relaxed mb-6">
                Ter <strong>frota própria</strong> é o nosso maior diferencial. Temos autonomia total para realizar as entregas. Isso nos permite ter agilidade, cumprir os prazos estabelecidos e realizar manobras seguras dentro do canteiro de obras, facilitando o descarregamento do material.
              </motion.p>

              <motion.h2 variants={FADE_UP} className="text-3xl font-display font-bold text-neutral-900 mb-6 mt-12">
                Confiança e Transparência
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-neutral-600 leading-relaxed mb-6">
                Na era digital, a credibilidade é fundamental. A <strong>MG Areias e Britas</strong> é uma empresa real, com sede e operações claras. Mantemos nossos canais de comunicação sempre abertos.
              </motion.p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-4 bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Empresa Certificada</h4>
                    <p className="text-sm text-neutral-500">CNPJ regular e emissão de notas</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Redes Sociais Ativas</h4>
                    <a href="https://www.instagram.com/mgareiascn" target="_blank" rel="noreferrer" className="text-sm text-primary-600 hover:underline">@mgareiascn</a>
                  </div>
                </div>
              </div>

              <motion.div variants={FADE_UP} className="bg-primary-500 text-white p-8 sm:p-12 rounded-3xl text-center shadow-xl shadow-primary-500/20">
                <h3 className="text-3xl font-display font-bold mb-4">Pronto para começar sua obra?</h3>
                <p className="text-lg text-primary-100 mb-8 max-w-xl mx-auto">
                  Temos o material certo, pelo preço justo, com a entrega mais rápida de Caldas Novas.
                </p>
                <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-neutral-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg">
                  <Phone className="w-5 h-5" />
                  Solicitar Orçamento Agora
                </a>
              </motion.div>

            </motion.div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16 border-t border-neutral-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="flex items-center mb-6 bg-white p-2 rounded-lg inline-block">
                <img src="/logo.png" alt="MG Areias e Britas" className="h-16 w-auto mix-blend-multiply" />
              </div>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                Fornecendo a base sólida para grandes e pequenas construções em Caldas Novas, com agilidade e compromisso.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/mgareiascn" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-display font-bold text-white text-lg mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-neutral-400 hover:text-primary-400 transition-colors">Início</Link></li>
                <li><Link to="/#sobre" className="text-neutral-400 hover:text-primary-400 transition-colors">Sobre Nós</Link></li>
                <li><Link to="/#produtos" className="text-neutral-400 hover:text-primary-400 transition-colors">Produtos</Link></li>
                <li><Link to="/duvidas-frequentes" className="text-neutral-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
                <li><Link to="/calculadora-de-obra" className="text-neutral-400 hover:text-primary-400 transition-colors">Calculadora</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-display font-bold text-white text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <div>
                    <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="block text-neutral-300 hover:text-white transition-colors">(64) 99246-5992</a>
                    <span className="text-xs text-neutral-500">Atendimento via WhatsApp</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 leading-relaxed text-sm">
                    Av. Guarapari, QUADRA07 LOTE 13 - Parque Real,<br/>
                    Caldas Novas - GO, 75689-003, Brasil<br/>
                    <span className="text-neutral-500">Atendemos toda a região.</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-display font-bold text-white text-lg mb-6">Localização</h4>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-800">
                <iframe 
                  src="https://maps.google.com/maps?q=MG%20Areias%20e%20Britas%20Caldas%20Novas&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização MG Areias e Britas"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} MG Areias e Britas. Todos os direitos reservados.
            </p>
            <p className="text-sm text-neutral-500 text-center md:text-right">
              CNPJ: 47.418.036/0001-53
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5564992465992" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-7 h-7 relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
