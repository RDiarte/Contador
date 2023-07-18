import { Container } from "react-bootstrap";
import "./App.css";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import Contador from "./components/contador";

function App() {
  return (
    <Container>
      <Titulo></Titulo>
      <Contador></Contador>
    </Container>
  );
}

export default App;
