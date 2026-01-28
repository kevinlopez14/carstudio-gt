import { Button } from '@/components/ui/button';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const trustIndicators = [
    'Sin permanencia',
    'Configura en 5 minutos',
    'Cancela cuando quieras',
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-success">
                La Plataforma #1 para Vendedores
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Vende Más Vehículos con{' '}
              <span className="gradient-text-red">Tu Propia Tienda</span>{' '}
              Online
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Crea tu tienda personalizada, sube tu inventario y conecta con miles de compradores potenciales.{' '}
              <span className="text-foreground font-semibold">Sin comisiones por venta.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" className="group">
                Crear Mi Tienda Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="mt-10 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-muted-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-foreground">500+ vendedores</span>
                  <span className="text-muted-foreground"> ya confían en nosotros</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="glass-card rounded-2xl p-4 glow-red">
                <div className="bg-secondary rounded-xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-muted px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-accent/60" />
                      <div className="w-3 h-3 rounded-full bg-success/60" />
                    </div>
                    <div className="flex-1 bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground text-center">
                      tuempresa.carstudio.gt
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Visitas Hoy', value: '1,234', trend: '+12%' },
                        { label: 'Propuestas', value: '28', trend: '+5' },
                        { label: 'Vehículos', value: '15', trend: 'activos' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-background/50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                          <div className="text-xs text-success mt-1">{stat.trend}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Vehicle List Preview */}
                    <div className="space-y-2">
                      {[
                        { name: 'Toyota Corolla 2023', price: '$25,000', views: '234' },
                        { name: 'Honda Civic 2022', price: '$22,500', views: '189' },
                      ].map((vehicle, i) => (
                        <div key={i} className="flex items-center gap-3 bg-background/30 rounded-lg p-3">
                          <div className="w-12 h-12 bg-muted rounded-lg" />
                          <div className="flex-1">
                            <div className="font-medium text-sm text-foreground">{vehicle.name}</div>
                            <div className="text-xs text-muted-foreground">{vehicle.views} vistas</div>
                          </div>
                          <div className="text-primary font-bold">{vehicle.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Preview */}
              <div className="absolute -bottom-8 -left-8 w-40 glass-card rounded-2xl p-2 animate-float hidden md:block">
                <div className="bg-secondary rounded-xl overflow-hidden">
                  <div className="bg-muted h-6 flex items-center justify-center">
                    <div className="w-12 h-1 bg-background/50 rounded-full" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="w-full h-16 bg-muted rounded-lg" />
                    <div className="h-2 bg-muted rounded w-3/4" />
                    <div className="h-2 bg-muted rounded w-1/2" />
                    <div className="h-6 bg-primary/30 rounded" />
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 animate-bounce-subtle hidden md:flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nueva propuesta</div>
                  <div className="text-xs text-muted-foreground">hace 2 minutos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
