import { useEffect, useState } from "react";

import Show from "./card/Show";

var movieData = [
  {
    id: 1,
    title: "Avatar",
    distributor: "20th Century Fox",
    year: 2009,
    amount: "$2,787,965,087",
    img: {
      src:
        "https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=LZD4JLSQturzbA&riu=http%3a%2f%2fglobalcomment.com%2fwp-content%2fuploads%2f2009%2f12%2favatarstill1.jpg&ehk=vGiHlZi0SvoA3HQBCKONr%2f6BmG5tPKjs14Xb9o6%2f%2bPU%3d&risl=&pid=ImgRaw&r=0",
      alt: "avatar"
    },
    ranking: 1
  },
  {
    id: 2,
    title: "Titanic",
    distributor: "20th Century Fox",
    year: 1997,
    amount: "$2,187,463,944",
    img: {
      src: "https://image.tmdb.org/t/p/w1280/74d4bOZ7kwUHEjb5NZ84Ft6lCpR.jpg",
      alt: "titanic"
    },
    ranking: 2
  },
  {
    id: 3,
    title: "Star Wars: The Force Awakens",
    distributor: "Walt Disney Studios Motion Pictures",
    year: 2015,
    amount: "$2,068,223,624",
    img: {
      src:
        "https://th.bing.com/th/id/OIP.TDmB9kbKPZZuxMKeb_yj4AHaK9?pid=ImgDet&rs=1",
      alt: "star_wars_the_force_awakens"
    },
    ranking: 3
  },
  {
    id: 4,
    title: "Avengers: Infinity War",
    distributor: "Walt Disney Studios Motion Pictures",
    year: 2018,
    amount: "$2,048,359,754",
    img: {
      src:
        "https://th.bing.com/th/id/R.6643a6baa39636a28362430a7b661e02?rik=zlZTpa7FmZFvbg&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2018%2f03%2fAvengers-Infinity-War-new-poster.jpg&ehk=jsSvmXCEEpifurzDZH1G%2bp2T6%2f1ubqZd%2bsC4lLrcbmo%3d&risl=&pid=ImgRaw&r=0",
      alt: "avengers_infinity_war"
    },
    ranking: 4
  },
  {
    id: 5,
    title: "Jurassic World",
    distributor: "Universal Pictures",
    year: 2015,
    amount: "$1,671,713,208",
    img: {
      src:
        "https://th.bing.com/th/id/OIP.5f9SCiK7CS-Vwn4Ujd1ccgHaLD?pid=ImgDet&rs=1",
      alt: "jurassic_world"
    },
    ranking: 5
  }
];

function List() {
  const [movie, setMovie] = useState(movieData);
  useEffect(() => {
    // console.log("hi");

    async function fetchdata() {
      // console.log("inside");
      // let response = await fetch(
      //   "https://www.omdbapi.com/?i=tt3896198&apikey=fa3dab28"
      // );
      let response = await fetch("movieData");
      // console.log("inside2", response);
      const data = await response.json();
      // console.log("inside23");
      // console.log("data", data);
    }
    // console.log("whatsapp");
    fetchdata();
  });
  return (
    <div>
      {movieData.map((obj) => (
        <Show obj={obj} />
      ))}
    </div>
  );
}

export default List;