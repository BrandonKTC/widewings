import Phrase from "./Phrase";
import Video from "./Video";
import styles from "../styles/Section.module.css";

export default function Section() {
  return (
    <div className={styles.section}>
      <Video />
      <Phrase />
    </div>
  );
}
