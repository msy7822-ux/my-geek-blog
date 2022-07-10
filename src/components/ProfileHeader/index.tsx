import Link from 'next/link';
import styles from './styles.module.scss';
import CustomLink from '@/components/Link';

const ProfileHeader = () => {
  return (
    <div className={styles.header}>
      <Link href="/profiles">
        <ul className={styles.headerProfile}>
          <div className={styles.colorCircle} />
          <li className={styles.name}>深津 将大</li>
          <li className={styles.roman}>Frontend Engineer</li>
        </ul>
      </Link>

      <ul className={styles.headerNav}>
        <li>
          <CustomLink text="経歴" path="/profiles/background" />
        </li>
        <li>
          <CustomLink text="技術スタック" path="/profiles/stack" />
        </li>
        <li>
          <a href="mailto:msy780022@gmail.com?subject=件名">お問い合わせ</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileHeader;
