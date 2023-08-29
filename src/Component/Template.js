import React from "react";
import Footer from "./Footer";

const Template = ({ car }) => {
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="row">
          <div className="col-sm-3">
            <div className="thumbnail">
              <img src={car.imageUrl} alt="" width="250px" height="200px" />
            </div>
          </div>
          <div className="col-sm-9">
            <h6>
              <a href="">
                <span className="bi bi-heart design"></span>
              </a>
            </h6>
            <h3>{car.title}</h3>

            <h3>
              <b>
                {car.price}
                <sup>*</sup>
                <sub className="text-info">{car.priceNote}</sub>
              </b>
            </h3>
            <ul className="display">
              {car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="btn btn-outline-danger btn-block">
              View All Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarList = () => {
  const carData = [
    {
      imageUrl: "/Images/first.webp",
      title: "Maruti Suzuki FRONX",
      price: "Rs.7.46 - 13.13 Lakh",
      priceNote: "(Price in New Delhi)",
      features: ["Petrol/CNG", "20.01 kmpl to 28.51 km/kg", "Manual/Automatic"],
    },

    {
      imageUrl: "/Images/second.webp",
      title: "Maruti Suzuki FRONX",
      price: "Rs.7.46 - 13.13 Lakh",
      priceNote: "(Price in New Delhi)",
      features: ["Petrol/CNG", "20.01 kmpl to 28.51 km/kg", "Manual/Automatic"],
    },

    {
      imageUrl: "/Images/third.webp",
      title: "Maruti Suzuki FRONX",
      price: "Rs.7.46 - 13.13 Lakh",
      priceNote: "(Price in New Delhi)",
      features: ["Petrol/CNG", "20.01 kmpl to 28.51 km/kg", "Manual/Automatic"],
    },
    // Add more car data items here
  ];

  return (
    <div>
      {carData.map((car, index) => (
        <Template key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
