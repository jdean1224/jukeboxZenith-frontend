import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5890/api/v1/artist/${id}`
        );

        setArtist(response.data.data.artist);
      } catch (err) {
        console.log('There was an error fetching data in ArtistPage', err);
      }
    };
    fetchArtistData();
    console.log(artist);
  }, [id]);

  // if (!artist) return <div>Loading...</div>;

  return (
    <div>
      <img
        src={`http://localhost:5890/static/images/${artist.coverImage}`}
        alt={artist.name}
      />
      <h1>{artist.name}</h1>
    </div>
  );
}

export default ArtistPage;
