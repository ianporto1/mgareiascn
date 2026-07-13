import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Calendar, User, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen font-sans text-neutral-800 flex flex-col selection:bg-primary-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="MG Areias e Britas" className="h-14 w-auto mix-blend-multiply" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Início</Link>
              <Link to="/calculadora-de-obra" className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">Calculadora</Link>
              <Link to="/blog" className="text-primary-500 font-medium transition-colors">Blog</Link>
              
              <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-md font-semibold transition-colors flex items-center gap-2 shadow-sm">
                <Phone className="w-4 h-4" />
                Fale Conosco
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-neutral-600 hover:text-neutral-900 p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
              <Link to="/" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Início</Link>
              <Link to="/calculadora-de-obra" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 rounded-md">Calculadora</Link>
              <Link to="/blog" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-primary-500 hover:bg-neutral-50 rounded-md">Blog</Link>
              <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-primary-500 text-white px-4 py-3 rounded-md font-bold mx-2">
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-neutral-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb / Back */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors mb-8 font-medium">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Blog
            </Link>

            {/* Article Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6 font-medium">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 leading-tight mb-6">
                {post.title}
              </h1>
            </header>
          </div>

          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-md bg-neutral-200">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Body */}
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-neutral md:prose-xl max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-600 prose-img:rounded-2xl">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Share / CTA */}
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <div className="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">Gostou da dica? Precisando de material para sua obra?</h3>
                <p className="text-neutral-600 mb-8 max-w-lg mx-auto">Fale com nossa equipe agora mesmo e garanta as melhores opções de areia e brita em Caldas Novas com entrega super rápida.</p>
                <a href="https://wa.me/5564992465992" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-sm">
                  <Phone className="w-5 h-5" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>

            {/* Related Tools */}
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">Explore nossas Ferramentas & Guias</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/qual-areia-usar" className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-primary-300 transition-colors group flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform mt-1">🤔</span>
                  <div>
                    <span className="font-bold text-neutral-900 group-hover:text-primary-600 block mb-1">Qual usar?</span>
                    <span className="text-sm text-neutral-500">Clique e descubra o material ideal para sua obra</span>
                  </div>
                </Link>
                <Link to="/dicas-de-construcao-caldas-novas" className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-primary-300 transition-colors group flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform mt-1">🏗️</span>
                  <div>
                    <span className="font-bold text-neutral-900 group-hover:text-primary-600 block mb-1">Dicas de Obra</span>
                    <span className="text-sm text-neutral-500">Dicas para otimizar e melhorar sua construção</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-8">Veja outros artigos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/blog/${related.slug}`}
                      className="group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-primary-400 hover:shadow-md transition-all"
                    >
                      <div className="h-48 overflow-hidden bg-neutral-100">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h4 className="font-bold text-neutral-900 group-hover:text-primary-600 mb-2 line-clamp-2">
                          {related.title}
                        </h4>
                        <div className="mt-auto flex items-center justify-between text-sm text-neutral-500">
                          <span>{related.date}</span>
                          <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-primary-500 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16 border-t border-neutral-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            <div className="lg:col-span-3">
              <div className="flex items-center mb-6 bg-white p-2 rounded-lg inline-block">
                <img src="/logo.png" alt="MG Areias e Britas" className="h-16 w-auto mix-blend-multiply" />
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Fornecendo a base sólida para grandes e pequenas construções em Caldas Novas, com agilidade e compromisso.
              </p>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="font-display font-bold text-white text-lg mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-neutral-400 hover:text-primary-400 transition-colors">Início</Link></li>
                <li><Link to="/blog" className="text-neutral-400 hover:text-primary-400 transition-colors">Blog</Link></li>
                <li><Link to="/calculadora-de-obra" className="text-neutral-400 hover:text-primary-400 transition-colors">Calculadora</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
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
          </div>

          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} MG Areias e Britas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
