import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import AppleNavbar from './components/AppleNavbar';
import { Container } from 'react-bootstrap';
import Novità from './components/Novità';
import NuoviEpisodiRadio from './components/NuoviEpisodiRadio';
import AdminArea from './components/AdminArea';
import Esplorare from './components/Esplorare';
import AppleFooter from './components/AppleFooter';

function App() {
  return (
    <>
    <AppleNavbar/>
    <Container>
    <Novità/>
    <NuoviEpisodiRadio/>
    <AdminArea/>
    <Esplorare/>
    </Container>
    <AppleFooter/>
    </>
  )
}

export default App
