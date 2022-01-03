import { expect } from 'chai';
import { configuration } from '../src/config';
import { generateDna } from '../src/dnaGenerator';
import {
  getFilesOfAssets,
  getFilesOfAssetsPaths,
  readFile,
  writeFile,
} from '../src/filesManager';
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

  it('split', async () => {
    const data = [
      '1_Background/normal_5/Background_Gold.png',
      '2_2Background/mecha/2Background_Gear.png',
      '3_BodyColor/mecha/BodyColor_Mecha.png',
      '4_Bottoms/Mecha/8/Bottoms_Skirt2.png',
      '5_Pins/normal_3_13/Pin_RollingStones.png',
      '6_Faces/Mecha/3/Face_Mecha_Emo.png',
      '7_Accessories/Demon-Mecha/61/Accessesory_None.png',
      '8_Hats/Angel-Mecha/4/Hat_Fisherman.png',
      '9_Arms/Mecha/5/Arms_Mecha_Sign3.png',
      '10_Frame/100/Frame@1.5x.png',
    ];

    const processed = data
      .map((d) => {
        const splitted = d.split('/');
        const last = splitted[splitted.length - 1];
        const word = last.split('.')[0];
        return word;
      })
      .join(',');
  });
  it.only('split', async () => {
    const files = await getFilesOfAssetsPaths('/traits/3_BodyColor');
    console.log(files);

    // const file = await readFile('config/metadata.json');
    // console.log();
    // await writeFile(
    //   'output/metadata/1.json',
    //   file.join('\n').replace('<ID>', '1'),
    // );
  });

  it('generateDna return demon if the skin is demon', async () => {
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
