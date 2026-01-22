import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/780542900.jpg?k=14f9b5f53159d774afee319ad30ec1c95fc31e5f0ab8a9e6ef7757dcd003c911&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/579099936.jpg?k=71c2aea7f2dcfb7a75f19b418ee94b4143087eb51885395cd97a29dbee3fa83b&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/570657375.jpg?k=fa6b3947daae479b1b0559f30ddc64336fac71069c45fd079e4dd98128a645e4&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/775069986.jpg?k=0c3faa6678a0b910a56c6c3897f353830960225e17b53ccb0cc85a0a6a0c3afc&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/774965214.jpg?k=a9b4ac100a7e3aef84c68848df9470fe5636646371c04b97a35524ef52aae7d1&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/570657377.jpg?k=c16bd58d5e2c075fbc6abefdf5481b4601a941cbc3fda007b62713eeff12a402&o=",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">7Seasons Apartments Budapest </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location -500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} className="hotelImg" alt="" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Featuring a 24-hour reception, the 7Seasons Apartments offers
                you spacious 1- to 3-bedroom apartments in the heart of
                Budapest, only 328 feet from Deak Ferenc tér, which is a major
                public transport hub. Wireless internet access is available in
                all apartments free of charge. Daily cleaning and shuttle
                service can be requested at a surcharge in advance. All
                apartments feature a kitchen to prepare your own meals, but you
                can also find lots of cafés, restaurants and a 24-hour
                supermarket in the immediate vicinity of 7Seasons Apartments.
                St. Stephen's Basilica, the Great Synagogue, the State Opera
                House and the Hungarian Parliament are easily reachable on foot.
                Couples in particular like the location – they rated it 9.6 for
                a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1></h1>
              <span></span>
              <h2>
                <b>$945</b> 9 nights
              </h2>
              <button>Reserve or book now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
