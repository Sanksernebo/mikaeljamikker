"use client"
import React from 'react';
import Image from 'next/image'
import styles from '../styles/page.module.css';
import { FaSpotify, FaYoutube, FaCaretDown } from 'react-icons/fa';

const HomePage = () => {
  const scrollToSection = () => {
    const secondSection = document.querySelector("#secondSection");
    if (secondSection) {
      secondSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.fullPageWrapper}>
      {/* Full-screen image section */}
      <section className={styles.imageSection}>
    <div className={styles.imageWrapper}>
      <Image
        src="/mikaeljamikker_art.svg"
        alt="Mikael ja Mikker"
        width={1200}
        height={1200}
        priority
        className={styles.image}
      />
    </div>
    <button onClick={scrollToSection} className={styles.scrollButton}>
      <FaCaretDown size={30} />
    </button>
  </section>

      {/* Side Text Containers */}
      <div className={styles.sideTextLeftContainer}>
        <div className={styles.sideTextLeft}>Mikael</div>
      </div>

      <div className={styles.sideTextRightContainer}>
        <div className={styles.sideTextRight}>Meema</div>
      </div>

      {/* Full Page Wrapper with Unified Background */}
      <div className={styles.fullPageWrapper}>
        {/* Second section with design */}
        <section id="secondSection" className={styles.secondSection}>
          <div className={styles.content}>
            <h2>Mikael ja Mikker podcast</h2>
            <p className={styles.subtitle}>
              Jaga meiega oma lugu, küsimust, mure, probleemi, dilemmat. Kuulame selle saates üle ja leiame koos sellele vastused.
            </p>
            <p className={styles.subtitle}>
              Heliklipi edastamisega annad meile nõusoleku selle esitamiseks ja muul viisil meelelahutuslikel eesmärkidel kasutamiseks podcastis “Mikael ja Mikker”.
            </p>
          </div>
        </section>

  {/* Instructions Section */}
  <section className={styles.instructions}>
    <h2 className={styles.instructionSectionTitle}>Kuidas saata oma salvestust?</h2>
    <ul className={styles.instructionList}>
      <li>Vajuta allpool olevat nuppu &quot;Start Recording&quot;.</li>
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
    <iframe
      src="https://www.speakpipe.com/widget/inline/xye8pqiww2oy6ei9gur2sest00frme69"
      allow="microphone" 
      width="100%"
      height="200"
      className={styles.widgetIframe}
    ></iframe>
  </section>

  {/* Previous Episode Section */}
  <section className={styles.videoSection}>
    <h2 className={styles.sectionTitle}>Eelmine episood</h2>
    <div className={styles.videoContainer}>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed?listType=playlist&list=UUulDnsEktKw8uMVphLqWYVQ"
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
    <p>&copy; {new Date().getFullYear()} Mikael Meema - Kõik õigused kaitstud
      | Veebilehe tegi: <a href="mailto:info@digiarendus.ee"> info@digiarendus.ee</a>
    </p>
  </footer>
</div>
</div>
  )
};

export default HomePage;