import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a Trilce</h1>
      <div className="flex justify-center gap-4">
        <Link to="/colegio">
          <button className="px-6 py-3 bg-blue-500 text-white rounded">Ir a Colegio</button>
        </Link>
        <Link to="/academia">
          <button className="px-6 py-3 bg-green-500 text-white rounded">Ir a Academia</button>
        </Link>
      </div>
    </div>
  );
}
