// Importez les modules nécessaires
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import 'react-calendar/dist/Calendar.css';
import Container from "./UI/Container";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICEKEY,
        import.meta.env.VITE_TEMPLATEKEY,
        formRef.current as HTMLFormElement,
        import.meta.env.VITE_PUBLICKEY
      );
      console.log(result);

      if (result.text === "OK") formRef.current?.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);

      // Affichez un message d'erreur à l'utilisateur ou prenez d'autres mesures nécessaires.
    }
  };



  return (
    <Container>
      <div className="contact-in mx-auto flex flex-col-reverse md:flex-row flex-wrap gap-6 rounded-lg shadow-md" id="contact">
        <div className="contact-map w-full md:w-1/2 h-96 lg:h-[460px] rounded overflow-hidden">
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
          <h1 className="text-2xl md:text-4xl font-bold mb-4" id="change">
            Contactez-Nous
          </h1>
          <form action="" className="space-y-4" onSubmit={sendEmail} ref={formRef}>
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
            <textarea
              name="message"
              placeholder="Message"
              className="w-full bg-white border border-gray-300 rounded text-black py-2 px-3 outline-none custom-textarea" // Ajoutez la classe custom-textarea
              rows={5}
            ></textarea>
            <input
              name="from_date"
              type="date"
              placeholder="date"
              className="w-full bg-white border border-gray-300 text-black rounded py-3 px-3 outline-none appearance-none focus:outline-none focus:border-gray-300 custom-date-input" // Ajoutez la classe custom-date-input
              lang="fr"
              required
            />
            <input
              type="submit"
              name="submit"
              className="w-full text-white rounded py-2 uppercase font-semibold cursor-pointer text-lg" id="changebtn"
            />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
