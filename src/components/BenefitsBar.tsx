import { Car, Camera, BarChart3, MessageSquare, Smartphone, Shield } from 'lucide-react';

const BenefitsBar = () => {
  const benefits = [
    { icon: Car, text: 'Subdominio personalizado gratis' },
    { icon: Camera, text: 'Galería ilimitada de fotos' },
    { icon: BarChart3, text: 'Estadísticas en tiempo real' },
    { icon: MessageSquare, text: 'Chat directo con compradores' },
    { icon: Smartphone, text: 'Optimizado para móviles' },
    { icon: Shield, text: '100% seguro y confiable' },
  ];

  return (
    <section className="relative py-6 overflow-hidden bg-card border-y border-border/50">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

      {/* Scrolling content */}
      <div className="flex animate-marquee">
        {[...benefits, ...benefits].map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 whitespace-nowrap"
          >
            <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">{benefit.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsBar;
