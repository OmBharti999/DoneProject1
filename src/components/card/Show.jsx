import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Show(p) {
  // console.log("hi", p.obj);
  return (
    <div>
      <KitchenSinkExample object={p.obj} />
    </div>
  );
}

function KitchenSinkExample(p) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={p.object.img.src} />
      <Card.Body>
        <Card.Title>{`#${p.object.id} - ${p.object.title} (${p.object.year})`}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{`Distributor: ${p.object.distributor}`}</ListGroup.Item>
        <ListGroup.Item>{`Amount: ${p.object.amount}`}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
