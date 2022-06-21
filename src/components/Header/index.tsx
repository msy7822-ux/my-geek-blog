import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <a href="/" className={styles.headerLeft}>
        <p className={styles.headerItem}>MSY TECH</p>
        <p>ITエンジニアの技術ブログ</p>
      </a>
      <div className={styles.headerRight}>
        <p className={styles.headerItem}>ホーム</p>
        <p className={styles.headerItem}>このブログについて</p>
        <p className={styles.headerItem}>プロフィール</p>
      </div>
    </div>
  );
};

export default Header;
