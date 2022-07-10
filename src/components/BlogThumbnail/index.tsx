import styles from './styles.module.scss';

const BlogThumbnail = ({ thumbnail }: { thumbnail?: string }) => {
  return (
    <div className={styles.thumbnailContainer}>
      <img
        alt="article image"
        src={thumbnail || '/images/prog_img.jpg'}
        className={styles.articleThumbnail}
      />
    </div>
  );
};

export default BlogThumbnail;
