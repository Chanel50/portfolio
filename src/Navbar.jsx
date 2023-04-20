
import React from 'react';
import '../src/style/NavBar.css'
export default function Navbar() {
  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a href="/Notfaund" className="font-bold text-xl text-indigo-600">
          <img src="/images/chanel tech.png" alt="Project 4" className="rounded-t-lg w-full logo" />
          </a>
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
         
          <a
            href="/Apropos"
            className="p-2 lg:px-4 md:mx-2 text-gray-950 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 bg-indigo-600"
          >
            A propos
          </a>
          <a
            href="/Projets"
            className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Projets
          </a>
          <a
            href="/Competences"
            className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Compétences
          </a>
          <a
            href="/Contact"
            className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/Notfaund"
            className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
          >
            Login
          </a>
          <a
            href="/Notfaund"
            className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
}

