import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-8 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Comienza a Vender Más{' '}
            <span className="gradient-text-red">Hoy Mismo</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Únete a cientos de vendedores que ya están transformando su negocio 
            con la plataforma más completa para vender vehículos.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="xl" className="group">
              Crear Mi Tienda Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust text */}
          <p className="text-sm text-muted-foreground">
            No se requiere tarjeta de crédito • 14 días gratis • Cancela cuando quieras
          </p>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-8 flex-wrap">
            {['Sin comisiones', 'Setup en minutos', 'Soporte 24/7', 'SSL Seguro'].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
