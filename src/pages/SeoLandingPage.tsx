import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, CheckCircle2, ChevronRight, Home as HomeIcon, Instagram, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface LandingPageData {
  title: string;
  keyword: string;
  intent: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  content: {
    heading: string;
    paragraphs: string[];
    benefits: string[];
  };
}

const landingPages: Record<string, LandingPageData> = {
  'areia-caldas-novas': {
    title: 'Areia em Caldas Novas | Melhor Preço e Entrega Rápida | MG Areias',
    keyword: 'Areia em Caldas Novas',
    intent: 'Produto',
    metaDescription: 'Compre Areia em Caldas Novas com a MG Areias e Britas. Areia lavada de qualidade para sua obra. Solicite seu orçamento com entrega rápida.',
    heroHeading: 'Sua Obra Pede a Melhor Areia em Caldas Novas',
    heroSubheading: 'Fornecemos areia de alta qualidade para todos os tipos de construção.',
    content: {
      heading: 'Por que escolher a nossa Areia?',
      paragraphs: [
        'A MG Areias e Britas é referência no fornecimento de areia em Caldas Novas. Entendemos que a qualidade do material base é fundamental para a durabilidade e segurança de qualquer projeto.',
        'Seja para reboco, contrapiso ou fundação, temos a granulometria ideal para a sua necessidade, garantindo sempre o melhor rendimento da argamassa e do concreto.'
      ],
      benefits: [
        'Areia Limpa e Lavada',
        'Cargas completas e no prazo',
        'Frota própria para entrega rápida',
        'Atendimento especializado via WhatsApp'
      ]
    }
  },
  'brita-caldas-novas': {
    title: 'Brita em Caldas Novas | Pedra Marroada, Pó de Brita | MG Areias',
    keyword: 'Brita em Caldas Novas',
    intent: 'Produto',
    metaDescription: 'Precisando de Brita em Caldas Novas? Temos Brita 0, Brita 1, Pó de Brita e Pedra Marroada. Melhor preço e agilidade na entrega. Confira!',
    heroHeading: 'Brita de Alta Qualidade em Caldas Novas',
    heroSubheading: 'Estruturas sólidas exigem brita resistente e bem dimensionada.',
    content: {
      heading: 'Qualidade que faz a diferença',
      paragraphs: [
        'Na hora de concretar ou fazer um serviço de base, a qualidade da brita em Caldas Novas pode definir a durabilidade da sua obra. A MG fornece britas selecionadas para construção civil, sem impurezas e com granulometria regular.',
        'Atendemos construtoras, empreiteiras e clientes finais com a mesma agilidade e compromisso.'
      ],
      benefits: [
        'Resistência superior para concreto',
        'Diversas granulometrias (Pó de brita, Brita 0, Brita 1, Pedra Marroada)',
        'Entrega rápida e pesagem exata',
        'Preço justo direto do fornecedor'
      ]
    }
  },
  'comprar-areia-caldas-novas': {
    title: 'Comprar Areia em Caldas Novas | Orçamento Rápido | MG Areias',
    keyword: 'Comprar Areia em Caldas Novas',
    intent: 'Compra',
    metaDescription: 'Onde Comprar Areia em Caldas Novas? MG Areias e Britas. Frota própria, carga de areia média, fina e grossa. Clique e peça pelo WhatsApp.',
    heroHeading: 'Comprar Areia em Caldas Novas nunca foi tão fácil',
    heroSubheading: 'Faça seu pedido diretamente pelo WhatsApp e receba rápido na sua obra.',
    content: {
      heading: 'Facilidade e Agilidade na sua Compra',
      paragraphs: [
        'Sabemos que tempo é dinheiro, especialmente quando a obra está em andamento. É por isso que simplificamos o processo para você comprar areia em Caldas Novas sem burocracia.',
        'Basta chamar nossa equipe no WhatsApp, informar o volume e o local, e nossa frota própria fará a entrega com pontualidade e segurança.'
      ],
      benefits: [
        'Processo de compra 100% online',
        'Pagamento facilitado na entrega',
        'Orçamento rápido e sem compromisso',
        'Suporte para calcular a quantidade ideal'
      ]
    }
  },
  'comprar-brita-caldas-novas': {
    title: 'Comprar Brita em Caldas Novas | Orçamento Fácil | MG Areias',
    keyword: 'Comprar Brita em Caldas Novas',
    intent: 'Compra',
    metaDescription: 'Quer Comprar Brita em Caldas Novas com segurança e preço justo? Fale com a MG Areias e Britas. Entregas em toda a região. Orçamento online.',
    heroHeading: 'Compre Brita em Caldas Novas com Segurança',
    heroSubheading: 'Entrega garantida, no prazo certo e com o volume exato que você comprou.',
    content: {
      heading: 'Sua melhor opção em Caldas Novas',
      paragraphs: [
        'Se você precisa comprar brita em Caldas Novas e está em dúvida sobre o fornecedor, confie na experiência da MG Areias e Britas. Trabalhamos com compromisso e seriedade.',
        'Temos opções para todas as etapas da obra: desde a fundação e lajes até calçamentos e jardins.'
      ],
      benefits: [
        'Diversos tipos de pedra (Brita, Pó de brita, Pedra Marroada)',
        'Logística eficiente para Caldas e região',
        'Garantia de qualidade',
        'Atendimento humanizado e rápido'
      ]
    }
  },
  'areia-media-caldas-novas': {
    title: 'Areia Média em Caldas Novas | MG Areias e Britas',
    keyword: 'Areia Média em Caldas Novas',
    intent: 'Produto específico',
    metaDescription: 'Fornecedor de Areia Média em Caldas Novas. Areia lavada de excelente qualidade para assentamento de tijolos, blocos e concretos em geral. Peça já!',
    heroHeading: 'Areia Média de Qualidade em Caldas Novas',
    heroSubheading: 'A melhor areia média lavada para assentamento e concreto.',
    content: {
      heading: 'A Areia mais Versátil para a sua Obra',
      paragraphs: [
        'A areia média é o material mais utilizado na construção civil por sua versatilidade. Ideal para assentamento de tijolos e blocos, e também para a confecção de concreto.',
        'A Areia Média que fornecemos em Caldas Novas é lavada e livre de impurezas orgânicas, garantindo uma massa mais homogênea e durável.'
      ],
      benefits: [
        'Ótima trabalhabilidade',
        'Ideal para alvenaria',
        'Perfeita para mistura de concretos',
        'Entrega ágil'
      ]
    }
  },
  'areia-fina-caldas-novas': {
    title: 'Areia Fina em Caldas Novas | MG Areias e Britas',
    keyword: 'Areia Fina em Caldas Novas',
    intent: 'Produto específico',
    metaDescription: 'Areia Fina em Caldas Novas para reboco e acabamentos. Compre areia fina limpa com a MG Areias e Britas. Solicite um orçamento rápido.',
    heroHeading: 'Areia Fina para Acabamento em Caldas Novas',
    heroSubheading: 'O toque de qualidade final que o seu reboco e pintura merecem.',
    content: {
      heading: 'Perfeição no Acabamento',
      paragraphs: [
        'Para conseguir um reboco lisinho e pronto para pintura, a Areia Fina é indispensável. A MG Areias e Britas fornece Areia Fina em Caldas Novas com altíssimo padrão de limpeza.',
        'Nossa areia fina proporciona excelente aderência e evita trincas no reboco, garantindo um resultado final superior para o seu imóvel.'
      ],
      benefits: [
        'Granulometria fina e uniforme',
        'Alta aderência para massas de reboco',
        'Facilita o trabalho do pedreiro/pintor',
        'Reduz desperdícios e patologias'
      ]
    }
  },
  'areia-grossa-caldas-novas': {
    title: 'Areia Grossa em Caldas Novas | MG Areias e Britas',
    keyword: 'Areia Grossa em Caldas Novas',
    intent: 'Produto específico',
    metaDescription: 'Compre Areia Grossa em Caldas Novas. Ideal para contrapiso e concreto armado. Resistência e qualidade. Fale com a MG Areias e Britas.',
    heroHeading: 'Areia Grossa para Contrapiso e Fundações',
    heroSubheading: 'Força e resistência estrutural para a sua construção em Caldas Novas.',
    content: {
      heading: 'Resistência Estrutural',
      paragraphs: [
        'A Areia Grossa é essencial quando a estrutura exige alta resistência, como em fundações, contrapisos grossos e estruturas de concreto armado.',
        'Comercializamos Areia Grossa em Caldas Novas que atende aos mais rígidos padrões, oferecendo excelente estabilidade mecânica quando misturada ao cimento e à brita.'
      ],
      benefits: [
        'Ideal para concreto de alta resistência',
        'Excelente para contrapisos',
        'Ajuda a evitar retrações no concreto',
        'Disponibilidade imediata para entrega'
      ]
    }
  },
  'pedra-marroada-caldas-novas': {
    title: 'Pedra Marroada em Caldas Novas | MG Areias e Britas',
    keyword: 'Pedra Marroada em Caldas Novas',
    intent: 'Produto',
    metaDescription: 'Fornecimento de Pedra Marroada em Caldas Novas para fundações, muros de arrimo e drenagens. Qualidade e entrega no local. Orçamento rápido.',
    heroHeading: 'Pedra Marroada em Caldas Novas',
    heroSubheading: 'Ideal para alicerces, muros de arrimo e sistemas de drenagem.',
    content: {
      heading: 'A Solução para Fundações e Arrimos',
      paragraphs: [
        'A pedra marroada é um material bruto muito utilizado no início das obras para garantir bases sólidas (alicerces) e na construção de muros de arrimo (contenção de encostas).',
        'Na MG Areias e Britas, fornecemos Pedra Marroada em Caldas Novas com ótimo custo-benefício e entrega especializada.'
      ],
      benefits: [
        'Perfeita para base de alicerces',
        'Alta durabilidade em muros de contenção',
        'Utilizada em gabiões e drenagem',
        'Disponibilidade de cargas variadas'
      ]
    }
  },
  'po-de-brita-caldas-novas': {
    title: 'Pó de Brita em Caldas Novas | MG Areias e Britas',
    keyword: 'Pó de Brita em Caldas Novas',
    intent: 'Produto',
    metaDescription: 'Pó de Brita em Caldas Novas para assentamento de pisos intertravados, calçadas e nivelamentos. Melhor preço da região. Peça pelo WhatsApp.',
    heroHeading: 'Pó de Brita para Calçamentos e Nivelamentos',
    heroSubheading: 'O material ideal para assentar pisos intertravados em Caldas Novas.',
    content: {
      heading: 'Compactação e Versatilidade',
      paragraphs: [
        'O Pó de Brita é extremamente útil para obras de calçamento, como assentamento de pisos intertravados (pavers) e paralelepípedos. Também é muito usado na fabricação de massa asfáltica e blocos de concreto.',
        'Fornecemos Pó de Brita em Caldas Novas com excelente capacidade de compactação e drenagem, garantindo calçadas e pátios mais firmes.'
      ],
      benefits: [
        'Essencial para pavimentação com blocos intertravados',
        'Ótimo para regularizar terrenos',
        'Substitui a areia em algumas aplicações estruturais',
        'Preço competitivo'
      ]
    }
  }
};

