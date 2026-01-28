import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Básico',
      icon: Star,
      description: 'Ideal para vendedores independientes',
      price: { monthly: 29, annual: 23 },
      features: [
        'Hasta 5 vehículos activos',
        'Subdominio personalizado',
        'Galería de fotos ilimitadas',
        'Formularios de contacto',
        'Panel de control básico',
        'Soporte por email',
      ],
      cta: 'Comenzar',
      variant: 'outline' as const,
    },
    {
      name: 'Profesional',
      icon: Crown,
      description: 'Para concesionarias pequeñas',
      price: { monthly: 79, annual: 63 },
      popular: true,
      features: [
        'Hasta 20 vehículos activos',
        'Todo del plan Básico',
        'Estadísticas avanzadas',
        'Sistema de propuestas',
        'Chat integrado',
        'Marca de agua personalizada',
        'Soporte prioritario',
      ],
      cta: 'Comenzar',
      variant: 'hero' as const,
    },
    {
      name: 'Empresarial',
      icon: Sparkles,
      description: 'Para grandes concesionarias',
      price: { monthly: 199, annual: 159 },
      features: [
        'Vehículos ilimitados',
        'Todo del plan Profesional',
        'Múltiples usuarios',
        'API access',
        'Reportes personalizados',
        'Gestor de cuenta dedicado',
        'Soporte 24/7',
        'Integraciones personalizadas',
      ],
      cta: 'Contactar Ventas',
      variant: 'golden' as const,
    },
  ];

  return (
    <section id="planes" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Planes y Precios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elige el Plan Perfecto para{' '}
            <span className="gradient-text-red">Tu Negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Sin contratos. Sin comisiones. Cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-card rounded-full p-1.5 border border-border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Anual
              <span className="bg-success/20 text-success text-xs px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-card border-2 border-primary shadow-xl shadow-primary/20 scale-105'
                  : 'bg-card border border-border hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge">
                  ⭐ Más Popular
                </div>
              )}

              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-primary/20' : 'bg-secondary'
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-success mt-1">
                    Ahorras ${(plan.price.monthly - plan.price.annual) * 12}/año
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.variant}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          Todos los planes incluyen <span className="text-foreground font-medium">14 días de prueba gratis</span>. 
          Sin tarjeta de crédito requerida.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
