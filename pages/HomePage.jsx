import styles from '../styles/HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homepage}>
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
    </div>
  );
}

export default HomePage;
