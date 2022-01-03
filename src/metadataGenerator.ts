import { Config, configuration, FileData, FileMetaData } from './config';
import { generateDna } from './dnaGenerator';
import { drawNft } from './drawServices';
import {
  getFilesOfAssets,
  PathData,
  readFile,
  writeFile,
} from './filesManager';
import hash from 'object-hash';
var jsonMerger = require('json-merger');
const config = require('config');

export const generateMetadata = async (index: number, pathData: PathData[]) => {
    let metadataTemplate = (await readFile('config/metadata.template')).join(''
    ).replace('<ID>', index.toString());

    metadataTemplate = jsonMerger.mergeObjects(
      [JSON.parse(metadataTemplate), generateMetadataAttributes(pathData)],
      {
        defaultArrayMergeOperation: 'concat',
      },
    );
    await writeFile(
      `generation/output/metadata/${index.toString()}.json`,
      JSON.stringify(metadataTemplate, undefined, 2),
    );
};

export const generateMetadataAttributes = (
  pathData: PathData[],
): FileMetaData => {
  return pathData.reduce((reduceData, data) => {
    const layer: Config = configuration.find((x) => x.layer == data.layer);
    if (layer.files != null) {
      const fileData: FileData = layer.files.find(
        (x) => x.name == data.fileName,
      );

      return jsonMerger.mergeObjects([reduceData, fileData.metadata], {
        defaultArrayMergeOperation: 'concat',
      });
    }
    return reduceData;
  }, <FileMetaData>{});
};

// export const generateMetadataAttributes = (
//   pathData: PathData[],
// ): FileMetaData => {
//   let reduceData: FileMetaData = <any>{};
//   for (const data of pathData) {
//     const layer: Config = configuration.find((x) => x.layer == data.layer);
//     if (layer.files != null) {
//       const fileData: FileData = layer.files.find(
//         (x) => x.name == data.fileName,
//       );
//       reduceData = jsonMerger.mergeObjects([reduceData, fileData.metadata], {
//         defaultArrayMergeOperation: 'concat',
//       });
//     }
//   }
//   return reduceData;
// };
