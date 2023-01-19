import fs from 'fs';
import { join } from 'path';

const getDir = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

export { getFileNames, getDir };
