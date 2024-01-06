import React, { useState } from "react";
import axios from "axios";
import Container from "./UI/Container";

async function sendEmailHandler(email, message, nom) {
  const options = {
    method: "POST",
    url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_XRapidAPIKey,
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    data: {
      personalizations: [
        {
          to: [
            {
              email: import.meta.env.VITE_EMAIL,
            },
          ],
          subject: `${nom}, demond de servidor`,
        },
      ],
      from: {
        email,
      },
      content: [
        {
          type: "text/plain",
          value: message,
        },
      ],
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function Contact() {
  const [sending, setSending] = useState(false);

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    sendEmailHandler(email, message, nom);
    setSending(false);
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
          <h1 className="text-2xl md:text-4xl text-gold-500 font-bold mb-4">
            Contactez-Nous
          </h1>
          <form action="" className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Nom Complet"
              className="w-full bg-white border border-gray-300 text-black rounded py-3 px-3 outline-none"
              required
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white border border-gray-300 text-black rounded py-3 px-3 outline-none"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              placeholder="Message"
              className="w-full bg-white border border-gray-300 rounded text-black py-2 px-6 outline-none"
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <input
              type="submit"
              name="submit"
              className="w-full bg-gold-500 text-white rounded py-2 uppercase font-semibold cursor-pointer text-lg"
              value={sending ? "En coure..." : "Envoyer"}
            />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
