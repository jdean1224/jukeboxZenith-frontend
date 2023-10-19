import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/HomePage.module.css';

function HomePage() {
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get('http://localhost:5890/api/v1/artist');
        console.log(response.data);
        setArtistData(response.data.data.artists);
      } catch (error) {
        console.log('There was an error fetching data', error);
      }
    };
    fetchArtist();
  }, []);

  return (
    <div className={styles.homepage}>
      {/* Header Starts!!!!!!!!!!!!!!!!!!!!!!!!*/}
      <header className={styles.header}>
        <div className={styles.hiddenContainer}>
          <div className={styles.linkCustomSetlists}>
            <p>Custom Setlists</p>
          </div>
        </div>
        <h1 className={styles.title}>Jukebox Zenith</h1>
        <input
          className={styles.searchBar}
          type='text'
          placeholder='Search Artists, Albums, Tracks'
        />
      </header>
      {/* Header Ends!!!!!!!!!!!!!!!!!!!!!!!!*/}

      {/* Artist Area Starts !!!!!!!!!!!!!!!!!!*/}
      <div className={styles.artistContainer}>
        {artistData.map((artist) => (
          <div className={styles.artistProfile} key={artist._id}>
            <Link className={styles.link} to={`/artist/${artist._id}`}>
              <img
                className={styles.artistCoverImage}
                src={`http://localhost:5890/static/images/${artist.coverImage}`}
                alt={artist.name}
              />
              <p className={styles.artistName}>{artist.name}</p>
            </Link>
          </div>
        ))}
      </div>
      {/* Artist Area Ends!!!!!!!!!!!!!!!!!!!!!*/}
    </div>
  );
}

export default HomePage;
