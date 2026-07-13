import { MapPin, Phone, Instagram, ChevronRight, Home as HomeIcon, Calculator, Ruler, ArrowRight, Settings, Info, Menu, X, ArrowDown, Layers, LayoutGrid, Package, Brush, Truck, AlignEndHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

type ServiceType = 'contrapiso' | 'nivelamento' | 'caixa_areia' | 'reboco' | 'concreto' | 'piso_intertravado';

interface CalculationResult {
  serviceName: string;
  area: number;
  estimatedVolume: number;
  recommendedVolume: number;
  materialIndicated: string;
  concreteMix?: {
    cement: number;
    sand: number;
    gravel: number;
  };
}

export default function CalculadoraObra() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [serviceType, setServiceType] = useState<ServiceType>('contrapiso');
  
  // Inputs
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('');
  const [areaInput, setAreaInput] = useState('');

  const [result, setResult] = useState<CalculationResult | null>(null);

  // Reset inputs when service changes
  useEffect(() => {
    setLength('');
    setWidth('');
    setThickness('');
    setAreaInput('');
    setResult(null);
  }, [serviceType]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    let resArea = 0;
    let resVol = 0;
    let material = '';
    let serviceName = '';
    let concreteMix = undefined;
    
    const l = parseFloat(length.replace(',', '.')) || 0;
    const w = parseFloat(width.replace(',', '.')) || 0;
    const t = parseFloat(thickness.replace(',', '.')) || 0; 
    const a = parseFloat(areaInput.replace(',', '.')) || 0;
    
    if (serviceType === 'contrapiso') {
      serviceName = 'Contrapiso';
      resArea = l * w;
      resVol = resArea * (t / 100);
      material = 'Areia média lavada';
    } else if (serviceType === 'nivelamento') {
      serviceName = 'Nivelamento';
      resArea = l * w;
      resVol = resArea * (t / 100);
      material = 'Areia fina ou média lavada';
    } else if (serviceType === 'caixa_areia') {
      serviceName = 'Caixa de areia';
      resArea = l * w;
      resVol = resArea * (t / 100); 
      material = 'Areia fina lavada';
    } else if (serviceType === 'reboco') {
      serviceName = 'Reboco';
      resArea = l * w; // w used as height
      resVol = resArea * (t / 100);
      material = 'Areia fina lavada';
    } else if (serviceType === 'concreto') {
      serviceName = 'Concreto';
      resArea = l * w;
      resVol = resArea * (t / 100);
      material = 'Areia grossa lavada e Brita 1';
      concreteMix = {
        cement: Math.ceil(resVol * 7), 
        sand: resVol * 0.8,
        gravel: resVol * 0.8,
      };
    } else if (serviceType === 'piso_intertravado') {
      serviceName = 'Piso intertravado';
      resArea = a;
      resVol = resArea * (t / 100);
      material = 'Areia média ou Pó de Pedra';
    }
    
    const recommendedVol = resVol * 1.1; // 10% margin
    
    setResult({
      serviceName,
      area: resArea,
      estimatedVolume: resVol,
      recommendedVolume: recommendedVol,
      materialIndicated: material,
      concreteMix
    });

    // Scroll to results on mobile
    setTimeout(() => {
      document.getElementById('resultado-calculadora')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const getWhatsAppLink = () => {
    if (!result) return 'https://wa.me/5564992465992';
    
    const waText = `Olá!

Utilizei a Calculadora da MG Areias.

Serviço:
${result.serviceName}

${result.area > 0 ? `Área:\n${result.area.toLocaleString('pt-BR', {maximumFractionDigits: 2})} m²\n\n` : ''}Quantidade estimada:
${result.recommendedVolume.toLocaleString('pt-BR', {maximumFractionDigits: 2})} m³

${result.concreteMix ? `Adicionais sugeridos:\nCimento: ${result.concreteMix.cement} sacos (50kg)\nAreia: ${result.concreteMix.sand.toLocaleString('pt-BR', {maximumFractionDigits: 2})} m³\nBrita: ${result.concreteMix.gravel.toLocaleString('pt-BR', {maximumFractionDigits: 2})} m³\n\n` : ''}Gostaria de confirmar essa quantidade e solicitar um orçamento.`;

    return `https://wa.me/5564992465992?text=${encodeURIComponent(waText)}`;
  };

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
              <Link to="/#produtos" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Produtos</Link>
              <Link to="/duvidas-frequentes" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">FAQ</Link>
              <Link to="/calculadora-de-obra" className="text-primary-500 font-medium transition-colors">Calculadora</Link>
              
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
              <Link to="/#produtos" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Produtos</Link>
              <Link to="/duvidas-frequentes" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">FAQ</Link>
              <Link to="/calculadora-de-obra" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-primary-500 hover:bg-neutral-50 rounded-md">Calculadora de Obra</Link>
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
            <span className="text-neutral-900 font-medium">Calculadora de Obra</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-2xl mb-4 text-primary-600">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 mb-6 tracking-tight">
              Calculadora de Obra
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Descubra rapidamente quanto material será necessário para a sua obra. Evite sobras e falta de material fazendo o cálculo correto.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Form Section */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-neutral-200">
              
              <form onSubmit={handleCalculate} className="space-y-8">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-4 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary-500" />
                    Selecione o Serviço
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { id: 'contrapiso', label: 'Contrapiso', icon: Layers },
                      { id: 'nivelamento', label: 'Nivelamento', icon: AlignEndHorizontal },
                      { id: 'caixa_areia', label: 'Caixa de areia', icon: Package },
                      { id: 'reboco', label: 'Reboco', icon: Brush },
                      { id: 'concreto', label: 'Concreto', icon: Truck },
                      { id: 'piso_intertravado', label: 'Piso intertravado', icon: LayoutGrid },
                    ].map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setServiceType(svc.id as ServiceType)}
                        className={`group relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 ${
                          serviceType === svc.id 
                            ? 'bg-primary-50 border-primary-500 text-primary-700 shadow-md transform scale-[1.02]' 
                            : 'bg-white border-neutral-100 text-neutral-500 hover:border-primary-200 hover:bg-neutral-50 hover:text-neutral-700'
                        }`}
                      >
                        <svc.icon className={`w-8 h-8 mb-3 transition-colors ${serviceType === svc.id ? 'text-primary-500' : 'text-neutral-400 group-hover:text-primary-400'}`} />
                        <span className="text-sm font-bold text-center leading-tight">{svc.label}</span>
                        {serviceType === svc.id && (
                          <motion.div layoutId="active-indicator" className="absolute -bottom-2 w-12 h-1 bg-primary-500 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-neutral-100"></div>

                {/* Input Fields */}
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-4 flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-primary-500" />
                    Dimensões
                  </label>
                  
                  <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={serviceType}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid md:grid-cols-2 gap-6"
                      >
                        {serviceType === 'piso_intertravado' ? (
                          <div className="col-span-2">
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Área total</label>
                            <div className="relative group">
                              <input
                                type="number"
                                step="0.01"
                                min="0"
                                required
                                value={areaInput}
                                onChange={(e) => setAreaInput(e.target.value)}
                                placeholder="Ex: 50"
                                className="w-full pl-5 pr-12 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white text-lg font-medium shadow-sm group-hover:border-primary-300"
                              />
                              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 font-medium">m²</span>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-neutral-700 mb-2">
                                {serviceType === 'reboco' ? 'Comprimento da parede' : 'Comprimento'}
                              </label>
                              <div className="relative group">
                                <input
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  required
                                  value={length}
                                  onChange={(e) => setLength(e.target.value)}
                                  placeholder="Ex: 10"
                                  className="w-full pl-5 pr-12 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white text-lg font-medium shadow-sm group-hover:border-primary-300"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 font-medium">m</span>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-neutral-700 mb-2">
                                {serviceType === 'reboco' ? 'Altura' : 'Largura'}
                              </label>
                              <div className="relative group">
                                <input
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  required
                                  value={width}
                                  onChange={(e) => setWidth(e.target.value)}
                                  placeholder="Ex: 5"
                                  className="w-full pl-5 pr-12 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white text-lg font-medium shadow-sm group-hover:border-primary-300"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 font-medium">m</span>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-neutral-700 mb-2">
                            {serviceType === 'caixa_areia' 
                              ? 'Profundidade' 
                              : serviceType === 'concreto' 
                                ? 'Altura/Espessura'
                                : serviceType === 'piso_intertravado'
                                  ? 'Espessura da camada de areia'
                                  : 'Espessura'}
                          </label>
                          <div className="relative group">
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              required
                              value={thickness}
                              onChange={(e) => setThickness(e.target.value)}
                              placeholder="Ex: 5"
                              className="w-full pl-5 pr-12 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white text-lg font-medium shadow-sm group-hover:border-primary-300"
                            />
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 font-medium">cm</span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-5 px-6 rounded-xl transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Calculator className="w-5 h-5" />
                  Calcular Material
                </button>

              </form>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-5" id="resultado-calculadora">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-primary-500 text-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-500/20 relative overflow-hidden"
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-black opacity-5 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-display font-bold mb-6 text-white border-b border-white/20 pb-4">
                        Resultado da sua obra
                      </h3>

                      <div className="space-y-5 mb-8">
                        {result.area > 0 && (
                          <div className="flex justify-between items-end border-b border-white/10 pb-2">
                            <span className="text-primary-100 text-sm font-medium">Área Total</span>
                            <span className="text-xl font-bold">{result.area.toLocaleString('pt-BR', {maximumFractionDigits: 2})} m²</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between items-end border-b border-white/10 pb-2">
                          <span className="text-primary-100 text-sm font-medium">Quantidade estimada</span>
                          <span className="text-xl font-bold">{result.estimatedVolume.toLocaleString('pt-BR', {maximumFractionDigits: 2})} m³</span>
                        </div>

                        <div className="flex justify-between items-end bg-white/10 p-3 rounded-lg border border-white/20">
                          <span className="text-white text-sm font-bold flex items-center gap-2">
                            Quantidade recomendada*
                          </span>
                          <span className="text-2xl font-bold text-white">{result.recommendedVolume.toLocaleString('pt-BR', {maximumFractionDigits: 2})} m³</span>
                        </div>
                        
                        <div className="pt-2">
                          <span className="block text-primary-100 text-sm font-medium mb-1">Material indicado</span>
                          <span className="inline-block bg-white text-primary-700 px-3 py-1 rounded-md text-sm font-bold">
                            {result.materialIndicated}
                          </span>
                        </div>

                        {result.concreteMix && (
                          <div className="mt-6 pt-6 border-t border-white/20">
                            <h4 className="font-bold text-lg mb-3">Sugestão de Traço:</h4>
                            <ul className="space-y-2 text-sm text-primary-50">
                              <li className="flex justify-between"><span>Cimento (sacos 50kg):</span> <span className="font-bold">{result.concreteMix.cement}</span></li>
                              <li className="flex justify-between"><span>Areia Grossa (m³):</span> <span className="font-bold">{result.concreteMix.sand.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</span></li>
                              <li className="flex justify-between"><span>Brita 1 (m³):</span> <span className="font-bold">{result.concreteMix.gravel.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</span></li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="flex items-start gap-3 bg-black/10 rounded-xl p-4 mb-8">
                        <Info className="w-5 h-5 text-primary-200 shrink-0 mt-0.5" />
                        <p className="text-xs text-primary-100 leading-relaxed">
                          * Os valores apresentados são estimativas e já incluem uma margem de segurança de 10%. A quantidade pode variar conforme perdas no local, grau de compactação e características específicas da sua obra.
                        </p>
                      </div>

                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-white hover:bg-neutral-50 text-primary-600 font-bold py-4 px-6 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
                      >
                        Solicitar Orçamento
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[400px] border-2 border-dashed border-neutral-200 rounded-3xl flex flex-col items-center justify-center text-center p-8 bg-white"
                  >
                    <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-4">
                      <Calculator className="w-8 h-8 text-neutral-300" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">Aguardando cálculo</h3>
                    <p className="text-neutral-500 max-w-sm">
                      Preencha as dimensões ao lado e clique em "Calcular Material" para ver a estimativa da sua obra.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
                <li><Link to="/duvidas-frequentes" className="text-neutral-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
                <li><Link to="/calculadora-de-obra" className="text-primary-400 transition-colors">Calculadora</Link></li>
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
