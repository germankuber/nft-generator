import { configuration } from './config';
import { generateDna } from './dnaGenerator';
import { getRandom } from './random';

const start = () => {
  generateDna(configuration);
};
start();
