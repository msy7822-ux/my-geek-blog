import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <p className={styles.headerItem}>MSY TECH</p>
      </div>
      <div className={styles.headerRight}>
        <p className={styles.headerItem}>ITエンジニアの技術ブログ</p>
        <div>
          <input type="text" name="" id="" placeholder="検索してください" />
        </div>
      </div>
    </div>
  );
};

export default Header;
