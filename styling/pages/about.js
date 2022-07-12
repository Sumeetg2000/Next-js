import styles from '../styles/about.module.css'
import style from '../styles/about.module.scss'

export default function About() {
  return (
    <>
      <h2>About Page</h2>
    <button className="btn btn-primary">Primary</button>
    <div className={styles.highlight}>About</div>
    <div className={style.highlightscss}>About</div>
    </>
  );
}
