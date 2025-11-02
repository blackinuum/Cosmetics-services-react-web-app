import React from "react";
import "../../../style/acceuil.css";
import {BsFillEnvelopeOpenHeartFill} from "react-icons/bs";
import images from "../../../constantes/images";

export default function Acceuil() {
  return (
    <div id="acceuil__container">
      <div id="acceuil__main">
        <div id="skin-care__container">
          <img
            src={images.model_image}
            alt="happy customers"
            id="acceuil_image"
          />
        </div>
        <div id="acceuil__welcoming">
          <img src={images.welcomingBG} alt="arrière plan" id="welcoming-BG" />
          <div id="welcoming__content">
            <img src={images.logo} alt="MerryGlam Universe Logo" id="logo" />
            <div id="banner">
                <h2>
                  Bienvenue Chez{" "}
                  <span className="text__typing"> MerryGlam Universe !</span>
                </h2>
                <p>
                  Découvrez une beauté durable et une peau éclatante avec notre
                  gamme de services de maquillage semi-permanent et de
                  consultations spécialisées pour la peau !
                </p>
                <div id="buttonContainer">
                  <button><h4>Contacter-Nous</h4><BsFillEnvelopeOpenHeartFill className="enveloppe"/></button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div id="acceuil__footer">
        <div>
          <ul>
            <li>
              <img
                className="icones-reseaux-sociaux"
                src={images.facebook}
                alt="icone de facebook"
              />
            </li>
            <li>
              <img
                className="icones-reseaux-sociaux"
                src={images.instagram}
                alt="icone d'Instagram"
              />
            </li>
            <li>
              <img
                className="icones-reseaux-sociaux"
                src={images.youtube}
                alt="icone de youtube"
              />
            </li>
            <li>
              <img
                className="icones-reseaux-sociaux"
                src={images.tiktok}
                alt="icone de tiktok"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
