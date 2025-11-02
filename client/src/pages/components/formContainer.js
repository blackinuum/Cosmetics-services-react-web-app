import React from "react";
import images from "../../constantes/images";
import Signup from "./subComponents/signup";
import Login from "./subComponents/login";
import { useState } from "react";

export default function FormContainer() {
  const [changeToSignUp, setChangeToSignUp] = useState(false);
  const [changeToLogin , setChangeToLogin] = useState(false);

  const activateChangeToSignUp = () => {
    setChangeToLogin(false);
    setChangeToSignUp(true);
  }
  const activateChangeToLogin = () =>{
    setChangeToSignUp(false);
     setChangeToLogin(true);
  }
  return (
    <div id="forms__container">
      <div id="banner__wrapper" className={`${changeToSignUp && "swipe-right"}`}>
        <div id="bannerContent">
          <div id="front" className={`${changeToSignUp ? "hidden" : "display"}`}>
            <p>Connectez-vous. <br /> Rejoignez-nous pour briller !</p>
            <button onClick={activateChangeToSignUp}>Créer un compte</button>
          </div>
          <div id="back" className={`${changeToSignUp ? "display" : "hidden"}`}>
            <p>Découvrez la beauté personnalisée. <br /> Rejoignez-nous pour briller !</p>
            <button onClick={activateChangeToLogin}>J'ai déjà un compte</button>
          </div>
        </div>
        <img src={images.authentificationBanner} alt="Beauticien and client" id="authBanner" />
      </div>
      <div id="forms__wrapper" className={`${changeToSignUp && "swipe-left"}`}>
        <div id="form__logo-container">
          <img src={images.logo} alt="MerryGlam Universe" id="form-logo" />
        </div>
        <div id="form__content">
          <Login />
          <Signup active={changeToSignUp} />
        </div>
      </div>
    </div>
  );
}
