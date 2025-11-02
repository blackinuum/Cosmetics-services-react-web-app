import React from "react";
import "../../../style/wish.css";
import { MdClose } from "react-icons/md";
import { BiSolidCartAdd } from "react-icons/bi";
import { IoHeartDislikeSharp } from "react-icons/io5";


export default function Wish({ setWishVisibility, wishVisibility }) {
    const hideWish = () => {
        setWishVisibility(false);
    }
    return <div id="wish-list__container">
        <div id="close__list">
            <MdClose className="closing__icon" onClick={hideWish} />
        </div>
        <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nom du service</th>
                    <th>Prix</th>
                    <th>Ajouter au panier</th>
                    <th>Retirer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Microblading</td>
                    <td>1200 dhs</td>
                    <td><BiSolidCartAdd className="wishList__icon cart" /></td>
                    <td><IoHeartDislikeSharp className="wishList__icon unlike" /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Microblading</td>
                    <td>1200 dhs</td>
                    <td><BiSolidCartAdd className="wishList__icon cart" /></td>
                    <td><IoHeartDislikeSharp className="wishList__icon unlike" /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Microblading</td>
                    <td>1200 dhs</td>
                    <td><BiSolidCartAdd className="wishList__icon cart" /></td>
                    <td><IoHeartDislikeSharp className="wishList__icon unlike" /></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Microblading</td>
                    <td>1200 dhs</td>
                    <td><BiSolidCartAdd className="wishList__icon cart" /></td>
                    <td><IoHeartDislikeSharp className="wishList__icon unlike" /></td>
                </tr>
            </tbody>
        </table>
    </div>;
}
