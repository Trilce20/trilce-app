import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header className="p-4 bg-blue-600 text-white">
        <h1>Trilce</h1>
      </header>

      <main className="p-6">
        <Outlet /> {/* Aquí se renderizan Home, Colegio, Academia */}
      </main>

      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2025 Trilce
      </footer>
    </div>
  );
}
