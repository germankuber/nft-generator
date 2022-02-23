import { configuration } from './config';
import { generateDna } from './dnaGenerator';
import { drawNft } from './drawServices';
import { getFilesOfAssets, readFile, writeFile } from './filesManager';
import hash from 'object-hash';
import { generateMetadata } from './metadataGenerator';
const config = require('config');
const start = async () => {
  const firstId = config.get('generation.firstId');
  const lastId = config.get('generation.lastId');
  const head = [
    'ID',
    'Background 1',
    'Background 2',
    'BodyColor',
    'Bottoms',
    'Pings',
    'Faces',
    'Accessories',
    'Hats',
    'Arms',
    'Frame',
  ];

  await writeFile('finalData.txt', head.join(','));
  for (let index = firstId; index <= lastId; index++) {
    await generateFileData(index, head);
  }
};
start().then((x) => console.log('Finish'));

const generateFileData = async (index: number, head: string[]) => {
  try {
    const paths = await getFilesOfAssets(generateDna(configuration));
    const hashResult = hash(paths);

    const toCheck = await readFile('generation/assetCreationLogs.txt');
    if (toCheck.length == 0 || !toCheck.some((x) => x == hashResult)) {
      await writeFile('generation/assetCreationLogs.txt', hashResult);
      await writeFile('generation/pathsToCreate.txt', paths.join(','));
      let dataReturn = {};
      dataReturn['ID'] = index;
      const processed = paths.map((d, index) => {
        const splitted = d.filePath.split('/');
        const last = splitted[splitted.length - 1];
        const word = last.split('.')[0];
        dataReturn[head[index + 1]] = word;
        return word;
      });

      await writeFile(
        'generation/finalData.txt',
        index + ',' + processed.join(','),
      );

      await drawNft(paths, index.toString());
      await generateMetadata(index, paths);
      console.table([dataReturn], head);
    }
  } catch (error) {
    await generateFileData(index, head);
  }
};


