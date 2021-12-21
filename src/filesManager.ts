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
      resolve(files);
    });
  });

export const getFilesOfAssets = (assets: Dna[]): Promise<string[]> => {
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
      return `${x.layerFolder}/${folder}/${fileToDraw}`;
    });
    resolve(Promise.all(files));
  });
};
export interface AssetsFolders {
  kind: string;
  folder: string;
}

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const logAssetCreationFile = (toLog: string) => {
  return new Promise(async (resolve, reject) => {
    const directoryPath = path.join(__dirname, '../', 'assetCreationLogs.txt');

    fs.appendFile(directoryPath, toLog + '\n', (err) => {
      if (err) reject(err);
      resolve("It's saved!");
    });
  });
};

export const readLogAssetCreationFile = (): Promise<string[]> => {
  return new Promise(async (resolve, reject) => {
    const directoryPath = path.join(__dirname, '../', 'assetCreationLogs.txt');
    var array = fs.readFileSync(directoryPath).toString().split('\n');
    resolve(array);
  });
};
