import Header from "../components/Header";
import Section from "../components/Section";
import styles from "../styles/Homepage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <Header />
      <Section />
    </div>
  );
}
