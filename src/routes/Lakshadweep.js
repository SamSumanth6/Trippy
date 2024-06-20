import React from "react";
import Countries from "../components/Countries/Countries";
import LakshaImg from "../assests/laksha.jpg";

const Lakshadweep = () => {
  const placesInLakshadweep = [
    {
      image:
        "https://media2.thrillophilia.com/images/photos/000/359/275/original/1603547546_lakshadweep-tour.jpg?width=1600&height=775",
      heading: "Agatti Island",
      text: "Agatti is one of the most beautiful islands in Lakshadweep known for its coral reefs and turquoise lagoons. It offers excellent opportunities for snorkeling, scuba diving, and beach activities.",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/gen/208508/TripDocument/1577520541_img_20161009_145553_hdr.jpg.webp",
      heading: "Kavaratti Island",
      text: "Kavaratti is the capital of Lakshadweep and is famous for its pristine beaches, water sports, and the beautiful Kavaratti Aquarium. It's a perfect destination for both relaxation and adventure.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJlYWNofGVufDB8fDB8fHww",
      heading: "Bangaram Island",
      text: "Bangaram Island is known for its mesmerizing beaches, crystal-clear waters, and vibrant marine life. It's ideal for diving enthusiasts and nature lovers seeking tranquility.",
    },
    {
      image:
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXNsYW5kfGVufDB8fDB8fHww",
      heading: "Minicoy Island",
      text: "Minicoy is the southernmost island in Lakshadweep, known for its unique culture, pristine beaches, and the 19th-century lighthouse. It offers breathtaking views of the Arabian Sea.",
    },
    {
      image: "https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrc2hhZHdlZXB8ZW58MHx8MHx8fDA%3D",
      heading: "Kalpeni Island",
      text: "Kalpeni is renowned for its shallow lagoons, coral reefs, and water sports activities like snorkeling and kayaking. It's also known for its traditional Maldivian-style homes.",
    },
    {
      image: "https://images.unsplash.com/photo-1583309043239-a1b23d734ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Andrott Island",
      text: "Andrott is the largest island in Lakshadweep and offers a blend of natural beauty and cultural heritage. It's known for its historic monuments, mosques, and coconut groves.",
    },
    {
      image: "https://images.unsplash.com/photo-1587538716374-408bb1118e67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Kadmat Island",
      text: "Kadmat Island is a serene destination known for its long sandy beaches, clear waters, and abundant marine life. It's a popular spot for snorkeling, diving, and fishing.",
    },
    {
      image: "https://images.unsplash.com/photo-1526058932873-75b32245945c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Bitra Island",
      text: "Bitra is the smallest inhabited island in Lakshadweep and offers a tranquil retreat with its untouched natural beauty, coconut palms, and clear turquoise waters.",
    },
    {
      image: "https://images.unsplash.com/photo-1579550752291-74213f625700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Cheriyam Island",
      text: "Cheriyam is known for its secluded beaches, coral reefs, and rich marine biodiversity. It's a haven for nature lovers and photographers seeking pristine landscapes.",
    },
  ];

  return (
    <div>
      <Countries
        places={placesInLakshadweep}
        destination="Lakshadweep"
        image={LakshaImg}
      />
    </div>
  );
};

export default Lakshadweep;
