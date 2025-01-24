import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import AppleNavbar from './components/AppleNavbar';
import { Container } from 'react-bootstrap';
import Novità from './components/Novità';
import NuoviEpisodiRadio from './components/NuoviEpisodiRadio';
import NuoveUscite from './components/NuoveUscite';
import Esplorare from './components/Esplorare';

function App() {
  return (
    <>
    <AppleNavbar/>
    <Container>
    <Novità/>
    <NuoviEpisodiRadio/>
    <NuoveUscite/>
    <Esplorare/>
    </Container>
    </>
  )
}

export default App
