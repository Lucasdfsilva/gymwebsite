import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          Sobre
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4 text-2xl ">
          <p>
            Seu bem-estar é sua maior riqueza. Quer seja alcançar
            saúde ideal ou melhorar sua jornada de condicionamento físico, estamos aqui para
            apoiá-lo em cada passo do caminho.
            <p>
              Em nossa academia, nossa equipe de personal trainers certificados,
              equipe atenciosa e gerenciamento experiente são dedicados a
              promover um ambiente acolhedor.
            </p>
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;