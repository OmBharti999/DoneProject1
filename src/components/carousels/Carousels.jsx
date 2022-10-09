import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample(p) {
  console.log("props", p.movie);
  // console.log("props", p.movie[0].urls.raw);
  let a = p.movie;
  a = a.map((i) => {
    console.log(i);
    return <IndividualIntervalsExample img={i} />;
  });
  const [b, sb] = useState();
  sb(a);

  return <Carousel>{b}</Carousel>;
}

export default UncontrolledExample;

function IndividualIntervalsExample(p) {
  console.log("pppppp", p);
  return (
    <Carousel.Item interval={1000}>
      <img className="d-block w-100" src={p.img} alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}
