import React from "react";

export default function Pack({pack}) {
    return <div id="packs__description">
        <div id="pack__image-container">
            <img src={pack.image} alt="Pack Poster" id="pack__image" />
        </div>
        <p>{pack.description}</p>
    </div>;
}
