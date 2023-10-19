import styles from '../../styles/artistStyles/Ween.module.css';

function Ween({ artist }) {
  return (
    <div className={styles.page}>
      <img
        className={styles.image}
        src={`http://localhost:5890/static/images/${artist.coverImage}`}
        alt={artist.name}
      />
      <h1 className={styles.artistName}>{artist.name}</h1>
    </div>
  );
}

export default Ween;
