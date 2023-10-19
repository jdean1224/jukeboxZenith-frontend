import styles from '../../styles/artistStyles/FlamingLips.module.css';

function FlamingLips({ artist }) {
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

export default FlamingLips;
