import { configuration } from './config';
import { generateDna } from './dnaGenerator';
import { drawNft } from './drawServices';
import {
  getFilesOfAssets,
  logAssetCreationFile,
  readLogAssetCreationFile,
} from './filesManager';
import { getRandom } from './random';
import hash from 'object-hash';

const start = async () => {
  for (let index = 0; index < 10; index++) {
    const result = generateDna(configuration);
    const paths = await getFilesOfAssets(result);
    const hashResult = hash(paths);

    const toCheck = await readLogAssetCreationFile();
    if (toCheck.length == 0 || !toCheck.some((x) => x == hashResult)) {
      await logAssetCreationFile(hashResult);
      await drawNft(paths, index.toString());
    }
  }
};
start().then((x) => console.log('Finish')).catch(console.error);
