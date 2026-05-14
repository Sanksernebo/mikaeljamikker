import { SPEAKPIPE_WIDGET_URL } from '../lib/config';
import styles from '../styles/page.module.css';

export default function SpeakPipeWidget() {
  return (
    <section className={styles.widgetSection}>
      <h2 className={styles.sectionTitle}>Saada oma sõnum!</h2>
      <p className={styles.widgetDescription}>
        Kasuta SpeakPipe vidinat, et saata oma sõnum podcasti postkasti.
      </p>
      <iframe
        src={SPEAKPIPE_WIDGET_URL}
        allow="microphone"
        width="100%"
        height="200"
        className={styles.widgetIframe}
        title="SpeakPipe heli salvestamise tööriist"
      />
    </section>
  );
}
