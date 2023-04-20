import React from 'react';
import '../style/Projets.css'
export default function Projets() {
    return (
    <div>
      <section id="projets" className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">Projets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md">
        <img src="\images\Escape (2).png" alt="Project 1" className="rounded-t-lg w-full imgi" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Site web pour l'agence de voyage Escape</h3>
          <p className="text-gray-700 mb-4">Le site web Escape représente une agence de voyage professionnelle et expérimentée offrant une variété de forfaits de voyage. Le design du site est à la fois élégant et ludique, avec des images colorées et des icônes pour aider les visiteurs à naviguer facilement dans le site.</p>
          <a href="/Notfaund" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-600">Voir le projet</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <img src="\images\CineStream (4).png" alt="Project 2" className="rounded-t-lg w-full  imgi" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Application web de streaming</h3>
          <p className="text-gray-700 mb-4">L'application web de streaming est une plateforme de diffusion en continu de films et de séries TV en ligne. Le design de l'application est élégant et intuitif, offrant une expérience de visionnage de qualité pour les utilisateurs.</p>
          <a href="/Notfaund" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-600">Voir le projet</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <img src="\images\1 (2).png" alt="Project 3" className="rounded-t-lg w-full  imgi" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Une application web pour l'école SkillsBuilders</h3>
          <p className="text-gray-700 mb-4">L'application web de SkillsBuilders est une plateforme éducative en ligne pour les étudiants et les enseignants. Le design de l'application est simple et fonctionnel, avec des couleurs vives pour un look jeune et dynamique.</p>
          <a href="/Notfaund" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-600">Voir le projet</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <img src="/images/3.png" alt="Project 4" className="rounded-t-lg w-full  imgi" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Application web pour le cabinet médical "santévie"</h3>
          <p className="text-gray-700 mb-4">L'application web de Santévie est une plateforme en ligne pour les patients et le personnel médical du cabinet. Le design de l'application est professionnel et épuré, offrant une expérience utilisateur conviviale et facile à utiliser</p>
          <a href="/Notfaund" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-600">Voir le projet</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <img src="/images/5.png" alt="Project 4" className="rounded-t-lg w-full  imgi" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Site web pour BNP Paribas El Djazaïr</h3>
          <p className="text-gray-700 mb-4">Le site web de BNP Paribas El Djazaïr est une plateforme en ligne pour les clients de la banque en Algérie. Le design de la page d'accueil est épuré et professionnel, avec des couleurs bleues et blanches pour rappeler les couleurs de la marque.</p>
          <a href="/Notfaund" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-600">Voir le projet</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <img src="\images\home.png" alt="Project 4" className="rounded-t-lg w-full  imgi" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2"> Site web pour HomeDeco startup</h3>
          <p className="text-gray-700 mb-4">Le site web DecoHome représente une nouvelle startup de design d'intérieur pour la maison. Le design du site est élégant et moderne, avec des images de haute qualité pour montrer les compétences et les projets de l'entreprise. La page d'accueil contient une bannière qui présente la mission et la vision de l'entreprise, ainsi que des informations sur les services proposés.</p>
          <a href="/Notfaund" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-600">Voir le projet</a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

    );
  }
  