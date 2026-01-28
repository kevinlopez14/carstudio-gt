import { Users, Car, Star, HeadphonesIcon, Check } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Vendedores Activos', sublabel: 'Únete a una comunidad creciente' },
    { icon: Car, value: '10,000+', label: 'Vehículos Vendidos', sublabel: 'Resultados comprobados' },
    { icon: Star, value: '4.8/5', label: 'Estrellas', sublabel: 'Calificación promedio de usuarios' },
    { icon: HeadphonesIcon, value: '24/7', label: 'Soporte', sublabel: 'Siempre estamos para ayudarte' },
  ];

  const differentiators = [
    { title: 'Sin comisiones por venta', description: 'Tu dinero es 100% tuyo' },
    { title: 'Configuración en minutos', description: 'No necesitas conocimientos técnicos' },
    { title: 'Diseño profesional automático', description: 'Tu tienda se ve increíble desde el día 1' },
    { title: 'Móvil first', description: 'El 70% de los compradores navegan desde celular' },
    { title: 'Actualizaciones gratuitas', description: 'Mejoras constantes sin costo extra' },
    { title: 'Seguridad garantizada', description: 'SSL y encriptación de datos' },
  ];

  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-gradient-to-r from-primary/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Por Qué Elegirnos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Más que una Plataforma,{' '}
            <span className="gradient-text-red">Tu Socio de Ventas</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="counter-number mb-2">{stat.value}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Ventajas que nos diferencian
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-success/30 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 group-hover:bg-success/20 transition-colors">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
