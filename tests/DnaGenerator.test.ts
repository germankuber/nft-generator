import { expect } from 'chai';
import { configuration } from '../src/config';
import { generateDna } from '../src/dnaGenerator';
import { getFilesOfAssets } from '../src/filesManager';
import { getRandom } from '../src/random';
import { configurationTest } from './configTest';
import hash from 'object-hash';
import { drawNft } from '../src/drawServices';

describe('DNA Generator', () => {
  //   it('generateDna return angel if the skin is angel', async () => {

  //     (getRandom as jest.Mock).mockReturnValue(0);
  //     expect(generateDna(configurationTest)).to.be.deep.equal([
  //       {
  //         layer: 'Body Color',
  //         layerFolder: '3_BodyColor',
  //         position: 3,
  //         kind: { kind: 'Angel', folder: 'angel' },
  //       },
  //       {
  //         layer: 'Background 1',
  //         layerFolder: '1_Background',
  //         position: 1,
  //         kind: { kind: 'Angel', folder: 'angel' },
  //       },
  //       {
  //         layer: 'Background 2',
  //         layerFolder: '2_2Background',
  //         position: 2,
  //         kind: { kind: 'Angel', folder: 'angel' },
  //       },
  //     ]);
  //   });
  //   it('generateDna return demon if the skin is demon', async () => {
  //     (getRandom as jest.Mock).mockReturnValue(1);
  //     expect(generateDna(configurationTest)).to.be.deep.equal([
  //       {
  //         layer: 'Body Color',
  //         layerFolder: '3_BodyColor',
  //         position: 3,
  //         kind: { kind: 'Demon', folder: 'demon' },
  //       },
  //       {
  //         layer: 'Background 1',
  //         layerFolder: '1_Background',
  //         position: 1,
  //         kind: { kind: 'Demon', folder: 'demon' },
  //       },
  //       {
  //         layer: 'Background 2',
  //         layerFolder: '2_2Background',
  //         position: 2,
  //         kind: { kind: 'Demon', folder: 'demon' },
  //       },
  //     ]);
  //   });

  it.only('generateDna return demon if the skin is demon', async () => {
    // let list = [];
    // for (let index = 0; index < 10000; index++) {
    //   const result = generateDna(configuration);
    //   const paths = await getFilesOfAssets(result);
    //   const hashResult = hash(paths);
    //   list.push(hashResult);
    // }
    // console.log(list);
    for (let index = 0; index < 10; index++) {
      const result = generateDna(configuration);
      const paths = await getFilesOfAssets(result);
      await drawNft(paths, index.toString());
    }
  });
});
