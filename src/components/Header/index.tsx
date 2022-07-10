import Link from 'next/link';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <a className={styles.headerLeft}>
          <p className={styles.headerItem}>MSY TECH</p>
          <p>※なんか文字列入れる</p>
        </a>
      </Link>
      <div className={styles.headerRight}>
        <Link href="/">
          <a>
            <p className={styles.headerItem}>ホーム</p>
          </a>
        </Link>
        <p className={styles.headerItem}>このブログについて</p>
        <Link href="/profiles">
          <a>
            <p className={styles.headerItem}>プロフィール</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
