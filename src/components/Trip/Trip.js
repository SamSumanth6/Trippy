import React from "react";
import "./Trip.css";
import TripData from "./TripData";
import Lakshadeep from "../../assests/lakshadeep.jpg";
import Bali from "../../assests/Bali.jpg";
import India from "../../assests/India.jpg";
import { Link } from "react-router-dom";

const Trip = ({ title }) => {
  return (
    <div className="trip">
      <h1>{title}</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <Link to="/india" className="trip-card">
          <TripData
            image={India}
            heading="Trip to India"
            text="India, a tapestry of cultures and landscapes, invites exploration:
            Discover the Taj Mahal in Agra, Rajasthan's forts, and Delhi's historic landmarks. Experience Kerala's tranquil backwaters and Goa's vibrant beaches. Explore the Himalayas' majestic peaks and the spiritual banks of the Ganges. India captivates with its diverse experiences and timeless charm."
          />
        </Link>

        <Link to="/bali" className="trip-card">
          <TripData
            image={Bali}
            heading="Trip to Bali"
            text="Bali, Indonesia’s gem, captivates with its stunning beaches like Kuta and Seminyak, perfect for surfing and sunbathing. Explore ancient temples such as Uluwatu and Tanah Lot, and indulge in Balinese culture through traditional dance and rituals. With vibrant nightlife and serene spa retreats, Bali offers a perfect blend of adventure and relaxation."
          />
        </Link>

        <Link to="/lakshadweep" className="trip-card">
          <TripData
            image={Lakshadeep}
            heading="Trip to Lakshadweep"
            text="Lakshadweep, a union territory of India in the Arabian Sea, consists of 36 islands known for their coral reefs and turquoise lagoons. Accessible by boat or plane, popular islands include Agatti and Kavaratti. Visitors enjoy water sports, snorkeling, and diving amidst pristine marine life, making it an ideal destination for relaxation and exploration."
          />
        </Link>
      </div>
    </div>
  );
};

export default Trip;
