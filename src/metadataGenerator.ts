import { Config, configuration, FileData, FileMetaData } from './config';
import { PathData, readFile, writeFile } from './filesManager';
var jsonMerger = require('json-merger');

export const generateMetadata = async (index: number, pathData: PathData[]) => {
  try {
    let metadataTemplate = (await readFile('config/metadata.template'))
      .join('')
      .replace('<ID>', index.toString());

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
  } catch (error) {
    console.error(error);
  }
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
