import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-center text-white ">
      <div className="bg-blue-500 p-4 text-center text-white">
        © {new Date().getFullYear()} Copyright:
        <a className="dark:text-neutral-400" href="#">
          Gestão de Eventos
        </a>
      </div>
    </footer>
  );
}
