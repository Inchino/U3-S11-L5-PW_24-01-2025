import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import AppleNavbar from './components/AppleNavbar';
import { Container } from 'react-bootstrap';
import Novità from './components/Novità';
import NuoviEpisodiRadio from './components/NuoviEpisodiRadio';

function App() {
  return (
    <Container fluid className="bg-dark text-light" data-bs-theme="dark">
    <AppleNavbar/>
    <Novità/>
    <NuoviEpisodiRadio/>
    </Container>
  )
}

export default App
