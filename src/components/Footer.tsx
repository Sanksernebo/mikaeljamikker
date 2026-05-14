import styles from '../styles/page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Mikael Meema - Kõik õigused kaitstud
        <br />
        Veebilehe tegi:{' '}
        <a
          className={styles.footerMail}
          title="Veebilehe autori e-maili aadress"
          href="mailto:info@digiarendus.ee"
        >
          info@digiarendus.ee
        </a>
      </p>
    </footer>
  );
}
