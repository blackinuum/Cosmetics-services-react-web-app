import React from "react";
import images from "../../../constantes/images";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";

export default function ServiceCard({
  service,
  index,
  setNotify,
  setActivatedCardIndex,
  activatedCardIndex,
  setAddToChart,
  setAddToFav
}) {
  const [favoris, setFavoris] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleFavoris = async() => {
    !favoris && setNotify(true);
    setFavoris(!favoris);
    setAddToFav(true);
    setTimeout(function() {
      setAddToFav(false);
}, 1000);
  };
  const toggletToActivate = (cardIndex) => {
    setActivatedCardIndex(cardIndex);
  };
  const addToChart = () => {
    setAddToChart(true);
    setTimeout(function() {
      setAddToChart(false);
}, 1000);
  }
  return (
    <>
        <div
          id="service"
          className={`${(activatedCardIndex === index) && "active"}`}
        >
          <div id="front_card">
          <div id="discount">
                <img src={images.discount} alt="discount" id="discount__icon" />
              </div>
            <div id="ancien_prix">
              <p>
                <del> 300 DH</del>
              </p>
            </div>
            <div id="favorisButton__container">
              <BsHeartFill
                className={`favorisButton ${favoris ? "clicked" : ""}`}
                onClick={toggleFavoris}
              />
            </div>
            <div id="service-header" onClick={() => toggletToActivate(index)}>
              <h3>{service.service}</h3>
              <img src={images.wax} alt="Letter seal" id="wax" />
            </div>
            <div id="service-description" onClick={() => toggletToActivate(index)}>
              <p>{service.description}</p>
            </div>
            <div id="service-price">
              <div id="prix_actuel">
                <p>{service.prix} DH</p>
                <img src={images.banner} alt="banner" className="banner" />
              </div>
            </div>
          </div>
          <div id="back_card" onClick={toggletToActivate}>
          <div id="top__decoration">
            <img src={images.flower} alt="Red Rose" />
          </div>
            <div id="addtoBasket">
              <FaShoppingBasket className="basket__icon" />
              <h4 onClick={addToChart}>Ajouter au panier</h4>
            </div>
          </div>
        </div>
    </>
  );
}
