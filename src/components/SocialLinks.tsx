import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SPOTIFY_SHOW_URL, YOUTUBE_CHANNEL_URL } from '../lib/config';
import styles from '../styles/page.module.css';

export default function SocialLinks() {
  return (
    <section className={styles.socialMediaSection}>
      <h2 className={styles.sectionTitle}>Leia podcast ka siit!</h2>
      <div className={styles.socialMediaLinks}>
        <a
          href={SPOTIFY_SHOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          title="Spotify playlist"
        >
          <FaSpotify size={30} className={styles.icon} /> Spotify
        </a>
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          title="Youtube kanal"
        >
          <FaYoutube size={30} className={styles.icon} /> YouTube
        </a>
      </div>
    </section>
  );
}
