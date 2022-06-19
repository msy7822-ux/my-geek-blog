import { categories } from '../../constants/categories';
import styles from './styles.module.scss';

import { BiCategory } from 'react-icons/bi';

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
          <div className={styles.category} key={i}>
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
