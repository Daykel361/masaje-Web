import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Visítanos</h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Nos encontramos en una ubicación céntrica y de fácil acceso, ideal para quienes buscan un espacio de relajación y bienestar. Nuestro centro ofrece un ambiente tranquilo, con acceso cercano a parqueo, comercios y transporte público para que tu visita sea cómoda desde el primer momento.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">San José, Costa Rica</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Teléfono</h4>
                  <a href="tel:+50664092604" className="text-muted-foreground hover:text-primary transition-colors">+506 6409 2604</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Correo Electrónico</h4>
                  <a href="mailto:massage.xio.msg@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">massage.xio.msg@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Horario</h4>
                  <p className="text-muted-foreground">Lunes a Domingo<br/>9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/50664092604" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-medium hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.08985160893!2d-84.0954009!3d9.9320857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15c5%3A0xe6746a6a9f11b882!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
