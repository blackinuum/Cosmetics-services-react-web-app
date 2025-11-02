import React from "react";
import "../../../style/services.css";
import images from "../../../constantes/images";
import ServiceCard from "../subComponents/serviceCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
export default function Services({setAddToChart , setAddToFav}) {
  const [notify, setNotify] = useState(false);
  const [activatedCardIndex, setActivatedCardIndex] = useState(null);
  const activatedCard = (index) => {
    setActivatedCardIndex(index);
    console.log("activated card index : " + activatedCardIndex);
  };
const closeNotification = () => {
  setNotify(false);
}

  const services = [
    {
      service: "Microblading",
      description:
        "Le microblading est une technique de maquillage semi-permanent des sourcils. Elle utilise de fines incisions pour implanter des pigments dans la peau, créant des traits de sourcils naturels et bien définis. Cela donne l'illusion de sourcils plus pleins et façonnés, apportant un aspect esthétique et équilibré au visage. Le microblading offre une solution durable pour redéfinir les sourcils avec un résultat réaliste et harmonieux.",
      prix: "1200",
    },
    {
      service: "Microshading",
      description:
        "Le microshading est une autre technique de maquillage semi-permanent des sourcils. Contrairement au microblading qui utilise des traits fins, le microshading utilise des petites taches pour créer un effet de sourcils ombrés et plus remplis. Cela donne un aspect doux et poudré aux sourcils. C'est une excellente option pour ceux qui préfèrent un look plus doux et plus défini pour leurs sourcils.",
      prix: "1200",
    },
    {
      service: "Microneedling",
      description:
        "Le microneedling est une technique de soin de la peau non invasive qui utilise de minuscules aiguilles pour créer de micro-perforations dans la peau. Ces micro-perforations stimulent le processus naturel de régénération de la peau, favorisant ainsi la production de collagène et d'élastine. Cela peut améliorer la texture de la peau, atténuer les cicatrices, les rides et les imperfections, offrant ainsi un teint plus frais et plus uniforme. ",
      prix: "300",
    },
    {
      service: "Glacage des lèvres",
      description:
        "Le glaçage des lèvres est un maquillage semi-permanent visant à accentuer la teinte naturelle et la forme des lèvres. Des pigments spéciaux sont délicatement appliqués pour créer un léger glaçage subtil, rehaussant la couleur et redéfinissant le contour. L'objectif est d'obtenir des lèvres plus vibrantes, mieux définies et légèrement volumineuses, tout en préservant un aspect naturel flatteur.",
      prix: "1200",
    },
    {
      service: "Produits cosmétiques",
      description:
        "Les produits cosmétiques regroupent une variété d'articles conçus pour améliorer l'apparence et l'hygiène corporelle. Ils comprennent le maquillage, les soins de la peau, les parfums, les produits capillaires et bien plus encore. Ces produits visent à embellir, nettoyer, hydrater et parfumer la peau, les cheveux et les ongles. ",
      prix: ">180",
    },
    {
      service: "Brow Lift",
      description:
        "Le brow lift, ou lifting des sourcils, est une procédure esthétique visant à rehausser et remodeler la position des sourcils. Généralement effectué par un chirurgien plasticien, ce procédé peut être réalisé de manière chirurgicale ou non chirurgicale. Dans un lifting chirurgical, les tissus du front sont repositionnés pour créer un aspect plus rajeuni et esthétique. ",
      prix: "500",
    },
  ];
  return (
    <div id="services-main__container">
      <div id="motif__container">
        <img src={images.motif} alt="Motif en arrière plan" />
      </div>
      <div id="servicesHeader">
        <img src={images.shines} alt="shines icon" className="shiningIcone" />
        <h2>Explorez notre Éventail de Services Exclusifs !</h2>
        <img src={images.shines} alt="shines icon" className="shiningIcone" />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {services.map((service, key) => {
          return (
            <SwiperSlide>
              <ServiceCard
                service={service}
                index={key}
                setNotify = {setNotify}
                setActivatedCardIndex={setActivatedCardIndex}
                setAddToChart = {setAddToChart}
                setAddToFav = {setAddToFav}
                activatedCardIndex={activatedCardIndex}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
