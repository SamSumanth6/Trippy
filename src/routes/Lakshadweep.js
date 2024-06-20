import React from 'react';
import Countries from '../components/Countries/Countries';
import LakshaImg from "../assests/laksha.jpg"

const Lakshadweep = () => {
    const placesInLakshadweep = [
        {
            image: "https://example.com/image-url",
            heading: "Agatti Island",
            text: "Agatti is one of the most beautiful islands in Lakshadweep known for its coral reefs and turquoise lagoons. It offers excellent opportunities for snorkeling, scuba diving, and beach activities."
        },
        {
            image: "https://example.com/image-url",
            heading: "Kavaratti Island",
            text: "Kavaratti is the capital of Lakshadweep and is famous for its pristine beaches, water sports, and the beautiful Kavaratti Aquarium. It's a perfect destination for both relaxation and adventure."
        },
        {
            image: "https://example.com/image-url",
            heading: "Bangaram Island",
            text: "Bangaram Island is known for its mesmerizing beaches, crystal-clear waters, and vibrant marine life. It's ideal for diving enthusiasts and nature lovers seeking tranquility."
        },
        {
            image: "https://example.com/image-url",
            heading: "Minicoy Island",
            text: "Minicoy is the southernmost island in Lakshadweep, known for its unique culture, pristine beaches, and the 19th-century lighthouse. It offers breathtaking views of the Arabian Sea."
        },
        {
            image: "https://example.com/image-url",
            heading: "Kalpeni Island",
            text: "Kalpeni is renowned for its shallow lagoons, coral reefs, and water sports activities like snorkeling and kayaking. It's also known for its traditional Maldivian-style homes."
        },
        {
            image: "https://example.com/image-url",
            heading: "Andrott Island",
            text: "Andrott is the largest island in Lakshadweep and offers a blend of natural beauty and cultural heritage. It's known for its historic monuments, mosques, and coconut groves."
        },
        {
            image: "https://example.com/image-url",
            heading: "Kadmat Island",
            text: "Kadmat Island is a serene destination known for its long sandy beaches, clear waters, and abundant marine life. It's a popular spot for snorkeling, diving, and fishing."
        },
        {
            image: "https://example.com/image-url",
            heading: "Bitra Island",
            text: "Bitra is the smallest inhabited island in Lakshadweep and offers a tranquil retreat with its untouched natural beauty, coconut palms, and clear turquoise waters."
        },
        {
            image: "https://example.com/image-url",
            heading: "Cheriyam Island",
            text: "Cheriyam is known for its secluded beaches, coral reefs, and rich marine biodiversity. It's a haven for nature lovers and photographers seeking pristine landscapes."
        }
    ];
    

  return (
    <div>
      <Countries places={placesInLakshadweep} destination="Lakshadweep" image={LakshaImg}/>
    </div>
  );
}

export default Lakshadweep;
