import React from "react";
import Countries from "../components/Countries/Countries";
import IndiaImg from "../assests/india-tm.jpg";

const India = () => {
  const placesInIndia = [
    {
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3Dl",
      heading: "Taj Mahal, Agra",
      text: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It is one of the Seven Wonders of the World, known for its architectural beauty and historical significance.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578999935853-4ec5fa6c1f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Jaipur, Rajasthan",
      text: "Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and is known for its palaces and forts, including the iconic Amber Fort and Hawa Mahal.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww",
      heading: "Goa Beaches",
      text: "Goa is a state in western India with coastlines stretching along the Arabian Sea. It's known for its beaches, ranging from popular stretches at Baga and Palolem to laid-back fishing villages. Goa is also famous for its vibrant nightlife and Portuguese heritage.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2VyYWxhJTIwQmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D",
      heading: "Kerala Backwaters",
      text: "Kerala, known as 'God's Own Country', is famous for its serene backwaters. The backwaters of Alleppey and Kumarakom offer picturesque landscapes with houseboat cruises, lush greenery, and traditional Kerala cuisine.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558184525-2218e8c34914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZ2VzJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D",
      heading: "Varanasi, Uttar Pradesh",
      text: "Varanasi, situated on the banks of the River Ganges, is one of the oldest continuously inhabited cities in the world. It is a major religious hub in India, known for its temples, ghats (riverfront steps), and Ganga Aarti ceremonies.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617824077840-0d7a0cd13448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVofGVufDB8fDB8fHww",
      heading: "Leh-Ladakh, Jammu & Kashmir",
      text: "Leh-Ladakh is renowned for its remote mountain beauty and Buddhist culture. The region offers breathtaking landscapes, including high-altitude lakes like Pangong Lake and Nubra Valley, along with adventurous trekking and Buddhist monasteries.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1665376620694-fc0c4bab7294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TXlzb3JlJTIwUGFsYWNlJTJDJTIwS2FybmF0YWthfGVufDB8fDB8fHww",
      heading: "Mysore Palace, Karnataka",
      text: "Mysore Palace is a historical palace and a royal residence located in the heart of Mysore city in Karnataka. Known for its Indo-Saracenic architecture, the palace hosts the famous Mysore Dasara festival and is a popular tourist destination.",
    },
    {
      image: "https://images.unsplash.com/photo-1576262517149-86507c5d419c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlYWNvY2t8ZW58MHx8MHx8fDA%3D",
      heading: "Ranthambore National Park, Rajasthan",
      text: "Ranthambore National Park is one of the largest national parks in northern India, known for its tiger population. The park's picturesque landscapes and historic Ranthambore Fort make it a popular destination for wildlife enthusiasts and photographers.",
    },
    {
      image: "https://images.unsplash.com/photo-1603097148068-564d0158227e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhJTIwcGxhbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Darjeeling, West Bengal",
      text: "Darjeeling is a hill town in West Bengal known for its tea industry and stunning views of the Himalayas. Visitors can enjoy the Darjeeling Himalayan Railway, explore tea plantations, and visit attractions like Tiger Hill for sunrise views.",
    },
  ];

  return (
    <div>
      <Countries places={placesInIndia} destination="INDIA" image={IndiaImg} />
    </div>
  );
};

export default India;
