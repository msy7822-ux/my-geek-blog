import { BiCategory } from 'react-icons/bi';
import { categories } from '@/constants/categories';
import Category from '@/components/Category';
import Link from 'next/link';

import styles from './styles.module.scss';

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <BiCategory />
        </div>
        <p>タグで絞り込む</p>
      </div>
      <br />
      {categories.map((category, i) => {
        return (
          <span key={i}>
            <Link href={`/blogs/search?tag=${category}`}>
              <a>
                <Category category={category} />
              </a>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
