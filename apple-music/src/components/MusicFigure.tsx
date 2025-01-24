import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import MusicFigureProps from '../types/MusicFigureProps';

function MusicFigure({ img, title }: MusicFigureProps) {
  return (
    <Container>
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="Immagine album"
        src={img}
      />
      <Figure.Caption className="text-light text-wrap">
        <small>{title}</small>
      </Figure.Caption>
    </Figure>
    </Container>
  );
}

export default MusicFigure;