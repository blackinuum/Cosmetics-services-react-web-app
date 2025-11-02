import React from "react";
import "../../../style/offres.css";
import {AiFillGift} from "react-icons/ai";
import { useState } from "react";
import images from "../../../constantes/images";
import Pack from "../subComponents/pack";

export default function Offres() {
  const [packSelected , setPackSelected] = useState(0);
  const [packs , setPacks] = useState([
    {
      nom : "Pack peau grasse",
      description : "Obtenez une peau matifiée, sans imperfections et éclatante avec notre pack de soins de la peau pour peau grasse. La niacinamide réduit l'excès de sébum, l'acide salicylique élimine les impuretés, et l'acide glycolique exfolie en douceur pour une peau impeccable. Prenez soin de votre peau dès aujourd'hui !",
      image : images.packI,
    },
    {
      nom : "Pack peau mature",
      description : "Retrouvez une peau mature rajeunie avec notre Pack Soin Peau Mature. L'acide hyaluronique hydrate en profondeur, le rétinol atténue les signes du vieillissement. Dites adieu aux rides, ridules, sécheresse et manque d'éclat. Rajeunissez votre peau dès aujourd'hui !",
      image : images.packII,
    },
    {
      nom : "Pack peau pigmentée",
      description : "Révélez une peau éclatante et uniforme avec notre Pack Soin Peau Pigmentée. Les tâches brunes, le mélasma et les tâches blanches sont notre priorité. L'alpha arbutin réduit les tâches brunes, l'acide glycolique exfolie en douceur, et l'acide hyaluronique hydrate en profondeur. Offrez à votre peau le traitement qu'elle mérite et obtenez un teint lumineux dès aujourd'hui !",
      image : images.packIII,
    },
    {
      nom : "Pack peau acnéique",
      description : "Combattez l'acné, les rougeurs, l'inflammation et les pores dilatés avec notre Pack Soin Peau Acnéique. L'acide salicylique combat l'acné, la niacinamide apaise les rougeurs et l'inflammation, tandis que l'acide hyaluronique hydrate en profondeur. Obtenez une peau claire et lisse dès aujourd'hui !",
      image : images.packIV,
    }
  ])
  const selectPack = (index) => {
    setPackSelected(index);
  }
  return <div id="offres__container">
  <img src={images.rose} alt="Dessin fleur" id="rose" className="offres__decorations"/>
  <div className="quote"><p>Healthy skin is not an overnight process !</p></div>
    <div id="packs">
      <h2>
        Découvrez nos packs exceptionnels!
      </h2>
      <ul>
      {
        packs.map((pack , key) => {
          return <li className={`${(packSelected === key) && "selected"}`} onClick={() => selectPack(key)}><AiFillGift className="pack__icon" /><h4>{pack.nom}</h4></li>
        })
      }
      </ul>
    </div>
    <Pack pack={packs[packSelected]}/>
  </div>;
}
