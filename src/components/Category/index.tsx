import styles from './styles.module.scss';

const Category = ({ category }: { category: string }) => {
  return <span className={styles.category}>{category}</span>;
};

export default Category;
