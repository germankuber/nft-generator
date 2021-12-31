import { configuration } from './config';
import { generateDna } from './dnaGenerator';
import { drawNft } from './drawServices';
import { getFilesOfAssets, readFile, writeFile } from './filesManager';
import hash from 'object-hash';
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
    const result = generateDna(configuration);
    const paths = await getFilesOfAssets(result);
    config;
    const hashResult = hash(paths);

    const toCheck = await readFile('generation/assetCreationLogs.txt');
    const metadataTemplate = (await readFile('config/metadata.json')).join(
      '\n',
    );
    if (toCheck.length == 0 || !toCheck.some((x) => x == hashResult)) {
      await writeFile('generation/assetCreationLogs.txt', hashResult);
      await writeFile('generation/pathsToCreate.txt', paths.join(','));
      let dataReturn = {};
      dataReturn['ID'] = index;
      const processed = paths.map((d, index) => {
        const splitted = d.split('/');
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
      await writeFile(
        `generation/output/metadata/${index.toString()}.json`,
        metadataTemplate.replace('<ID>', index.toString()),
      );
      console.table([dataReturn], head);
    }
  }
};
start().then((x) => console.log('Finish'));

const draw = async () => {
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
  const toCheck = await readFile('pathsToCreate.txt');
  const listOfPromises = toCheck.map(async (item, index) => {
    const paths = item.split(',');
    const hashResult = hash(paths);

    // const toCheck = await readFile('assetCreationLogs.txt');
    // if (toCheck.length == 0 || !toCheck.some((x) => x == hashResult)) {
    // await writeFile('assetCreationLogs.txt', hashResult);
    // await writeFile('pathsToCreate.txt', paths.join(','));
    // let dataReturn = {};
    // dataReturn['ID'] = index;
    // const processed = paths.map((d, index) => {
    //   const splitted = d.split('/');
    //   const last = splitted[splitted.length - 1];
    //   const word = last.split('.')[0];
    //   dataReturn[head[index + 1]] = word;
    //   return word;
    // });
    console.table(index);
    console.table(paths[2]);

    // await writeFile('finalData.txt', index + ',' + processed.join(','));

    return await drawNft(paths, index.toString());
    // }
  });
  await Promise.all(listOfPromises);
};

// draw().then((x) => console.log('Finish'));
