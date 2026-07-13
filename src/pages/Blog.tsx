import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Calendar, User, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

      {/* Header */}
      <header className="bg-neutral-900 py-16 md:py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              Conteúdo Educativo
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Blog da MG Areias e Britas
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-8"
            >
              Dicas de construção, novidades sobre materiais e muito mais para ajudar você a economizar e garantir a qualidade da sua obra.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/qual-areia-usar" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
                <span className="text-xl">🤔</span> Qual areia usar?
              </Link>
              <Link to="/dicas-de-construcao-caldas-novas" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
                <span className="text-xl">🏗️</span> Dicas de Obra
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Blog Listing */}
      <main className="flex-1 bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all group flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden bg-neutral-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-primary-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <User className="w-4 h-4 text-neutral-400" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-primary-600 hover:text-primary-700 transition-colors p-2 -mr-2">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
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
