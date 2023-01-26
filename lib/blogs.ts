import { join } from 'path';
import { Blog } from '@interfaces/Blog';
import { getDir, getFileNames, getItemInPath, getAllItems } from './md';

const BLOG_DIR = getDir('/content/blogs');

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
};

const getBlogsSlugs = () => {
  return getBlogFileNames().map((fileName) => fileName.replace(/\.md$/, ''));
};

const getBlog = (fileName: string) => {
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog;
  blog.slug = fileName.replace(/.md$/, '');
  return blog;
};

const getBlogBySlug = (slug: string) => {
  const fileName = slug + '.md';
  return getBlog(fileName);
};

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames();
  return getAllItems(names, getBlog) as Blog[];
};

export { getBlogFileNames, getBlog, getBlogs, getBlogsSlugs, getBlogBySlug };
