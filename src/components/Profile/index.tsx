import { SiGithub, SiZenn, SiQiita, SiTwitter } from 'react-icons/si';

import styles from './styles.module.scss';

const Profile = () => {
  return (
    <aside className={styles.profileContainer}>
      <p className={styles.title}>プロフィール</p>
      <nav className={styles.profileNav}>
        <div>
          <img
            className={styles.profileImage}
            src="/images/profile_icon.jpg"
            alt=""
          />
          <hr className={styles.underLine} />
        </div>
        <div className={styles.names}>
          <p className={styles.nameKanji}>深津 将大</p>
          <p className={styles.nameKatakana}>フカツ マサヒロ</p>
        </div>
        <div className={styles.icons}>
          <a href="https://github.com/msy7822-ux" className={styles.icon}>
            <SiGithub />
          </a>
          <a href="https://github.com/msy7822-ux" className={styles.icon}>
            <SiTwitter />
          </a>
          <a href="https://zenn.dev/msy" className={styles.icon}>
            <SiZenn />
          </a>
          <a href="https://qiita.com/masahiro_fukatsu" className={styles.icon}>
            <SiQiita />
          </a>
        </div>
        <div className={styles.introductionContainer}>
          <p className={styles.introduction}>
            22年卒のwebエンジニア。 大学在学中からエンジニアとして働いています。
            Port株式会社 ← 株式会社Yojo Technologies
          </p>
        </div>
      </nav>
    </aside>
  );
};

export default Profile;
