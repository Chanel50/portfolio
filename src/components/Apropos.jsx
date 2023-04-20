import React from 'react';
import '../style/Apropos.css'
import '../Apropos'

export default function Apropos() {
    return (
      <div className='cnt'>
    <div className="flex flex-col md:flex-row justify-center items-center m-4 md:m-30">
    <div className="md:w-1/2 md:pr-4">
      <img className='img' src="\images\hh.png" alt="my-image" />
    </div>
    <div className="md:w-1/2 md:pl-4 md:text-left text-center">
      <p className='text'>Chanel HAMEL, une développeuse web passionnée par la création d'applications et de sites web performants et esthétiques. Depuis [année de début], j'ai acquis une solide expérience dans le développement front-end et back-end, ainsi que dans la conception d'interfaces utilisateur conviviales.

      Mon parcours professionnel m'a permis de travailler sur divers projets, de la création de sites vitrines à la réalisation d'applications web complexes pour des entreprises de différentes tailles. Je suis toujours à l'affût des dernières technologies et tendances en matière de développement web pour offrir des solutions innovantes et adaptées aux besoins de mes clients.

      Je suis également très attachée à la qualité de mon travail et à la satisfaction de mes clients. Je suis donc très rigoureuse dans mes processus de développement et je travaille en étroite collaboration avec mes clients pour m'assurer que leurs besoins sont bien compris et que les solutions développées répondent à leurs attentes.

      Enfin, je suis convaincue que la communication et la transparence sont essentielles pour assurer la réussite d'un projet. C'est pourquoi je m'efforce de maintenir une communication claire et régulière avec mes clients tout au long du processus de développement.

      N'hésitez pas à me contacter si vous avez besoin de mes services pour votre projet web !</p>
    </div>
  </div>

    
<section id="counter-stats" className="wow fadeInRight stat" data-wow-duration="1.4s">
  <div className="containerr">
    <div className='st'>
    <div className="row d-flex flex-row flex-nowrap">
      <div className="col-lg-3 stats">
        <i className="fa fa-code" aria-hidden="true"></i>
        <div className="counting" data-count="900000">87654</div>
        <h5>Lignes de codes</h5>
      </div>
      <div className="col-lg-3 stats">
        <i className="fa fa-check" aria-hidden="true"></i>
        <div className="counting" data-count="280">145</div>
        <h5>Projecs terminés</h5>
      </div>
      <div className="col-lg-3 stats">
        <i className="fa fa-user" aria-hidden="true"></i>
        <div className="counting" data-count="75">60</div>
        <h5>Clients satisfés</h5>
      </div>
      
    </div>
    </div>
  </div>
</section>

</div>    
    );
  }