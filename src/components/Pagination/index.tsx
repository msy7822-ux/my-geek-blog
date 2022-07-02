import Link from 'next/link';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const Pagination = ({ totalCount }: { totalCount: number }) => {
  const PER_PAGE = 5;
  const START = 1;

  const router = useRouter();

  // end = 5 start = 2の場合、 [...Array(end - start + 1)] => [undefined, undefined]になる
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  // 1ページの最後のインデックス
  const end = Math.ceil(totalCount / PER_PAGE);

  const disabledIdAttr = styles.disabled;
  const path = router.pathname;
  const giveDisabledId = (pageNumber: number, index: number) => {
    const id = router.query.id as string;
    const isRootPath = path === '/';
    const isMatchPageNumber = parseInt(id, 10) === pageNumber;

    if ((isRootPath && index === 0) || isMatchPageNumber) return disabledIdAttr;
    return '';
  };

  return (
    <ul className={styles.paginationContainer}>
      {range(START, end).map((number, index) => {
        return (
          <li key={index}>
            <Link href={`/blogs/page/${number}`}>
              <a
                className={styles.paginationItem}
                id={giveDisabledId(number, index)}
              >
                {number}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
