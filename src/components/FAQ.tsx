import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Necesito conocimientos técnicos?',
      answer: 'No. La plataforma es 100% intuitiva. Si sabes usar Facebook o WhatsApp, puedes usar esto. Todo está diseñado para que cualquier persona pueda crear su tienda en minutos.',
    },
    {
      question: '¿Qué pasa si quiero cancelar?',
      answer: 'Puedes cancelar en cualquier momento desde tu panel de control. No hay contratos ni penalizaciones. Tu cuenta permanecerá activa hasta el fin del período pagado.',
    },
    {
      question: '¿Puedo cambiar de plan después?',
      answer: 'Sí, puedes hacer upgrade o downgrade cuando quieras desde tu panel. Los cambios se aplican inmediatamente y el precio se ajusta de forma proporcional.',
    },
    {
      question: '¿Cómo recibo las propuestas de los compradores?',
      answer: 'Recibes notificaciones por email y en tu panel de control. También puedes activar alertas por SMS y WhatsApp para no perder ninguna oportunidad.',
    },
    {
      question: '¿Ustedes se quedan con comisión de las ventas?',
      answer: 'No. Solo pagas tu suscripción mensual o anual. El 100% de tus ventas es para ti. No cobramos comisiones, tarifas ocultas ni costos por transacción.',
    },
    {
      question: '¿Qué pasa con mis datos si cancelo?',
      answer: 'Tus datos son tuyos siempre. Antes de cancelar, puedes exportar toda tu información (vehículos, contactos, propuestas) en formato CSV o Excel.',
    },
    {
      question: '¿Puedo usar mi propio dominio?',
      answer: 'Sí, en el plan Empresarial puedes conectar tu dominio personalizado (ej: www.tunombre.com). En otros planes usas un subdominio gratuito (ej: tunombre.carstudio.gt).',
    },
    {
      question: '¿Ofrecen capacitación?',
      answer: 'Sí. Todos los planes incluyen acceso a video tutoriales y documentación. En planes Profesional y Empresarial, ofrecemos onboarding personalizado por videollamada.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-card relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Preguntas{' '}
            <span className="gradient-text-red">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes dudas? Aquí encontrarás las respuestas más comunes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encontraste lo que buscabas?
          </p>
          <a
            href="#"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
          >
            Contáctanos por WhatsApp
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
