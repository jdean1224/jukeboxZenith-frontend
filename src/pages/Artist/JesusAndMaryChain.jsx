import styles from '../../styles/artistStyles/JesusAndMaryChain.module.css';

function JesusAndMaryChain({ artist }) {
  return (
    <div className={styles.page}>
      <img
        src={`http://localhost:5890/static/images/${artist.coverImage}`}
        alt={artist.name}
      />
      <h1 className={styles.artistName}>{artist.name}</h1>
    </div>
  );
}

export default JesusAndMaryChain;
