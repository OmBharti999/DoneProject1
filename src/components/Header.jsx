import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.3wiOKFE_PtTCgC2fhA3lYwAAAA?pid=ImgDet&rs=1"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {`   `}
            MovieList
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
