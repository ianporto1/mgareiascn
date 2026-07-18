import { MapPin, Phone, Instagram, ArrowRight, Truck, ShieldCheck, Clock, CheckCircle2, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true, dragFree: true },
    [WheelGesturesPlugin()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="MG Areias e Britas" className="h-16 w-auto mix-blend-multiply" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Início</a>
              <a href="#sobre" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Sobre Nós</a>
              <a href="#produtos" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Produtos</a>
              <Link to="/duvidas-frequentes" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">FAQ</Link>
              <Link to="/blog" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Blog</Link>
              <Link to="/calculadora-de-obra" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Calculadora</Link>
              <a href="#contato" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Contato</a>
              
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
              <a href="#home" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Início</a>
              <a href="#sobre" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Sobre Nós</a>
              <a href="#produtos" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Produtos</a>
              <Link to="/duvidas-frequentes" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">FAQ</Link>
              <Link to="/blog" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Blog</Link>
              <Link to="/calculadora-de-obra" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Calculadora de Obra</Link>
              <a href="#contato" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Contato</a>
              <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-primary-500 text-white px-4 py-3 rounded-md font-bold mx-2">
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="Fachada MG Areias e Britas"
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
              A base mais sólida <br/> para a sua <span className="text-primary-500">obra</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-xl leading-relaxed">
              Fornecemos areia e brita de alta qualidade com agilidade na entrega e o melhor custo-benefício em Caldas Novas e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30">
                <Phone className="w-5 h-5" />
                Fazer Pedido
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#produtos" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                Ver Produtos
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={FADE_UP} className="flex items-start gap-4 p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-lg text-primary-600 shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">Frota Própria</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">Garantimos rapidez e segurança na entrega do seu material, direto na sua obra.</p>
              </div>
            </motion.div>
            
            <motion.div variants={FADE_UP} className="flex items-start gap-4 p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-lg text-primary-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">Qualidade Superior</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">Materiais selecionados e com granulometria ideal para garantir a resistência da sua construção.</p>
              </div>
            </motion.div>

            <motion.div variants={FADE_UP} className="flex items-start gap-4 p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-lg text-primary-600 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">Agilidade</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">Atendimento rápido e eficiente para que a sua obra continue sempre em andamento.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={FADE_UP}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-100 bg-white">
                <img 
                  src="/sobre-imagem.webp" 
                  alt="MG Areias e Britas" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
            
            <motion.div variants={STAGGER} className="lg:w-1/2">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 text-primary-600 font-bold tracking-wide uppercase text-sm mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded-full" />
                Quem Somos
              </motion.div>
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
                Construindo laços de confiança em cada entrega.
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-neutral-600 leading-relaxed mb-6 text-lg">
                A <strong className="text-neutral-900 font-semibold">MG Areias e Britas</strong> é a sua parceira de confiança no fornecimento de agregados para construção civil em Caldas Novas, GO. Trabalhamos com seriedade para entregar o melhor material para a sua obra, seja ela uma pequena reforma ou um grande empreendimento.
              </motion.p>
              <ul className="space-y-4 mb-8">
                {['Atendimento personalizado', 'Preços competitivos', 'Pontualidade na entrega', 'Materiais de procedência'].map((item, i) => (
                  <motion.li variants={FADE_UP} key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={FADE_UP} className="bg-white p-4 rounded-lg border border-neutral-200 inline-block">
                <p className="text-sm text-neutral-500 font-medium">CNPJ: <span className="text-neutral-900">47.418.036/0001-53</span></p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={FADE_UP}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary-600 font-bold tracking-wide uppercase text-sm mb-4">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full" />
              Nossos Produtos
              <span className="w-8 h-0.5 bg-primary-500 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Materiais essenciais para a sua construção
            </h2>
            <p className="text-neutral-600 text-lg">
              Oferecemos uma linha completa de areias e britas para atender a todas as fases da sua obra.
            </p>
          </motion.div>

          <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-16">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-6 pb-4">
                {/* Produto 1 */}
                <div className="pl-6 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.33%] min-w-0">
                  <div className="group rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative shrink-0">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Sand_from_Gobi_Desert.jpg" 
                        alt="Areia Fina" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <Link to="/areia-fina-caldas-novas" className="group/link">
                        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2 group-hover/link:text-primary-600 transition-colors">Areia Fina</h3>
                      </Link>
                      <p className="text-neutral-600 text-sm mb-4 leading-relaxed flex-1">Ideal para acabamentos finos, rebocos de precisão e assentamento de revestimentos que exigem alta qualidade no acabamento.</p>
                      <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                        <Link to="/areia-fina-caldas-novas" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors">
                          Saiba mais
                        </Link>
                        <a href="https://wa.me/5564992465992?text=Olá, gostaria de um orçamento para Areia Fina." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                          Solicitar <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produto 2 */}
                <div className="pl-6 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.33%] min-w-0">
                  <div className="group rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative shrink-0">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Sand.jpg" 
                        alt="Areia Média" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <Link to="/areia-media-caldas-novas" className="group/link">
                        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2 group-hover/link:text-primary-600 transition-colors">Areia Média</h3>
                      </Link>
                      <p className="text-neutral-600 text-sm mb-4 leading-relaxed flex-1">O tipo mais versátil. Muito utilizada em argamassas de assentamento de tijolos, blocos e para rebocos em geral.</p>
                      <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                        <Link to="/areia-media-caldas-novas" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors">
                          Saiba mais
                        </Link>
                        <a href="https://wa.me/5564992465992?text=Olá, gostaria de um orçamento para Areia Média." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                          Solicitar <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produto 3 */}
                <div className="pl-6 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.33%] min-w-0">
                  <div className="group rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative shrink-0">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/81/HeavyMineralsBeachSand.jpg" 
                        alt="Areia Grossa" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <Link to="/areia-grossa-caldas-novas" className="group/link">
                        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2 group-hover/link:text-primary-600 transition-colors">Areia Grossa</h3>
                      </Link>
                      <p className="text-neutral-600 text-sm mb-4 leading-relaxed flex-1">Perfeita para preparo de concreto, contrapisos e fundações, garantindo a resistência estrutural necessária.</p>
                      <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                        <Link to="/areia-grossa-caldas-novas" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors">
                          Saiba mais
                        </Link>
                        <a href="https://wa.me/5564992465992?text=Olá, gostaria de um orçamento para Areia Grossa." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                          Solicitar <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produto 4 */}
                <div className="pl-6 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.33%] min-w-0">
                  <div className="group rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative shrink-0">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/09/20mm-aggregate.jpg" 
                        alt="Britas" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <Link to="/brita-caldas-novas" className="group/link">
                        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2 group-hover/link:text-primary-600 transition-colors">Britas (0 e 1)</h3>
                      </Link>
                      <p className="text-neutral-600 text-sm mb-4 leading-relaxed flex-1">Essenciais para a fabricação de concreto, lajes, colunas e outras estruturas que demandam resistência e durabilidade.</p>
                      <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                        <Link to="/brita-caldas-novas" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors">
                          Saiba mais
                        </Link>
                        <a href="https://wa.me/5564992465992?text=Olá, gostaria de um orçamento para Britas (0 e 1)." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                          Solicitar <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produto 5 */}
                <div className="pl-6 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.33%] min-w-0">
                  <div className="group rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative shrink-0">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/72/DirkvdM_rocks.jpg" 
                        alt="Pedra Marroada" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <Link to="/pedra-marroada-caldas-novas" className="group/link">
                        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2 group-hover/link:text-primary-600 transition-colors">Pedra Marroada</h3>
                      </Link>
                      <p className="text-neutral-600 text-sm mb-4 leading-relaxed flex-1">Pedra bruta em tamanhos maiores, ideal para construção de muros de arrimo, contenções e fundações pesadas.</p>
                      <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                        <Link to="/pedra-marroada-caldas-novas" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors">
                          Saiba mais
                        </Link>
                        <a href="https://wa.me/5564992465992?text=Olá, gostaria de um orçamento para Pedra Marroada." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                          Solicitar <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={scrollPrev} 
              className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:scale-110 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={scrollNext} 
              className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:scale-110 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={FADE_UP}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Sua obra sempre em movimento.
          </h2>
          <p className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Faça um orçamento sem compromisso agora mesmo e garanta os melhores materiais com a entrega mais rápida.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-primary-500/20">
            <Phone className="w-5 h-5" />
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </section>

      {/* Footer / Contato */}
      <footer id="contato" className="bg-neutral-900 text-neutral-300 py-16 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            {/* Brand */}
            <div className="lg:col-span-3">
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

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-bold text-white text-lg mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-neutral-400 hover:text-primary-400 transition-colors">Início</a></li>
                <li><a href="#sobre" className="text-neutral-400 hover:text-primary-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#produtos" className="text-neutral-400 hover:text-primary-400 transition-colors">Produtos</a></li>
                <li><Link to="/duvidas-frequentes" className="text-neutral-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
                <li><Link to="/blog" className="text-neutral-400 hover:text-primary-400 transition-colors">Blog</Link></li>
                <li><Link to="/calculadora-de-obra" className="text-neutral-400 hover:text-primary-400 transition-colors">Calculadora</Link></li>
              </ul>
            </div>

            {/* Materiais SEO Links */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-bold text-white text-lg mb-6">Materiais</h4>
              <ul className="space-y-3">
                <li><Link to="/areia-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Areia em Caldas Novas</Link></li>
                <li><Link to="/brita-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Brita em Caldas Novas</Link></li>
                <li><Link to="/comprar-areia-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Comprar Areia</Link></li>
                <li><Link to="/comprar-brita-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Comprar Brita</Link></li>
                <li><Link to="/areia-media-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Areia Média</Link></li>
                <li><Link to="/areia-fina-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Areia Fina</Link></li>
                <li><Link to="/areia-grossa-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Areia Grossa</Link></li>
                <li><Link to="/pedra-marroada-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Pedra Marroada</Link></li>
                <li><Link to="/po-de-brita-caldas-novas" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">Pó de Brita</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
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

            {/* Map */}
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
