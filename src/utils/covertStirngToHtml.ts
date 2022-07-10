import cheerio from 'cheerio';
import hljs from 'highlight.js';

export const convertStringToHtml = (body: string) => {
  // codeブロックのハイライト化
  const $ = cheerio.load(body ?? '<div></div>');
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return $.html();
};
