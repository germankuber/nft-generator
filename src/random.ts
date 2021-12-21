var weightedRandom = require('weighted-random');

export const getRandom = (weights: GetRandom[]) =>
  weightedRandom(weights.map((weight) => weight.weight));

export interface GetRandom {
  weight: number;
}
