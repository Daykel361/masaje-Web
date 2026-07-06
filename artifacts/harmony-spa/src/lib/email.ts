import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, CONTACT_EMAIL } from "@/lib/emailjs-config";
import emailjs from "@emailjs/browser";

export async function sendReservationEmail(data: {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  guests: string;
  comments: string;
}) {
  if (EMAILJS_PUBLIC_KEY === "REPLACE_WITH_YOUR_PUBLIC_KEY") {
    // Simulate API call to allow preview/development without crashing
    console.warn("EmailJS credentials not set. Simulating success...");
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const templateParams = {
    to_email: CONTACT_EMAIL,
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    date: data.date,
    time: data.time,
    service: data.service,
    guests: data.guests,
    comments: data.comments,
  };

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
}
