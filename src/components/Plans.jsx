import React from "react";
import PlansCard from "../layouts/PlansCard";

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center">Planos</h1>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">
        <PlansCard title="Bronze" price="50" />
        <PlansCard title="Ouro" price="100" />
        <PlansCard title="Platina" price="200" />
      </div>
    </div>
  );
};

export default Plans;