import Header from "./components/Header";
// import Carousels from "./components/carousels/Carousels";
import Footer from "./components/Footer";
import List from "./components/List";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <Carousels /> */}
      <List />
      <Footer />
    </div>
  );
}
