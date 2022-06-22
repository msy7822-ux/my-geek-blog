import { BiCategory } from 'react-icons/bi';
import { categories } from '@/constants/categories';
import Category from '@/components/Category';

import styles from './styles.module.scss';

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <BiCategory />
        </div>
        <p>全てのカテゴリー</p>
      </div>
      <br />
      {categories.map((category, i) => {
        return (
          <span key={i}>
            <Category category={category} />
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
