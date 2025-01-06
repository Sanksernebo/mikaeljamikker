import React from 'react';
import styles from '../styles/page.module.css';
import { FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';


const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <p className={styles.subtitle}>Jaga meiega oma lugu, küsimust, mure, probleemi, dilemmat. Kuulame selle saates üle ja leiame koos sellele vastused.</p>
        <p className={styles.subtitle}>Mikael saab kokku sõpradega ja ajab juttu. Lahendatud saavad ka kõik kuulajate mured, probleemid, müsteeriumid ja lood.</p>
      </header>

      {/* Instructions Section */}
      <section className={styles.instructions}>
        <h2 className={styles.instructionSectionTitle}>Kuidas saata oma salvestust?</h2>
        <ul className={styles.instructionList}>
          <li>Vajuta allpool olevat nuppu "Jäta sõnum".</li>
          <li>Salvesta oma lugu.</li>
          <li>Saada oma sõnum ja looda, et see jõuab podcasti!</li>
        </ul>
      </section>

      {/* SpeakPipe Widget Section */}
      <section className={styles.widgetSection}>
        <h2 className={styles.sectionTitle}>Saada oma sõnum!</h2>
        <p className={styles.widgetDescription}>
          Kasuta SpeakPipe vidinat, et saata oma sõnum podcasti postkasti.
        </p>
        {/* Embed SpeakPipe Widget */}
        <iframe
          src="https://www.speakpipe.com/widget/inline/o624ok6qmiaqj375qkpw6ilywqo02e9s"
          allow="microphone" 
          width="100%"
          height="200"
          className={styles.widgetIframe}
        ></iframe>
        <script async src="https://www.speakpipe.com/widget/loader.js"></script>
      </section>

      {/* Previous Episode Section */}
      <section className={styles.videoSection}>
        <h2 className={styles.sectionTitle}>Eelmine episood</h2>
        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8NGZvY1muss?si=WIaCcRhmJTsQcZOu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className={styles.socialMediaSection}>
        <h2 className={styles.sectionTitle}>Leia podcast ka siit!</h2>
        <div className={styles.socialMediaLinks}>
          <a href="https://open.spotify.com/show/5ucZpdw230SJCQilS3yJ8H" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaSpotify size={30} className={styles.icon} /> Spotify
          </a>
          <a href="https://www.youtube.com/@MikaelJaMikker" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaYoutube size={30} className={styles.icon} /> YouTube
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} OÜ Meemandus. Kõik õigused kaitstud.</p>
        <p className={styles.socialMediaLinks}>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaInstagram size={30} className={styles.icon} /> Instagram</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;