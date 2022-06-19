import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerText}>
        <small>
          Copyright &copy; 2010-2018 webliker Co.,Ltd. All Rights Reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
