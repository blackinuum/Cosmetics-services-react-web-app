import React from "react";
import "../../../style/navBar.css";
import { useState } from "react";
import { MdManageAccounts } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";


export default function NavBar({ setChartVisibility, chartVisibility, setWishVisibility, wishVisibility, addToChart, addToFav }) {
  const [isLogged, setIsLogged] = useState(true);
  const showChart = () => {
    setWishVisibility(false);
    setChartVisibility(true);
  }
  const showWish = () => {
    setChartVisibility(false);
    setWishVisibility(true);
  }
  return (
    <div id="navContainer">
      <div id="logo__container">
        <h3>MerryGlam UV</h3>
      </div>
      <div id="navigation__container">
        <ul>
          <li><Link
            activeClass="activeLink"
            to="services"
            spy={true}
            smooth={true}
            offset={-300}
            duration={750}
          >
            <p>Nos Services</p>
          </Link></li>

          <Link
            activeClass="activeLink"
            to="produitsAcceuil"
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
          >
            <li>Nos Produits</li>
          </Link>
          <Link
            activeClass="activeLink"
            to="offres"
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
          >
            <li>Nos Packs</li>
          </Link>
          <Link
            activeClass="activeLink"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
          >
            <li>À propos</li>
          </Link>
        </ul>
      </div>
      {!isLogged ? (
        <div id="buttons__container">
          <div id="auth" className="navButtons">
            <AiFillLock className="lock" /><h3>S'authentifier</h3>
          </div>
        </div>
      ) : (
        <div id="user__interact-container">
          <ul id="user__actions">
            <li>
              <MdManageAccounts className="list-action__icon" />
            </li>
            <li className="list">
              <div className={`count wish ${addToFav && "item_added"}`}>2</div>
              <BsHeartFill className={`list-action__icon heart ${wishVisibility && "icon_clicked"}`} onClick={showWish} />
            </li>
            <li className="list">
              <div className={`count ${addToChart && "item_added"}`}>5</div>
              <FaShoppingBasket className={`list-action__icon list ${chartVisibility && "icon_clicked"}`} onClick={showChart} />
            </li>
            <li>
              <IoMdLogOut className="list-action__icon" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
