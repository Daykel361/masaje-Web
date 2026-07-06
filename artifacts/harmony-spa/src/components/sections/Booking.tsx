import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { sendReservationEmail } from "@/lib/email";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  phone: z.string().min(8, "El teléfono es obligatorio"),
  email: z.string().email("Correo electrónico inválido"),
  date: z.date({
    required_error: "Selecciona una fecha",
  }),
  time: z.string().min(1, "Selecciona una hora"),
  service: z.string().min(1, "Selecciona un servicio"),
  guests: z.string().min(1, "Selecciona número de personas"),
  comments: z.string().default(""),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      time: "",
      service: "",
      guests: "1",
      comments: "",
    },
  });

  useEffect(() => {
    const handlePrefillService = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        form.setValue("service", customEvent.detail);
      }
    };
    
    const handlePrefillDateTime = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const { date, time } = customEvent.detail;
        form.setValue("date", date);
        form.setValue("time", time);
      }
    };

    window.addEventListener('prefill-service', handlePrefillService);
    window.addEventListener('prefill-datetime', handlePrefillDateTime);
    
    return () => {
      window.removeEventListener('prefill-service', handlePrefillService);
      window.removeEventListener('prefill-datetime', handlePrefillDateTime);
    };
  }, [form]);

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    
    try {
      await sendReservationEmail({
        ...data,
        date: format(data.date, "yyyy-MM-dd"),
      });
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);
      setErrorMsg("Ocurrió un error al enviar tu solicitud. Por favor intenta de nuevo o contáctanos por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Reserva tu momento</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Permítenos preparar un espacio de absoluta tranquilidad para ti. Selecciona tus preferencias y nos pondremos en contacto para confirmar tu cita.
            </p>
            
            <div className="hidden lg:block rounded-2xl overflow-hidden shadow-lg h-64">
              <img src="/images/hot-stones.png" alt="Detalle spa" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-4">Solicitud Recibida</h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Gracias por elegir Harmony Spa. Hemos recibido tu solicitud de reserva y te contactaremos en breve para confirmar los detalles.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Hacer otra reserva
                </button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {errorMsg && (
                  <div className="bg-destructive/10 text-destructive p-4 rounded-lg text-sm border border-destructive/20">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre completo</label>
                    <input 
                      {...form.register("name")}
                      className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Tu nombre"
                    />
                    {form.formState.errors.name && <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Teléfono</label>
                    <input 
                      {...form.register("phone")}
                      className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="+506 8888 8888"
                    />
                    {form.formState.errors.phone && <p className="text-destructive text-xs">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Correo electrónico</label>
                  <input 
                    {...form.register("email")}
                    type="email"
                    className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                  {form.formState.errors.email && <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 flex flex-col">
                    <label className="text-sm font-medium text-foreground">Fecha</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          className={cn(
                            "w-full flex items-center bg-background border border-input rounded-xl px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                            !form.watch("date") && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {form.watch("date") ? format(form.watch("date"), "PPP") : "Seleccionar fecha"}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={form.watch("date")}
                          onSelect={(date) => form.setValue("date", date as Date)}
                          initialFocus
                          disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                        />
                      </PopoverContent>
                    </Popover>
                    {form.formState.errors.date && <p className="text-destructive text-xs">{form.formState.errors.date.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Hora preferida</label>
                    <select 
                      {...form.register("time")}
                      className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                    >
                      <option value="">Seleccionar hora</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                    </select>
                    {form.formState.errors.time && <p className="text-destructive text-xs">{form.formState.errors.time.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Servicio</label>
                    <select 
                      {...form.register("service")}
                      className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                    >
                      <option value="">Seleccionar servicio</option>
                      {services.map(s => (
                        <option key={s.id} value={s.nameEs}>{s.nameEs}</option>
                      ))}
                    </select>
                    {form.formState.errors.service && <p className="text-destructive text-xs">{form.formState.errors.service.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Personas</label>
                    <select 
                      {...form.register("guests")}
                      className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                    >
                      <option value="1">1 Persona</option>
                      <option value="2">2 Personas (Pareja)</option>
                      <option value="3">3 Personas</option>
                      <option value="4">4+ Personas</option>
                    </select>
                    {form.formState.errors.guests && <p className="text-destructive text-xs">{form.formState.errors.guests.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Comentarios o necesidades especiales</label>
                  <textarea 
                    {...form.register("comments")}
                    rows={3}
                    className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Menciona alergias, áreas de dolor, etc."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium text-lg hover:bg-primary/90 transition-all flex items-center justify-center disabled:opacity-70 mt-4 shadow-lg hover:shadow-primary/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    "Confirmar Reserva"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
