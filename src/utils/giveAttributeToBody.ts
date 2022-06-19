// microCMSが用意しているHTMLタグにclassなどの属性を付与する
// h1 ~ h6, p, ul, ol, li, br, a, img, strong

export const giveAttributeToBody = (body: string) => {
  const convertH1 = body?.replaceAll('<h1 ', '<h2 class="h1" ');
  const convertH2 = convertH1?.replaceAll('<h2 ', '<h2 class="h2" ');
  const convertH3 = convertH2?.replaceAll('<h3 ', '<h3 class="h3" ');
  const convertH4 = convertH3?.replaceAll('<h4 ', '<h4 class="h4" ');
  const convertH5 = convertH4?.replaceAll('<h5 ', '<h5 class="h5" ');
  const convertH6 = convertH5?.replaceAll('<h6 ', '<h6 class="h6" ');
  const convertParagraph = convertH6?.replaceAll(
    '<p ',
    '<p class="paragraph" ',
  );
  const convertUl = convertParagraph?.replaceAll('<ul', '<ul class="ul" ');
  const convertOl = convertUl?.replaceAll('<ol', '<ol class="ol" ');
  const convertAnchor = convertOl?.replaceAll('<a ', '<a class="anchor" ');
  const convertImg = convertAnchor?.replaceAll('<img ', '<img class="img" ');
  const convertLi = convertImg?.replaceAll('<li', '<li class="li"');
  const newBody = convertLi;

  return newBody;
};
