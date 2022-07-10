// createdAtから日付のみを取得する関数
export const getCreatesAtDate = (strDateTime: string) => {
  const date = strDateTime?.split('T')[0];
  const newDateString = date?.split('-')?.join('/');
  return newDateString;
};
