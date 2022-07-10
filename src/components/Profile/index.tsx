import styles from './styles.module.scss';
import CircleLink from '@/components/CircleLink';
import SnsLinks from '@/components/SnsLinks';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="/images/profile_icon.jpg" className={styles.profileImage} />
      {/* 自己紹介 */}
      <div className={styles.introductionContainer}>
        <p className={styles.introductionTitle}>自己紹介</p>
        <hr className={styles.introductionUnderBar} />

        <p className={styles.introduction}>
          22年卒のwebエンジニア。 大学在学中からエンジニアとして働いています。
          <br />
          現在は<a href="#">Chot株式会社</a>
          でフロントエンドエンジニアとして働いていますが、元々も学生時代からRailsのエンジニアとして働いていたこともあり、バックエンドもそこそこ書けます。
          <br />
          <br />
          ex: Port株式会社 ← 株式会社Yojo Technologies
        </p>

        <div className={styles.introductionLinks}>
          <CircleLink text="経歴" path="/profiles/background" />
          <CircleLink text="技術スタック" path="/profiles/stack" />
          <a
            href="mailto:msy780022@gmail.com?subject=件名"
            className={styles.circleStyle}
          >
            お問い合わせ
          </a>
        </div>

        <SnsLinks />
      </div>
    </div>
  );
};

export default Profile;
