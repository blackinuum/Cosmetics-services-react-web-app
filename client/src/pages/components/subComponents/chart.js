import React from "react";
import "../../../style/chart.css";
import { GiCardDiscard } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";

export default function Chart({ setChartVisibility, chartVisibility }) {
    const hideChart = () => {
        setChartVisibility(false);
    }
    return <div id="chart__container">
        <div id="close__list">
            <MdClose className="closing__icon" onClick={hideChart} />
        </div>
        <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nom du service</th>
                    <th>Prix</th>
                    <th>Retirer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Microblading</td>
                    <td>1200 dhs</td>
                    <td><GiCardDiscard className="panier__icon" /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Microblading</td>
                    <td>1200 dhs</td>
                    <td><GiCardDiscard className="panier__icon" /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Microblading</td>
                    <td>1200 dhs</td>
                    <td><GiCardDiscard className="panier__icon" /></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Microblading</td>
                    <td>1200 dhs</td>
                    <td><GiCardDiscard className="panier__icon" /></td>
                </tr>
            </tbody>
        </table>
        <div id="price__footer">
            <button id="rv"><TfiAgenda className="agenda" /><h5>Prendre un rendez-vous</h5></button>
            <h5>Montant : 3600 dhs</h5>
        </div>
    </div>;
}
