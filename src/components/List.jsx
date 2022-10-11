// import { useEffect, useState } from "react";
import Carousels from "./carousels/Carousels";

import Show from "./card/Show";

import "./list.css";

var movieData = [
  {
    id: 1,
    title: "Avatar",
    distributor: "20th Century Fox",
    year: 2009,
    amount: "$2,787,965,087",
    img: {
      src: "https://th.bing.com/th/id/R.bd74374165c28f7454a4037ad8e824dd?rik=xxvM%2bWb1nyvtJg&riu=http%3a%2f%2fcafmp.com%2fwp-content%2fuploads%2f2012%2f12%2fAvatar-French-Poster.jpg&ehk=jCzn4VSVtQ0Gf8Nllupd2SG08v%2fYnOm2nAjhfzT1cSg%3d&risl=&pid=ImgRaw&r=0",
      alt: "avatar",
    },
    ranking: 1,
  },
  {
    id: 2,
    title: "Titanic",
    distributor: "20th Century Fox",
    year: 1997,
    amount: "$2,187,463,944",
    img: {
      src: "https://image.tmdb.org/t/p/w1280/74d4bOZ7kwUHEjb5NZ84Ft6lCpR.jpg",
      alt: "titanic",
    },
    ranking: 2,
  },
  {
    id: 3,
    title: "Star Wars: The Force Awakens",
    distributor: "Walt Disney Studios Motion Pictures",
    year: 2015,
    amount: "$2,068,223,624",
    img: {
      src: "https://th.bing.com/th/id/OIP.TDmB9kbKPZZuxMKeb_yj4AHaK9?pid=ImgDet&rs=1",
      alt: "star_wars_the_force_awakens",
    },
    ranking: 3,
  },
  {
    id: 4,
    title: "Avengers: Infinity War",
    distributor: "Walt Disney Studios Motion Pictures",
    year: 2018,
    amount: "$2,048,359,754",
    img: {
      src: "https://th.bing.com/th/id/R.6643a6baa39636a28362430a7b661e02?rik=zlZTpa7FmZFvbg&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2018%2f03%2fAvengers-Infinity-War-new-poster.jpg&ehk=jsSvmXCEEpifurzDZH1G%2bp2T6%2f1ubqZd%2bsC4lLrcbmo%3d&risl=&pid=ImgRaw&r=0",
      alt: "avengers_infinity_war",
    },
    ranking: 4,
  },
  {
    id: 5,
    title: "Jurassic World",
    distributor: "Universal Pictures",
    year: 2015,
    amount: "$1,671,713,208",
    img: {
      src: "https://th.bing.com/th/id/OIP.5f9SCiK7CS-Vwn4Ujd1ccgHaLD?pid=ImgDet&rs=1",
      alt: "jurassic_world",
    },
    ranking: 5,
  },
];

function List() {
  return (
    <div className="cont-list">
      <Carousels />
      <div className="list">
        {movieData.map((obj) => (
          <Show obj={obj} />
        ))}
      </div>
    </div>
  );
}

export default List;
