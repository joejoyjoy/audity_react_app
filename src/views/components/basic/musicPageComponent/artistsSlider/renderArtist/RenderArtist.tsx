import { Link } from 'react-router-dom';
import './renderArtist.scss';

export default function RenderArtist ({ artist }: any) {
  return (
    <Link to={`/artists/${artist.id}`} className='render-artist'>
      <div className='render-artist__thumbnail'>
        <img src={artist.photoUrl} alt={artist.name} />
      </div>
      <p className='render-artist__description'>{artist?.name}</p>
      <p className='render-artist__details'>80,165,532 fans</p>
    </Link>
  )
}