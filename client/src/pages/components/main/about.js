import React from "react";
import "../../../style/nouveaute.css";
import images from "../../../constantes/images";

export default function About() {
  return <div id="nouveaute__main-wrapper">
    <ul>
      <li className="bulle" />
      <li className="bulle" />
      <li className="bulle" />
      <li className="bulle" />
    </ul>
    <ul>
      <li className="bulle" />
      <li className="bulle" />
      <li className="bulle" />
      <li className="bulle" />
    </ul>
    <img src={images.group1} alt="Group 1" id="group1" />
    <div id="section__content">
      <h2>Qui Sommes-nous ?</h2>
      <p>
        Bienvenue chez <span className="keyword">MerryGlam Universe</span> , votre destination exclusive pour le maquillage semi-permanent à Casablanca. Nous sommes dévoués à sublimer votre beauté naturelle avec des techniques de maquillage durables. En plus de nos services spécialisés, notre équipe expérimentée propose des consultations et des diagnostics de peau personnalisés pour vous aider à créer une routine skincare adaptée à vos besoins uniques.</p>
    </div>
  </div>;
}
