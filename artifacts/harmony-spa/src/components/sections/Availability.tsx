export function Availability() {
  const handleSlotClick = (date: Date, time: string, isAvailable: boolean) => {
    if (!isAvailable) return;
    
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('prefill-datetime', { 
        detail: { date, time } 
      }));
    }
  };

  const days = [
    { name: "Lunes", date: new Date(new Date().setDate(new Date().getDate() + 1)) },
    { name: "Martes", date: new Date(new Date().setDate(new Date().getDate() + 2)) },
    { name: "Miércoles", date: new Date(new Date().setDate(new Date().getDate() + 3)) },
    { name: "Jueves", date: new Date(new Date().setDate(new Date().getDate() + 4)) },
    { name: "Viernes", date: new Date(new Date().setDate(new Date().getDate() + 5)) },
  ];

  const slots = [
    { time: "09:00", states: ["available", "limited", "available", "unavailable", "available"] },
    { time: "11:00", states: ["available", "available", "unavailable", "limited", "available"] },
    { time: "14:00", states: ["limited", "available", "available", "available", "unavailable"] },
    { time: "16:00", states: ["unavailable", "limited", "available", "available", "available"] },
    { time: "18:00", states: ["available", "available", "limited", "unavailable", "available"] },
  ];

  const getStateStyles = (state: string) => {
    switch(state) {
      case "available": return "bg-[#5D7052]/20 text-[#5D7052] hover:bg-[#5D7052] hover:text-white cursor-pointer border border-[#5D7052]/30";
      case "limited": return "bg-[#C89F82]/20 text-[#C89F82] hover:bg-[#C89F82] hover:text-white cursor-pointer border border-[#C89F82]/30";
      case "unavailable": return "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200";
      default: return "";
    }
  };

  const getStateLabel = (state: string) => {
    switch(state) {
      case "available": return "Disponible";
      case "limited": return "Pocas citas";
      case "unavailable": return "Ocupado";
      default: return "";
    }
  };

  return (
    <section id="availability" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Disponibilidad</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Consulta nuestros horarios más próximos y reserva tu espacio con antelación. Haz clic en un horario disponible para agendar tu cita.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#5D7052]"></div>
              <span className="text-sm font-medium text-muted-foreground">Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#C89F82]"></div>
              <span className="text-sm font-medium text-muted-foreground">Pocas citas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="text-sm font-medium text-muted-foreground">No disponible</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-6 md:p-10 shadow-lg border border-border overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-6 gap-4 mb-6">
              <div className="text-center font-serif text-lg text-foreground">Hora</div>
              {days.map((day, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-lg text-foreground">{day.name}</div>
                  <div className="text-sm text-muted-foreground">{day.date.getDate()}/{day.date.getMonth() + 1}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {slots.map((slot, i) => (
                <div key={i} className="grid grid-cols-6 gap-4 items-center">
                  <div className="text-center font-medium text-muted-foreground">
                    {slot.time}
                  </div>
                  {slot.states.map((state, j) => (
                    <div 
                      key={j}
                      onClick={() => handleSlotClick(days[j].date, slot.time, state !== "unavailable")}
                      className={`py-3 px-2 rounded-xl text-center text-sm font-medium transition-all ${getStateStyles(state)}`}
                      title={getStateLabel(state)}
                    >
                      {state !== "unavailable" ? "Reservar" : "-"}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
