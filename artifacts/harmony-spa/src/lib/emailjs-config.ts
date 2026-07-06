// Configuración de EmailJS para el formulario de reservas
// Las credenciales se leen de variables de entorno (VITE_EMAILJS_*) configuradas
// en los Secrets del proyecto.

export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "REPLACE_WITH_YOUR_PUBLIC_KEY";
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "REPLACE_WITH_YOUR_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "REPLACE_WITH_YOUR_TEMPLATE_ID";

// El destino final del correo (massage.xio.msg@gmail.com) se configura del lado
// de EmailJS en su template, pero se puede incluir como parámetro adicional si es necesario.
export const CONTACT_EMAIL = "massage.xio.msg@gmail.com";
