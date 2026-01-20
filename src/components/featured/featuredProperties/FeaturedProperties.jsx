import React from "react";
import "./featuredproperties.css";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Old Town, Poland, Krakow</span>
        <span className="fpPrice">Startinf from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/780542900.webp?k=907bad45bff33184b30e6b9b957c1621d303e4e3d01fe6441788fc11d96e81dd&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
        <span className="fpPrice">Startinf from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/74529578.webp?k=2d2774a16aa0d58fe1fd0a467c57c6adf188344d7e908f7fd775ba17555259d5&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">P&J Luxury Apartments</span>
        <span className="fpCity">Old Town, Poland, Krakow</span>
        <span className="fpPrice">Startinf from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Downtown Synagogue</span>
        <span className="fpCity">07. Erzsébetváros, Hungary, Budapest</span>
        <span className="fpPrice">Startinf from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
