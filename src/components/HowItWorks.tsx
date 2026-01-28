import { UserPlus, Upload, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: 'Regístrate',
      description: 'Crea tu cuenta gratis en menos de 2 minutos. Elige tu plan y personaliza tu tienda con tu marca.',
    },
    {
      icon: Upload,
      number: '02',
      title: 'Sube tus Vehículos',
      description: 'Agrega fotos, especificaciones y precios de tu inventario. Es fácil e intuitivo.',
    },
    {
      icon: MessageCircle,
      number: '03',
      title: 'Recibe Propuestas',
      description: 'Los compradores te contactan directamente. Gestiona citas y propuestas desde un solo lugar.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Proceso Simple
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comienza a Vender en{' '}
            <span className="gradient-text-red">3 Simples Pasos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No necesitas conocimientos técnicos. En minutos tendrás tu tienda lista para recibir compradores.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-px bg-gradient-to-r from-border via-primary/30 to-border" />
              )}

              <div className="glass-card rounded-2xl p-8 text-center group-hover:border-primary/30 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-card px-3 py-1 rounded-full border border-border">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Empezar Ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
