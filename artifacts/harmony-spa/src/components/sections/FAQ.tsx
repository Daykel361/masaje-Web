import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "¿Con cuánta anticipación debo llegar a mi cita?",
      a: "Recomendamos llegar al menos 15 minutos antes de su tratamiento programado. Esto le permitirá completar cualquier formulario necesario, disfrutar de una bebida relajante y comenzar a desconectar sin prisas."
    },
    {
      q: "¿Qué debo usar durante el masaje?",
      a: "Su comodidad es nuestra prioridad. Le proporcionaremos ropa interior desechable si lo desea. Durante el tratamiento, estará cubierto con sábanas y toallas en todo momento, y solo se descubrirá la zona que se esté masajeando."
    },
    {
      q: "¿Puedo elegir a mi terapeuta?",
      a: "Por supuesto. Si tiene preferencia por alguna terapeuta en particular, por favor indíquelo al momento de hacer su reserva. Haremos todo lo posible por acomodar su solicitud según disponibilidad."
    },
    {
      q: "¿Qué políticas de cancelación tienen?",
      a: "Entendemos que los planes pueden cambiar. Le agradecemos notificarnos con al menos 24 horas de anticipación si necesita cancelar o reprogramar su cita para evitar cargos adicionales."
    },
    {
      q: "¿Ofrecen certificados de regalo?",
      a: "Sí, disponemos de certificados de regalo bellamente presentados para todos nuestros servicios, el regalo perfecto para brindar bienestar a sus seres queridos."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-16">Preguntas Frecuentes</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-serif text-xl hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
