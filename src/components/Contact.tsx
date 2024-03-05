import { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Container from "./UI/Container";

function Contact() {
  const form = useRef<HTMLFormElement>();
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      emailjs.init("UngTKy8NU3KgRf5d7");
    };
    document.head.appendChild(script);

    return () => {
      // Nettoyer le script si le composant est démonté
      document.head.removeChild(script);
    };
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // Vous pouvez maintenant utiliser la valeur de selectedDate lors de l'envoi de l'e-mail
    emailjs
      .sendForm(
        "service_kvitzpf",
        "template_n48o0n8",
        form.current as HTMLFormElement,
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            form.current?.reset();
            // Réinitialise également la date sélectionnée après l'envoi réussi si nécessaire
            setSelectedDate("");
            alert("Le formulaire a été envoyé avec succès !");
          }
        },
        (error) => {
          alert("Erreur lors de l'envoi du formulaire" + error.text);
        }
      );
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <Container> 
      <div
        className="contact-in mx-auto flex flex-col-reverse md:flex-row  flex-wrap gap-6 rounded-lg shadow-md"
        id="contact"
      >
        <div className="contact-map w-full md:w-1/2 h-96 lg:h-[450px] rounded overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403.29732667471893!2d-8.026097540669996!3d31.64045361902678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefd6389db92d%3A0x12e1001e44ff891!2sBeldi%20Fusion%20Kitchen!5e0!3m2!1sfr!2sma!4v1702994126442!5m2!1sfr!2sma"
            className="w-full h-full"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-form w-full md:w-1/2 flex-1 text-center">
          <h1 className="text-2xl md:text-4xl  font-bold mb-4" id="change">
            Contactez-Nous
          </h1>
          <form action="" className="space-y-4" onSubmit={sendEmail} ref={form as React.RefObject<HTMLFormElement>}>
            <input
              name="from_name"
              type="text"
              placeholder="Nom Complet"
              className="w-full bg-white border border-gray-300 text-black rounded py-3 px-3 outline-none"
              required
            />
            <input
              name="from_email"
              type="email"
              placeholder="Email"
              className="w-full bg-white border border-gray-300 text-black rounded py-3 px-3 outline-none"
              required
            />
            <input
              type="date"
              name="date"  // This should match the field name used in sendForm
              placeholder="Précisez votre date"
              className="w-full bg-white border border-gray-300 rounded text-black py-2 px-3 outline-none"
              value={selectedDate}
              onChange={handleDateChange}
              required
            />
            <div className="checkliste">
              <div>
                <input type="checkbox" name="telephonique" id="telephonique"/> Rendez-vous téléphonique
              </div>
              <div>
                <input type="checkbox" name="place" id="place"/> Rendez-vous sur place
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full bg-white border border-gray-300 rounded text-black py-2 px-3 outline-none"
              rows={5}
            ></textarea>
            <input
              type="submit"
              name="submit"
              className="w-full  text-white rounded py-2 uppercase font-semibold cursor-pointer text-lg" id="changebtn"
            // value={sending ? "En coure..." : "Envoyer"}
            />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
