import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    producto: [
      { label: 'Características', href: '#caracteristicas' },
      { label: 'Planes y Precios', href: '#planes' },
      { label: 'Demo', href: '#' },
      { label: 'Casos de Éxito', href: '#testimonios' },
    ],
    soporte: [
      { label: 'Centro de Ayuda', href: '#' },
      { label: 'Documentación', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'WhatsApp', href: '#' },
    ],
    legal: [
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Política de Cookies', href: '#' },
      { label: 'Aviso Legal', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div> */}
              <span className="font-display font-bold text-2xl text-foreground">
                CarStudio<span className="text-primary">GT</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              La plataforma más completa para vendedores de vehículos. 
              Crea tu tienda online y conecta con miles de compradores.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Producto */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.producto.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Recibe Tips para Vender Más
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Consejos semanales para mejorar tus ventas de vehículos.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-background border-border"
              />
              <Button variant="hero" className="w-full">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CarStudioGT. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en Guatemala
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 bg-card text-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¿Necesitas ayuda?
        </span>
      </a>
    </footer>
  );
};

export default Footer;
