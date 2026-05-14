"use client";
import HeroSection from '../components/HeroSection';
import InstructionsSection from '../components/InstructionsSection';
import SpeakPipeWidget from '../components/SpeakPipeWidget';
import VideoSection from '../components/VideoSection';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';
import styles from '../styles/page.module.css';

export default function HomePage() {
  const scrollToSection = () => {
    document.querySelector("#secondSection")?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.fullPageWrapper}>
      <HeroSection onScrollDown={scrollToSection} />

      <div className={styles.sideTextLeftContainer}>
        <div className={styles.sideTextLeft}>Mikael</div>
      </div>
      <div className={styles.sideTextRightContainer}>
        <div className={styles.sideTextRight}>Meema</div>
      </div>

      <section id="secondSection" className={styles.secondSection}>
        <div className={styles.content}>
          <h1>Mikael ja Mikker podcast</h1>
          <p className={styles.subtitle}>
            Jaga meiega oma lugu, küsimust, mure, probleemi, dilemmat. Kuulame selle saates üle ja leiame koos sellele vastused.
          </p>
          <p className={styles.subtitle}>
            Heliklipi edastamisega annad meile nõusoleku selle esitamiseks ja muul viisil meelelahutuslikel eesmärkidel kasutamiseks podcastis &quot;Mikael ja Mikker&quot;.
          </p>
        </div>
      </section>

      <InstructionsSection />
      <SpeakPipeWidget />
      <VideoSection />
      <SocialLinks />
      <Footer />
    </div>
  );
}
