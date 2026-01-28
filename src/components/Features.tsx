import { 
  Store, 
  ClipboardList, 
  Images, 
  FileText, 
  LayoutDashboard, 
  Handshake, 
  Bell, 
  Search 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Store,
      title: 'Tu Propia Tienda Online',
      description: 'Obtén tu subdominio personalizado (ej: tuempresa.dominio.com) y construye tu marca profesional.',
    },
    {
      icon: ClipboardList,
      title: 'Gestión de Inventario',
      description: 'Agrega, edita y organiza tus vehículos fácilmente. Control total de tu catálogo en un solo lugar.',
    },
    {
      icon: Images,
      title: 'Galerías Profesionales',
      description: 'Sube múltiples fotos por vehículo. Muestra cada detalle que importa a tus compradores.',
    },
    {
      icon: FileText,
      title: 'Formularios Inteligentes',
      description: 'Los compradores solicitan citas y hacen propuestas con o sin vehículo usado como parte de pago.',
    },
    {
      icon: LayoutDashboard,
      title: 'Panel de Control Completo',
      description: 'Visualiza estadísticas, leads, propuestas y mensajes. Todo lo que necesitas en un solo lugar.',
    },
    {
      icon: Handshake,
      title: 'Sistema de Propuestas',
      description: 'Recibe ofertas de dinero y/o vehículos usados como parte de pago. Todo documentado.',
    },
    {
      icon: Bell,
      title: 'Notificaciones en Tiempo Real',
      description: 'Recibe alertas por email y SMS cuando hay nuevos interesados. Nunca pierdas una venta.',
    },
    {
      icon: Search,
      title: 'SEO Optimizado',
      description: 'Tu inventario aparece en buscadores automáticamente. Más visibilidad = más ventas.',
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 md:py-32 bg-card relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Características
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Todo lo que Necesitas para{' '}
            <span className="gradient-text-red">Vender Más</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas profesionales diseñadas específicamente para vendedores de vehículos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
