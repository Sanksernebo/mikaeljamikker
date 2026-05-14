import styles from '../styles/page.module.css';

export default function InstructionsSection() {
  return (
    <section className={styles.instructions}>
      <h2 className={styles.instructionSectionTitle}>Kuidas saata oma salvestust?</h2>
      <ul className={styles.instructionList}>
        <li>Vajuta allpool olevat nuppu &quot;Start Recording&quot;.</li>
        <li>Salvesta oma lugu.</li>
        <li>Saada oma sõnum ja looda, et see jõuab podcasti!</li>
      </ul>
    </section>
  );
}
