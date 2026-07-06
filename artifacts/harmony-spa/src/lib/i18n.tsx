import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "es" | "en";

type Translations = {
  [key: string]: {
    es: string;
    en: string;
  };
};

export const dict: Translations = {
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.gallery": { es: "Galería", en: "Gallery" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.book": { es: "Reservar Cita", en: "Book Now" },

  "hero.tag": { es: "Un santuario de bienestar", en: "A sanctuary of wellness" },
  "hero.title": { es: "Desconecta del mundo.\nReconecta contigo.", en: "Disconnect from the world.\nReconnect with yourself." },
  "hero.subtitle": { es: "Terapias corporales y masajes especializados en un ambiente de absoluta serenidad y lujo boutique.", en: "Specialized body therapies and massages in an atmosphere of absolute serenity and boutique luxury." },
  "hero.cta": { es: "Agendar Experiencia", en: "Book Your Experience" },
  "hero.whatsapp": { es: "Consultar por WhatsApp", en: "Ask us on WhatsApp" },

  "services.title": { es: "Nuestros Servicios", en: "Our Services" },
  "services.subtitle": { es: "Una selección curada de terapias diseñadas para restaurar tu equilibrio físico y emocional. Cada tratamiento es personalizado a tus necesidades.", en: "A curated selection of therapies designed to restore your physical and emotional balance. Every treatment is tailored to your needs." },
  "services.book": { es: "Reservar", en: "Book Now" },

  "benefits.tag": { es: "El Poder del Tacto", en: "The Power of Touch" },
  "benefits.title": { es: "Beneficios que transforman", en: "Benefits that transform" },
  "benefits.desc": { es: "Un masaje no es solo un lujo, es una inversión en tu salud integral. Nuestros tratamientos están diseñados para generar un impacto positivo y duradero en tu cuerpo y mente.", en: "A massage is not just a luxury, it is an investment in your overall health. Our treatments are designed to create a lasting, positive impact on your body and mind." },
  "benefits.1": { es: "Reducción profunda del estrés y la ansiedad.", en: "Deep reduction of stress and anxiety." },
  "benefits.2": { es: "Alivio de tensiones musculares crónicas.", en: "Relief of chronic muscle tension." },
  "benefits.3": { es: "Mejora en la circulación sanguínea y linfática.", en: "Improved blood and lymphatic circulation." },
  "benefits.4": { es: "Promoción de un sueño reparador.", en: "Promotes restorative sleep." },
  "benefits.5": { es: "Estimulación del sistema inmunológico.", en: "Boosts the immune system." },
  "benefits.6": { es: "Renovación de la energía vital.", en: "Renews your vital energy." },

  "gallery.title": { es: "Nuestro Santuario", en: "Our Sanctuary" },
  "gallery.subtitle": { es: "Cada rincón de Harmony Spa ha sido diseñado para envolverte en una atmósfera de calma y serenidad. Descubre el espacio donde el tiempo se detiene.", en: "Every corner of Harmony Spa has been designed to wrap you in calm and serenity. Discover the space where time stands still." },
  "gallery.img1": { es: "Instalaciones del spa", en: "Spa facilities" },
  "gallery.img2": { es: "Jardín zen", en: "Zen garden" },
  "gallery.img3": { es: "Piedras calientes", en: "Hot stones" },
  "gallery.img4": { es: "Aceites esenciales", en: "Essential oils" },

  "blog.tag": { es: "Nuestro Blog", en: "Our Blog" },
  "blog.title": { es: "Lecturas de Bienestar", en: "Wellness Reads" },
  "blog.subtitle": { es: "Explora artículos escritos por nuestros expertos sobre cuidado personal, técnicas de relajación y salud integral.", en: "Explore articles written by our experts on self-care, relaxation techniques and overall health." },
  "blog.viewAll": { es: "Ver todos los artículos →", en: "View all articles →" },
  "blog.post1.title": { es: "Los beneficios del masaje con piedras calientes en invierno", en: "The benefits of hot stone massage in winter" },
  "blog.post1.date": { es: "15 Octubre", en: "October 15" },
  "blog.post1.desc": { es: "Descubre cómo el calor de las piedras basálticas penetra en los tejidos para derretir la tensión y mejorar la circulación.", en: "Discover how the heat from basalt stones penetrates the tissue to melt away tension and improve circulation." },
  "blog.post2.title": { es: "5 formas de extender la relajación después de tu visita al spa", en: "5 ways to extend relaxation after your spa visit" },
  "blog.post2.date": { es: "28 Septiembre", en: "September 28" },
  "blog.post2.desc": { es: "Consejos prácticos de nuestras terapeutas para mantener la sensación de bienestar por días después de tu masaje.", en: "Practical tips from our therapists to keep that sense of wellbeing for days after your massage." },
  "blog.post3.title": { es: "Masaje vs. Drenaje Linfático: ¿Cuál es el adecuado para ti?", en: "Massage vs. Lymphatic Drainage: which is right for you?" },
  "blog.post3.date": { es: "12 Septiembre", en: "September 12" },
  "blog.post3.desc": { es: "Conoce las diferencias fundamentales entre estas dos terapias y elige la que mejor se adapte a las necesidades de tu cuerpo.", en: "Learn the key differences between these two therapies and choose the one that best suits your body's needs." },

  "contact.title": { es: "Visítanos", en: "Visit Us" },
  "contact.desc": { es: "Nos encontramos en una ubicación céntrica y de fácil acceso, ideal para quienes buscan un espacio de relajación y bienestar. Nuestro centro ofrece un ambiente tranquilo, con acceso cercano a parqueo, comercios y transporte público para que tu visita sea cómoda desde el primer momento.", en: "We are located in a central, easy-to-reach spot, ideal for those seeking a space for relaxation and wellness. Our center offers a calm environment, with nearby parking, shops and public transport so your visit is comfortable from the very first moment." },
  "contact.location": { es: "Ubicación", en: "Location" },
  "contact.locationValue": { es: "San José, Costa Rica", en: "San José, Costa Rica" },
  "contact.phone": { es: "Teléfono", en: "Phone" },
  "contact.email": { es: "Correo Electrónico", en: "Email" },
  "contact.hours": { es: "Horario", en: "Hours" },
  "contact.hoursValue": { es: "Lunes a Domingo\n9:00 AM - 8:00 PM", en: "Monday to Sunday\n9:00 AM - 8:00 PM" },
  "contact.whatsappBtn": { es: "Escríbenos por WhatsApp", en: "Message us on WhatsApp" },

  "footer.desc": { es: "Un santuario de bienestar sereno y confiable donde puedes desconectar y renovar tu energía.", en: "A serene, trustworthy sanctuary of wellness where you can disconnect and renew your energy." },
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },

  "booking.title": { es: "Reserva tu momento", en: "Book your moment" },
  "booking.subtitle": { es: "Permítenos preparar un espacio de absoluta tranquilidad para ti. Selecciona tus preferencias y nos pondremos en contacto para confirmar tu cita.", en: "Let us prepare a space of absolute tranquility for you. Select your preferences and we will contact you to confirm your appointment." },
  "booking.success.title": { es: "Solicitud Recibida", en: "Request Received" },
  "booking.success.desc": { es: "Gracias por elegir Harmony Spa. Hemos recibido tu solicitud de reserva y te contactaremos en breve para confirmar los detalles.", en: "Thank you for choosing Harmony Spa. We have received your booking request and will contact you shortly to confirm the details." },
  "booking.success.again": { es: "Hacer otra reserva", en: "Make another booking" },
  "booking.error": { es: "Ocurrió un error al enviar tu solicitud. Por favor intenta de nuevo o contáctanos por WhatsApp.", en: "There was an error sending your request. Please try again or contact us on WhatsApp." },
  "booking.name": { es: "Nombre completo", en: "Full name" },
  "booking.namePlaceholder": { es: "Tu nombre", en: "Your name" },
  "booking.phone": { es: "Teléfono", en: "Phone" },
  "booking.email": { es: "Correo electrónico", en: "Email" },
  "booking.emailPlaceholder": { es: "correo@ejemplo.com", en: "email@example.com" },
  "booking.date": { es: "Fecha", en: "Date" },
  "booking.selectDate": { es: "Seleccionar fecha", en: "Select date" },
  "booking.time": { es: "Hora preferida", en: "Preferred time" },
  "booking.selectTime": { es: "Seleccionar hora", en: "Select time" },
  "booking.service": { es: "Servicio", en: "Service" },
  "booking.selectService": { es: "Seleccionar servicio", en: "Select service" },
  "booking.guests": { es: "Personas", en: "Guests" },
  "booking.guests1": { es: "1 Persona", en: "1 Guest" },
  "booking.guests2": { es: "2 Personas (Pareja)", en: "2 Guests (Couple)" },
  "booking.guests3": { es: "3 Personas", en: "3 Guests" },
  "booking.guests4": { es: "4+ Personas", en: "4+ Guests" },
  "booking.comments": { es: "Comentarios o necesidades especiales", en: "Comments or special needs" },
  "booking.commentsPlaceholder": { es: "Menciona alergias, áreas de dolor, etc.", en: "Mention allergies, areas of pain, etc." },
  "booking.submitting": { es: "Procesando...", en: "Processing..." },
  "booking.submit": { es: "Confirmar Reserva", en: "Confirm Booking" },
  "booking.required.name": { es: "El nombre es obligatorio", en: "Name is required" },
  "booking.required.phone": { es: "El teléfono es obligatorio", en: "Phone is required" },
  "booking.required.email": { es: "Correo electrónico inválido", en: "Invalid email address" },
  "booking.required.date": { es: "Selecciona una fecha", en: "Select a date" },
  "booking.required.time": { es: "Selecciona una hora", en: "Select a time" },
  "booking.required.service": { es: "Selecciona un servicio", en: "Select a service" },
  "booking.required.guests": { es: "Selecciona número de personas", en: "Select number of guests" },

  "whatsapp.aria": { es: "Contactar por WhatsApp", en: "Contact us on WhatsApp" },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string) => {
    const entry = dict[key];
    if (!entry) return key;
    return entry[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
