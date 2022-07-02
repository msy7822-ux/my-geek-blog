// microCMSが用意しているHTMLタグにclassなどの属性を付与する
// h1 ~ h6, p, ul, ol, li, br, a, img, strong

export const convertHtmlTagToDiv = (body: string) => {
  const newBody = body?.replace('<html>', '<div>');
  const returnBody = newBody?.replace('</html>', '</div>');

  return returnBody;
};
