import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Prosím vyplňte všechna pole.");
      return;
    }
    toast.success("Zpráva byla odeslána! Ozvu se vám co nejdříve.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">Kontakt</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Napište <span className="italic">mi</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">Jméno</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                maxLength={100}
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                maxLength={255}
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">Zpráva</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-foreground text-primary-foreground font-body text-sm tracking-wide py-3 hover:bg-charcoal transition-colors"
            >
              Odeslat zprávu
            </button>
          </form>

          <div className="space-y-8 lg:pt-4">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-stone mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="font-body text-sm font-medium text-foreground">Telefon</p>
                <p className="font-body text-sm text-muted-foreground">+420 123 456 789</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-stone mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="font-body text-sm font-medium text-foreground">Email</p>
                <p className="font-body text-sm text-muted-foreground">katerina@urbanova.cz</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-stone mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="font-body text-sm font-medium text-foreground">Lokalita</p>
                <p className="font-body text-sm text-muted-foreground">Česká republika</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
