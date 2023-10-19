import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import JesusAndMaryChain from './Artist/JesusAndMaryChain';
import LeonardCohen from './Artist/LeonardCohen';
import PJHarvey from './Artist/PJHarvey';
import TheCramps from './Artist/TheCramps';

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
    <>
      {artist.name === 'Jesus and Mary Chain' && (
        <JesusAndMaryChain artist={artist} />
      )}
      {artist.name === 'Leonard Cohen' && <LeonardCohen artist={artist} />}
      {artist.name === 'PJ Harvey' && <PJHarvey artist={artist} />}
      {artist.name === 'The Cramps' && <TheCramps artist={artist} />}
    </>
  );
}

export default ArtistPage;
