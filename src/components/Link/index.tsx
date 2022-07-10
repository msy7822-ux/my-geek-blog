import Link from 'next/link';

const CustomLink = ({ text, path }: { text: string; path: string }) => {
  return (
    <Link href={path}>
      <a>{text}</a>
    </Link>
  );
};

export default CustomLink;
