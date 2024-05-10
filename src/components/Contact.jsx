import React from "react";
import Button from "../layouts/Button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-20">
          <h1 className="text-5xl font-semibold text-center">Contato</h1>
          <div className="flex flex-col">
            <label htmlFor="userName">Nome</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="text"
              name="userName"
              id="userName"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Seu E-mail</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Digite seu E-mail"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Celular</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Digite seu numero"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userMessage">Mensagem</label>
            <textarea
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              name="userMessage"
              id="userMessage"
              rows="4"
              placeholder="Digite sua Mensagem"
            ></textarea>
          </div>
          <div className="flex flex-row justify-center space-x-4">
            <Button title="Enviar" />
            <Button title="WhatsApp" href="tel:+55" />
          </div>
        </form>
        <div className="flex flex-row items-center w-full md:w-2/4 my-5">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108915.64214412407!2d74.19009261029682!3d31.452296963075824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901246c16dbad%3A0x9fb71f55f2cb6a59!2sLevels%20gym!5e0!3m2!1sen!2s!4v1709278409350!5m2!1sen!2s"
            width="500"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;