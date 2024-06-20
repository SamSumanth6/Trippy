import React from "react";
import Countries from "../components/Countries/Countries";
import BaliImg from "../assests/bali-tm.jpg";

const Bali = () => {
  const placesInBali = [
    {
      image:
        "https://images.unsplash.com/photo-1551008475-4533d141425b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEt1dGElMjBCZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Kuta Beach",
      text: "Kuta Beach is one of Bali's most famous beaches, known for its surfing opportunities and vibrant nightlife. It offers golden sands, clear waters, and stunning sunsets, making it a popular spot for tourists and locals alike.",
    },
    {
      image:
        "https://theworldtravelguy.com/wp-content/uploads/2020/11/DJI_0943_1200.jpg",
      heading: "Tanah Lot Temple",
      text: "Tanah Lot is a rock formation off Bali's coast, home to the ancient Hindu pilgrimage temple Pura Tanah Lot. It is a cultural icon and offers breathtaking sunset views over the Indian Ocean, attracting photographers and travelers.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565970141923-345a5f05a6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VWJ1ZCUyME1vbmtleSUyMEZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Ubud Monkey Forest",
      text: "Ubud Monkey Forest is a nature reserve and Hindu temple complex in Ubud, Bali. It is home to hundreds of playful monkeys and sacred temples surrounded by lush greenery, offering visitors a unique cultural and natural experience.",
    },
    {
      image:
        "https://finnsbeachclub.com/wp-content/uploads/2023/12/La-Plancha-Sunset-Bar-on-Seminyak-Beach-Bali-Indonesia.jpg",
      heading: "Seminyak Beach",
      text: "Seminyak Beach is known for its luxurious resorts, beach clubs, and upscale shopping and dining options. It offers a relaxed atmosphere, stunning sunsets, and opportunities for surfing and water sports, making it a favorite among travelers.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604842937136-1648761a6256?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VWx1d2F0dXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Uluwatu Temple",
      text: "Uluwatu Temple is a sea temple perched on a cliff overlooking the Indian Ocean in Bali. It is known for its dramatic location and traditional Kecak dance performances at sunset, offering cultural insights and panoramic ocean views.",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      heading: "Ubud Art Market",
      text: "Ubud Art Market is a traditional market in Ubud, Bali, known for its handicrafts, textiles, and souvenirs. It offers a glimpse into Balinese culture and craftsmanship, where visitors can shop for unique gifts and local artworks.",
    },
    {
      image: "https://images.unsplash.com/photo-1536991394572-2a57917154bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1vdW50JTIwQmF0dXJ8ZW58MHx8MHx8fDA%3D",
      heading: "Mount Batur",
      text: "Mount Batur is an active volcano in Bali, known for its sunrise trekking experiences. It offers panoramic views of Lake Batur and the surrounding mountains, attracting adventurous hikers seeking stunning natural landscapes and photo opportunities.",
    },
    {
      image: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVnYWxsYWxhbmclMjBSaWNlJTIwVGVycmFjZXN8ZW58MHx8MHx8fDA%3D",
      heading: "Tegallalang Rice Terraces",
      text: "Tegallalang Rice Terraces are iconic terraced rice paddies near Ubud, Bali. They offer picturesque views of green landscapes and traditional Balinese irrigation systems, providing a serene and photogenic setting for visitors.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpIQbbVBYY-iFRnFeH3X4PUrZplRujImldQ&s",
      heading: "Waterbom Bali",
      text: "Waterbom Bali is a popular water park in Kuta, Bali, known for its thrilling water slides, lazy river, and family-friendly attractions. It offers a fun-filled day for all ages, with tropical gardens and dining options available onsite.",
    },
  ];

  return (
    <div>
      <Countries places={placesInBali} destination="Bali" image={BaliImg} />
    </div>
  );
};

export default Bali;