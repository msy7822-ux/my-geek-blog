import { ReactNode } from 'react';

const OtherTabLink = ({
  children,
  path,
  className,
}: {
  children: ReactNode;
  path: string;
  className: string;
}) => {
  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default OtherTabLink;
