import React from "react";
import "../../../style/produits_acceuil.css";
import images from "../../../constantes/images";
import {BsArrowRight} from "react-icons/bs";

export default function ProduitsAcceuil() {
  return (
    <div id="produits-acceuil__container">
    <div id="half__page" />
      <div id="produits-acceuil__header">
      <img src={images.shines} alt="shines icon" className="shiningIcone" />
        <h2>La Boutique Skin Care : Découvrez nos Offres Exclusives !</h2>
        <img src={images.shines} alt="shines icon" className="shiningIcone" />
      </div>
      <div id="produits-acceuil__body">
        <div id="text__side">
          <p>
            Nous sommes fiers de vous proposer une sélection soigneusement
            choisie de produits cosmétiques de haute qualité, conçus pour
            répondre aux besoins spécifiques de votre peau. Que vous recherchiez
            des solutions pour l'hydratation, le rajeunissement cutané, l'éclat
            ou la lutte contre les imperfections, notre gamme de produits offre des formulations efficaces et éprouvées.
          </p>
          <button>
           <h5>Explorez les produits</h5>
           <BsArrowRight className="rightArrow" />
          </button>
        </div>
        <div id="image__container">
        <img src={images.produits} alt="Produits the ordinary" id="produits" />
        </div>
      </div>
    </div>
  );
}
