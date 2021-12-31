var weightedRandom = require('weighted-random');
var weightedRandomObject = require('weighted-random-object');
export const getRandom = (weights: GetRandom[]) => {
  const result = weightedRandomObject(weights);

  return weightedRandom(weights.map((weight) => weight.weight));
};

export interface GetRandom {
  weight: number;
}
