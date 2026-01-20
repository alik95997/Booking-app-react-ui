import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Karachi</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/999839.jpg?k=0c48abf88150a98bc1ec9280347e9ea97f41265ebfc439c53a5b8fec61ab4fa5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Istanbul</h1>
          <h2>223 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