export default function SeoLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const pageData = slug && landingPages[slug] ? landingPages[slug] : null;

  useEffect(() => {
    if (pageData) {
      document.title = pageData.title;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", pageData.metaDescription);
      } else {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        metaDesc.setAttribute("content", pageData.metaDescription);
        document.head.appendChild(metaDesc);
      }
    }
  }, [pageData]);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Página não encontrada</h1>
          <Link to="/" className="text-primary-600 font-medium hover:underline">Voltar para o Início</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 flex flex-col">
      {/* Navigation - Simplified */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src="/logo.png" alt="MG Areias e Britas" className="h-16 w-auto mix-blend-multiply" />
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Início</Link>
              <Link to="/qual-areia-usar" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Qual areia usar?</Link>
              <Link to="/calculadora-de-obra" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Calculadora</Link>
              <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-md font-semibold transition-colors flex items-center gap-2 shadow-sm">
                <Phone className="w-4 h-4" />
                Orçamento Rápido
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-neutral-600 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary-600 flex items-center gap-1 shrink-0">
              <HomeIcon className="w-4 h-4" />
              Início
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-neutral-900 font-medium truncate">{pageData.keyword}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={FADE_UP}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-600 text-sm font-bold tracking-wider uppercase mb-4 border border-primary-100">
                MG Areias e Britas
              </span>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 tracking-tight leading-tight">
                {pageData.heroHeading}
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                {pageData.heroSubheading}
              </p>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">{pageData.content.heading}</h2>
                <div className="space-y-4 text-neutral-600">
                  {pageData.content.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {pageData.content.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-neutral-100">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                    <span className="font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-brand-dark p-8 md:p-10 rounded-3xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">
                  Fale com um Especialista
                </h3>
                <p className="text-neutral-400 mb-8 relative z-10 max-w-sm mx-auto">
                  Tire dúvidas, calcule a quantidade ideal e solicite seu orçamento de {pageData.keyword.toLowerCase()} sem compromisso.
                </p>

                <a 
                  href={`https://wa.me/5564992465992?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${pageData.keyword}.`)}`}
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-primary-500/30 w-full relative z-10"
                >
                  <Phone className="w-6 h-6" />
                  Orçamento via WhatsApp
                </a>
                
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-neutral-400 relative z-10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    <span>Resposta rápida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    <span>Entrega garantida</span>
                  </div>
                </div>
              </div>

              {/* Related Tools */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Link to="/qual-areia-usar" className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-primary-300 transition-colors group">
                  <span className="block text-2xl mb-2 group-hover:scale-110 transition-transform w-fit">🤔</span>
                  <span className="font-bold text-neutral-900 group-hover:text-primary-600 block mb-1">Qual usar?</span>
                  <span className="text-sm text-neutral-500">Descubra o material ideal</span>
                </Link>
                <Link to="/calculadora-de-obra" className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-primary-300 transition-colors group">
                  <span className="block text-2xl mb-2 group-hover:scale-110 transition-transform w-fit">📐</span>
                  <span className="font-bold text-neutral-900 group-hover:text-primary-600 block mb-1">Calculadora</span>
                  <span className="text-sm text-neutral-500">Estime a quantidade certa</span>
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="bg-neutral-900 text-neutral-300 py-10 border-t border-neutral-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="MG Areias e Britas" className="h-10 w-auto mix-blend-multiply bg-white rounded p-1" />
              <span className="text-sm font-medium text-neutral-400">MG Areias e Britas</span>
            </div>
            
            <div className="flex items-center gap-6">
               <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                 <Phone className="w-4 h-4" />
                 (64) 99246-5992
               </a>
               <span className="text-neutral-400 flex items-center gap-2 text-sm hidden sm:flex">
                 <MapPin className="w-4 h-4" />
                 Caldas Novas, GO
               </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
