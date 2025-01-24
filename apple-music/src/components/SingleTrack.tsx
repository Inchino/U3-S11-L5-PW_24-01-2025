import Figure from 'react-bootstrap/Figure';
import SingleTrackProps from '../types/SingleTrackProps';

function SingleTrack({ track }: SingleTrackProps) {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="Immagine album"
        src={track.artist.picture}
      />
      <Figure.Caption className='text-light d-flex justify-content-start'>
        <small>{track.album.title}</small>
      </Figure.Caption>
      <Figure.Caption className='text-secondary d-flex justify-content-start'>
        <small>{track.artist.name}</small>
      </Figure.Caption>
    </Figure>
  );
}

export default SingleTrack;