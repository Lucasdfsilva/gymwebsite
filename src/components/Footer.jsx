import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const newDate = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#222] mt-5 rounded-t-3xl py-8">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <Link to="/">
            <h1 className="font-semibold text-2xl text-brightRed">
              Start Gym
            </h1>
          </Link>
          <p className="mt-4">
            O melhor destino fitness em Sorocaba, para homens e mulheres.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed">Endereço</h1>
          <p className="mt-4">
            Plot 339 Block R2 Johar Town Lahore, 54000 Pakistan
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed">Horário de Funcionamento</h1>
          <ul className="mt-4">
            <li>Seg-Sab: 05:00 AM – 22:00 PM</li>
            <li>Dom: 07:00 - 13:00</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed ">Contact</h1>
          <div className="flex flex-row items-center mt-4">
            <AiTwotonePhone size={20} />
            <p className="ml-2">+55 15 - 123456789</p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <AiOutlineMail size={20} color="red" />
            <p className="ml-2">startgym@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center">
          © <span className="text-brightRed">Start Gym</span> | {newDate}
        </p>
      </div>
    </div>
  );
};

export default Footer;