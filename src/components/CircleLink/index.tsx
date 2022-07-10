import Link from 'next/link';
import styles from './styles.module.scss';

const CircleLink = ({ text, path }: { text: string; path: string }) => {
  return (
    <Link href={path}>
      <div className={styles.circleStyle}>{text}</div>
    </Link>
  );
};

export default CircleLink;
