import searchIndex from '@content/search/index.json';

const getLocalSerachIndex = () => {
  return searchIndex;
};

const shortify = (text: string, length: number = 70) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};

export { getLocalSerachIndex, shortify };
