import { MapPin, Phone, Instagram, ChevronRight, Home as HomeIcon, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "Vocês realizam entrega de areia e brita em quais regiões?",
    answer: "Realizamos entregas em toda a cidade de Caldas Novas, GO e região metropolitana. Graças à nossa frota própria, garantimos agilidade na entrega direto na sua obra."
  },
  {
    question: "Qual a diferença entre areia fina, média e grossa?",
    answer: "A areia fina é ideal para acabamentos e rebocos precisos. A areia média é a mais versátil, muito usada no assentamento de tijolos e blocos. Já a areia grossa é perfeita para o preparo de concreto, contrapisos e fundações que exigem maior resistência."
  },
  {
    question: "Qual a quantidade mínima para pedido e entrega?",
    answer: "Para verificar a quantidade mínima de entrega para o seu bairro ou região específica em Caldas Novas, pedimos que entre em contato direto pelo nosso WhatsApp. Nossa equipe fará o orçamento exato para a sua necessidade."
  },
  {
    question: "Vocês fornecem materiais para grandes construtoras (B2B)?",
    answer: "Sim! Trabalhamos lado a lado com construtoras, engenheiros e arquitetos. Temos capacidade de fornecimento em grande escala, com faturamento para empresas e garantia de padronização da granulometria do material durante toda a obra."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos diversas formas de pagamento para facilitar sua obra: PIX, cartões de crédito e débito, além de condições especiais de faturamento para empresas parceiras e compras em grande volume."
  },
  {
    question: "Qual é o prazo médio de entrega dos materiais?",
    answer: "Como contamos com frota própria, nosso prazo de entrega é um dos mais rápidos da região de Caldas Novas. Na maioria dos casos, conseguimos programar a entrega para o mesmo dia ou no máximo para o dia seguinte, dependendo do horário do pedido."
  },
  {
    question: "A areia vendida por vocês é limpa?",
    answer: "Com certeza. Prezamos pela qualidade de todos os nossos materiais. Nossa areia é livre de impurezas orgânicas excessivas, garantindo a qualidade da sua argamassa, economia de cimento e segurança para a sua construção."
  }
];

export default function Faq() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 flex flex-col">
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
              <Link to="/duvidas-frequentes" className="text-primary-500 font-medium transition-colors">FAQ</Link>
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
              <Link to="/duvidas-frequentes" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-primary-500 hover:bg-neutral-50 rounded-md">FAQ</Link>
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
            <span className="text-neutral-900 font-medium">Dúvidas Frequentes (FAQ)</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 tracking-tight">
              Dúvidas Frequentes
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Encontre as respostas para as principais dúvidas sobre nossos materiais, entregas e condições de pagamento em Caldas Novas.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-neutral-900 pr-8">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="mt-16 bg-primary-500 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-primary-500/20">
            <h2 className="text-3xl font-display font-bold mb-4">Ainda tem alguma dúvida?</h2>
            <p className="text-lg text-primary-100 mb-8 max-w-xl mx-auto">
              Nossa equipe está pronta para te atender. Faça seu orçamento sem compromisso pelo WhatsApp!
            </p>
            <a 
              href="https://wa.me/5564992465992" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-neutral-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Falar com um vendedor
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16 border-t border-neutral-800">
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
                <li><Link to="/duvidas-frequentes" className="text-primary-400 transition-colors">FAQ</Link></li>
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
