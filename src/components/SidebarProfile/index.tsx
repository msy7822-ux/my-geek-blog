import { SiGithub, SiZenn, SiQiita, SiTwitter } from 'react-icons/si';
import OtherTabLink from '@/components/OtherTabLink';
import SnsLinks from '@/components/SnsLinks';

import styles from './styles.module.scss';

const SidebarProfile = () => {
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
        <SnsLinks />
        <div className={styles.introductionContainer}>
          <p className={styles.introduction}>
            22年卒のwebエンジニア。 大学在学中からエンジニアとして働いています。
            <br />
            現在は<a href="#">Chot株式会社</a>
            でフロントエンドエンジニアとして働いています。
            <br />
            ex: Port株式会社 ← 株式会社Yojo Technologies
          </p>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarProfile;
