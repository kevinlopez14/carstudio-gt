import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Méndez',
      business: 'Auto Express Guatemala',
      avatar: 'CM',
      rating: 5,
      quote: 'Antes tardaba semanas en vender un auto. Ahora tengo propuestas el mismo día que publico. La inversión se pagó sola.',
      metric: 'Vendí 15 autos en el primer mes',
    },
    {
      name: 'María López',
      business: 'Motos López',
      avatar: 'ML',
      rating: 5,
      quote: 'El sistema de propuestas es genial. Los clientes pueden ofrecer su moto usada + dinero y todo queda documentado.',
      metric: '32 propuestas por mes',
    },
    {
      name: 'Roberto Castillo',
      business: 'AutoVentas GT',
      avatar: 'RC',
      rating: 5,
      quote: 'Como concesionaria pequeña, necesitábamos presencia online sin gastar miles. Esta plataforma fue perfecta.',
      metric: '+200% en visitas',
    },
    {
      name: 'Ana García',
      business: 'Premium Cars',
      avatar: 'AG',
      rating: 5,
      quote: 'El panel de control es increíble. Puedo ver estadísticas de cada vehículo y saber exactamente qué funciona.',
      metric: '4.9/5 en satisfacción',
    },
  ];

  return (
    <section id="testimonios" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lo Que Dicen{' '}
            <span className="gradient-text-red">Nuestros Vendedores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Historias reales de vendedores que transformaron su negocio con nuestra plataforma.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 relative group hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20 group-hover:text-primary/30 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Metric Badge */}
              <div className="inline-block bg-success/10 text-success text-sm font-medium px-3 py-1 rounded-full mb-6">
                {testimonial.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
