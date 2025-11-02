import React from "react";
import "../../../style/contacts.css";
import {BiCopyright , BiLogoGmail} from "react-icons/bi";
import {AiFillPhone} from "react-icons/ai";

export default function Contacts() {
  return <div id="contacts__container">
    <ul>
        <li><AiFillPhone className="contacts-icon" /><h5>+212 671 471 559</h5> </li>
        <li><BiCopyright className="contacts-icon" /><h5>Copyright 2023 - MerryGlam Uv.</h5> </li>
        <li><BiLogoGmail className="contacts-icon" /><h5>merryglam.universe@gmail.com</h5> </li>
    </ul>
  </div>;
}
