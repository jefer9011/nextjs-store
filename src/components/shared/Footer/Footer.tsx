
import styles from './Footer.module.sass';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h4>Future World</h4>
        <p>&copy; {new Date().getFullYear()} Future World. All rights reserved.</p>
      </div>
    </footer>
  );
};