import React from "react";
import "./Destination.css";
import DestinationData from "./destinationData";
import Kashmir1 from "../../assests/kashmir1.jpg";
import Kashmir2 from "../../assests/kashmir2.jpg";
import Kerala1 from "../../assests/Kerala1.jpg";
import Kerala2 from "../../assests/Kerala2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oportunity to see a lot, within a time frame.</p>
      <DestinationData
        cName="first-des"
        heading="Kashmir, India"
        text="One of the most iconic destinations in Luzon, Taal Volcano boasts a volcano inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        img1={Kashmir1}
        img2={Kashmir2}
      />
      <DestinationData
        cName="first-des-reverse"
        heading="Kerala, India"
        text="Kerala, known as 'God's Own Country,' enchants with lush greenery, serene backwaters, and captivating coastlines. From the misty hills of Munnar to tranquil backwaters of Alleppey, it offers diverse experiences. Glide through palm-fringed canals on a houseboat or trek the Western Ghats for wildlife. Rich cultural heritage, vibrant festivals, and delightful cuisine like Appam with Stew add to its charm. Enjoy Kerala's tropical climate year-round for a rejuvenating getaway."
        img1={Kerala1}
        img2={Kerala2}
      />
    </div>
  );
};

export default Destination;
