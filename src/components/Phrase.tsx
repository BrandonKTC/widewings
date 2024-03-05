import styles from "../styles/Phrase.module.css";

export default function Phrase() {
  return (
    <div className={styles.phrase}>
      <h1>Product</h1>
      <div className={styles.middle}>
        <h1>Design</h1>
        <p>We build engaging user experience for early stage startups</p>
      </div>
      <h1>Agency</h1>
    </div>
  );
}
