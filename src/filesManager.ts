//requiring path and fs modules
import path from 'path';
import fs from 'fs';
import { Dna } from './dnaGenerator';

export const getFilesOfAssetsPaths = (
  pathOfAssets: string,
): Promise<string[]> =>
  new Promise((resolve, reject) => {
    const directoryPath = path.join(__dirname, '../assets', pathOfAssets);
    fs.readdir(directoryPath, (err, files) => {
      if (err) reject(err);
      resolve(files.filter((x) => x! + '.DS_Store'));
    });
  });

export const getFilesOfAssets = (assets: Dna[]): Promise<PathData[]> => {
  return new Promise(async (resolve, reject) => {
    const files = await assets.map(async (x) => {
      const folder = x.kind.folder;
      const filesFromDirectory = await getFilesOfAssetsPaths(
        `${x.layerFolder}/${folder}`,
      );
      const positionRandom =
        filesFromDirectory.length > 1
          ? randomIntFromInterval(0, filesFromDirectory.length - 1)
          : 0;
      const fileToDraw = filesFromDirectory[positionRandom];
      return  {
        layer: x.layer,
        fileName: fileToDraw,
        filePath: `${x.layerFolder}/${folder}/${fileToDraw}`,
      };
    });
    resolve(Promise.all(files));
  });
};
export interface PathData {
  layer: string;
  fileName: string;
  filePath: string;
}
export interface AssetsFolders {
  kind: string;
  folder: string;
}

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const writeFile = (file: string, toWrite: string) => {
  return new Promise(async (resolve, reject) => {
    const directoryPath = path.join(__dirname, '../', file);

    fs.appendFile(directoryPath, toWrite + '\n', (err) => {
      if (err) reject(err);
      resolve("It's saved!");
    });
  });
};

export const readFile = (file: string): Promise<string[]> => {
  return new Promise(async (resolve, reject) => {
    const directoryPath = path.join(__dirname, '../', file);
    var array = fs.readFileSync(directoryPath).toString().split('\n');
    resolve(array);
  });
};

