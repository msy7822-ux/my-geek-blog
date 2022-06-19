import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
