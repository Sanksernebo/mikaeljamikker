import { YOUTUBE_PLAYLIST_ID } from '../lib/config';
import styles from '../styles/page.module.css';

export default function VideoSection() {
  const embedUrl = `https://www.youtube-nocookie.com/embed?listType=playlist&list=${YOUTUBE_PLAYLIST_ID}`;

  return (
    <section className={styles.videoSection}>
      <h2 className={styles.sectionTitle}>Eelmine episood:</h2>
      <div className={styles.videoContainer}>
        <iframe
          width="100%"
          height="315"
          src={embedUrl}
          title="Eelmine osa - YouTube videomängija"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
