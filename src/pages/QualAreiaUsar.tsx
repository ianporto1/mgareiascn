import { MapPin, Phone, Instagram, ChevronRight, Home as HomeIcon, ArrowRight, Menu, X, ArrowLeft, CheckCircle2, Calculator, Brush, Layers, Truck, LayoutGrid, Grid, Sprout, AlignEndHorizontal, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

type ServiceType = 'reboco' | 'contrapiso' | 'concreto' | 'bloco' | 'piso' | 'jardim' | 'nivelamento' | 'outro';
type SubOption = string;

interface ResultData {
  material: string;
  reason: string;
  calculatorService?: string;
}

const services = [
  { id: 'reboco', label: 'Reboco', icon: Brush },
  { id: 'contrapiso', label: 'Contrapiso', icon: Layers },
  { id: 'concreto', label: 'Concreto', icon: Truck },
  { id: 'bloco', label: 'Assentamento de bloco', icon: LayoutGrid },
  { id: 'piso', label: 'Assentamento de piso', icon: Grid },
  { id: 'jardim', label: 'Jardim', icon: Sprout },
  { id: 'nivelamento', label: 'Nivelamento', icon: AlignEndHorizontal },
  { id: 'outro', label: 'Outro', icon: HelpCircle },
];

export default function QualAreiaUsar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [selectedSub, setSelectedSub] = useState<SubOption | null>(null);

  const handleServiceSelect = (serviceId: string) => {
    const sId = serviceId as ServiceType;
    setSelectedService(sId);
    
    // Check if service needs sub-options
    if (['reboco', 'contrapiso', 'concreto'].includes(sId)) {
      setStep(2);
    } else {
      setStep(3); // Go directly to results
    }
  };

  const handleSubSelect = (sub: string) => {
    setSelectedSub(sub);
    setStep(3);
  };

  const resetFlow = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedSub(null);
  };

  const getSubOptions = () => {
    switch (selectedService) {
      case 'reboco':
        return [
          { id: 'fino', label: 'Acabamento Fino (Pintura)' },
          { id: 'rustico', label: 'Acabamento Rústico' },
        ];
      case 'contrapiso':
        return [
          { id: 'interna', label: 'Área Interna' },
          { id: 'externa', label: 'Área Externa' },
          { id: 'garagem', label: 'Garagem' },
          { id: 'calcada', label: 'Calçada' },
        ];
      case 'concreto':
        return [
          { id: 'laje_viga', label: 'Fundação (Laje / Viga)' },
          { id: 'calcada_simples', label: 'Calçada Simples' },
        ];
      default:
        return [];
    }
  };

  const getResult = (): ResultData => {
    if (selectedService === 'reboco') {
      if (selectedSub === 'fino') {
        return { material: 'Areia Fina Lavada', reason: 'Proporciona um acabamento mais liso e bem acabado, ideal para receber massa corrida ou pintura direta.', calculatorService: 'reboco' };
      }
      return { material: 'Areia Média', reason: 'Garante boa aderência para revestimentos mais rústicos ou assentamento de cerâmica sobre o reboco.', calculatorService: 'reboco' };
    }
    
    if (selectedService === 'contrapiso') {
      if (selectedSub === 'interna') {
        return { material: 'Areia Média Lavada', reason: 'Ideal para regularização fina antes da aplicação de pisos de cerâmica ou porcelanato no interior.', calculatorService: 'contrapiso' };
      }
      return { material: 'Areia Grossa Lavada', reason: 'Proporciona maior resistência mecânica para suportar peso de veículos, intempéries e tráfego intenso.', calculatorService: 'contrapiso' };
    }
    
    if (selectedService === 'concreto') {
      if (selectedSub === 'laje_viga') {
        return { material: 'Areia Grossa + Brita 1', reason: 'A areia grossa é fundamental para a resistência estrutural do concreto armado, evitando trincas.', calculatorService: 'concreto' };
      }
      return { material: 'Areia Média ou Grossa', reason: 'Oferece excelente resistência sem precisar de acabamento muito fino.', calculatorService: 'concreto' };
    }
    
    if (selectedService === 'bloco') {
      return { material: 'Areia Média', reason: 'Dá a liga perfeita com o cimento para garantir estabilidade, prumo e alinhamento dos blocos.' };
    }
    
    if (selectedService === 'piso') {
      return { material: 'Areia Média ou Pó de Pedra', reason: 'Permite o travamento correto dos blocos intertravados (pavers) e facilita a drenagem da água da chuva.', calculatorService: 'piso_intertravado' };
    }
    
    if (selectedService === 'jardim') {
      return { material: 'Areia Média ou Grossa', reason: 'Misturada com a terra, ajuda na drenagem do solo, evitando que as raízes das plantas apodreçam com o acúmulo de água.' };
    }
    
    if (selectedService === 'nivelamento') {
      return { material: 'Areia Média ou Areia de Barranco', reason: 'Fácil de espalhar e compactar para regularizar o terreno antes de iniciar a obra.', calculatorService: 'nivelamento' };
    }
    
    return { material: 'Fale com nosso especialista', reason: 'Como seu caso é mais específico, nossa equipe técnica pode recomendar o material exato no WhatsApp.' };
  };

  const result = step === 3 ? getResult() : null;

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
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link to="/" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Início</Link>
              <Link to="/#sobre" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Sobre Nós</Link>
              <Link to="/calculadora-de-obra" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Calculadora</Link>
              <Link to="/duvidas-frequentes" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">FAQ</Link>
              
              <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-md font-semibold transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap">
                <Phone className="w-4 h-4" />
                Orçamento
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="text-neutral-600 hover:text-neutral-900 focus:outline-none p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
              <Link to="/" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Início</Link>
              <Link to="/#sobre" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Sobre Nós</Link>
              <Link to="/calculadora-de-obra" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Calculadora de Obra</Link>
              <Link to="/duvidas-frequentes" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">FAQ</Link>
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
            <span className="text-neutral-900 font-medium">Qual areia usar?</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 tracking-tight">
              Qual areia usar na minha obra?
            </h1>
            <p className="text-neutral-600">
              Descubra o material ideal para o seu serviço de forma rápida e prática.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-neutral-200 relative overflow-hidden">
            
            {/* Progress Bar */}
            <div className="flex items-center gap-2 mb-8">
              <div className={`h-2 flex-1 rounded-full transition-colors duration-300 ${step >= 1 ? 'bg-primary-500' : 'bg-neutral-100'}`}></div>
              <div className={`h-2 flex-1 rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-primary-500' : 'bg-neutral-100'}`}></div>
              <div className={`h-2 flex-1 rounded-full transition-colors duration-300 ${step >= 3 ? 'bg-primary-500' : 'bg-neutral-100'}`}></div>
            </div>

            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="absolute top-8 right-8 text-neutral-400 hover:text-neutral-700 flex items-center gap-1 font-medium text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar
              </button>
            )}

            <AnimatePresence mode="wait">
              {/* Step 1: Select Service */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-neutral-900 mb-6 text-center">O que você vai fazer?</h2>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {services.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => handleServiceSelect(svc.id)}
                        className="group flex flex-col sm:flex-row items-center sm:justify-start gap-4 p-5 rounded-2xl border-2 border-neutral-100 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-all text-left"
                      >
                        <svc.icon className="w-8 h-8 text-neutral-400 group-hover:text-primary-500 group-hover:scale-110 transition-all" />
                        <span className="font-bold text-neutral-700 group-hover:text-primary-700 text-center sm:text-left">{svc.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Select Sub Option */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-neutral-900 mb-6 text-center">
                    {selectedService === 'contrapiso' ? 'Onde será aplicado?' : 'Selecione o tipo de serviço:'}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {getSubOptions().map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSubSelect(opt.id)}
                        className="p-5 rounded-2xl border-2 border-neutral-100 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-all font-bold text-neutral-700 hover:text-primary-700 flex justify-between items-center"
                      >
                        {opt.label}
                        <ChevronRight className="w-5 h-5 text-neutral-300" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Result */}
              {step === 3 && result && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-primary-50 border border-primary-100 rounded-3xl p-8 mb-8 text-center relative">
                    
                    <CheckCircle2 className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                    
                    <h3 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-2">Material Recomendado</h3>
                    <p className="text-3xl font-display font-bold text-neutral-900 mb-6">
                      {result.material}
                    </p>
                    
                    <div className="bg-white p-5 rounded-2xl text-neutral-700 border border-primary-100/50 shadow-sm inline-block max-w-lg text-left">
                      <span className="block text-xs font-bold text-neutral-400 uppercase mb-1">Por que usar esse material?</span>
                      {result.reason}
                    </div>

                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {result.calculatorService && (
                      <button 
                        onClick={() => navigate('/calculadora-de-obra')}
                        className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-sm"
                      >
                        <Calculator className="w-5 h-5" />
                        Calcular quantidade
                      </button>
                    )}
                    <a
                      href={`https://wa.me/5564992465992?text=${encodeURIComponent(`Olá! Gostaria de fazer um orçamento de ${result.material}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-sm"
                    >
                      <Phone className="w-5 h-5" />
                      Solicitar orçamento
                    </a>
                  </div>

                  <div className="mt-8 text-center">
                    <button onClick={resetFlow} className="text-sm text-neutral-400 hover:text-neutral-600 font-medium underline">
                      Fazer nova consulta
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16 border-t border-neutral-800 mt-auto">
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
                <li><Link to="/calculadora-de-obra" className="text-neutral-400 hover:text-primary-400 transition-colors">Calculadora</Link></li>
                <li><Link to="/duvidas-frequentes" className="text-neutral-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
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
