import Image from 'next/image';
import { FaCaretDown } from 'react-icons/fa';
import styles from '../styles/page.module.css';

interface HeroSectionProps {
  onScrollDown: () => void;
}

export default function HeroSection({ onScrollDown }: HeroSectionProps) {
  return (
    <section className={styles.imageSection}>
      <div className={styles.imageWrapper}>
        <Image
          src="/mikaeljamikker_art.svg"
          alt="Mikael ja Mikker podcasti pilt"
          title="Mikael ja Mikker podcasti pilt"
          width={1200}
          height={1200}
          priority
          className={styles.image}
        />
      </div>
      <button
        onClick={onScrollDown}
        className={styles.scrollButton}
        aria-label="Keri alla"
      >
        <FaCaretDown size={30} />
      </button>
    </section>
  );
}
