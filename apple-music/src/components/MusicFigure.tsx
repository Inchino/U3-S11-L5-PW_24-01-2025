import Figure from 'react-bootstrap/Figure';
import MusicFigureProps from '../types/MusicFigureProps';

function MusicFigure({ img, title }: MusicFigureProps) {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="Immagine album"
        src={img}
      />
      <Figure.Caption>
        <small>{title}</small>
      </Figure.Caption>
    </Figure>
  );
}

export default MusicFigure;