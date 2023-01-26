import fs from 'fs';
import matter from 'gray-matter';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { join } from 'path';
import { remark } from 'remark';

import { MarkdownItem } from '@interfaces/Markdown';

const getDir = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

const getItemInPath = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { ...data, content } as MarkdownItem;
};

const getAllItems = (
  fileNames: string[],
  get: (name: string) => MarkdownItem
) => {
  const items = fileNames.map((name) => get(name));
  return items;
};

const markdownToHtml = async (markdown: string) => {
  const result = await remark()
    .use(html)
    .use(remarkGfm)
    .process(markdown);

  return result.toString();
};

export {
  getDir,
  getFileNames,
  getItemInPath,
  getAllItems,
  markdownToHtml,
};
