import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#caracteristicas', label: 'Características' },
    { href: '#como-funciona', label: 'Cómo Funciona' },
    { href: '#planes', label: 'Planes' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-center py-2.5 px-4 text-sm font-medium">
        🎉 <span className="font-bold">Oferta de Lanzamiento:</span> 14 días gratis + 30% descuento en tu primer mes
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div> */}
              <span className="font-display font-bold text-2xl text-foreground">
                CarStudio<span className="text-primary">GT</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Iniciar Sesión
              </Button>
              <Button variant="hero" size="default">
                Comenzar Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Iniciar Sesión
                </Button>
                <Button variant="hero" className="w-full">
                  Comenzar Gratis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
