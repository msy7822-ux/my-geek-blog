import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styles from './styles.module.scss';

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
