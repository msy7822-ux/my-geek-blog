import { SiGithub, SiZenn, SiQiita, SiTwitter } from 'react-icons/si';
import styles from './styles.module.scss';
import OtherTabLink from '@/components/OtherTabLink';

const SnsLinks = () => {
  return (
    <div className={styles.icons}>
      <OtherTabLink
        path="https://github.com/msy7822-ux"
        className={styles.icon}
      >
        <SiGithub />
      </OtherTabLink>

      <OtherTabLink
        path="https://twitter.com/prog_hiro"
        className={styles.icon}
      >
        <SiTwitter />
      </OtherTabLink>

      <OtherTabLink path="https://zenn.dev/msy" className={styles.icon}>
        <SiZenn />
      </OtherTabLink>

      <OtherTabLink
        path="https://qiita.com/masahiro_fukatsu"
        className={styles.icon}
      >
        <SiQiita />
      </OtherTabLink>
    </div>
  );
};

export default SnsLinks;
