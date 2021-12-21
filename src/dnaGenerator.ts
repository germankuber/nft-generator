import { Config, Kind } from './config';
import { GetRandom, getRandom } from './random';

export const generateDna = (config: Config[]): Dna[] =>
  config.reduce(
    (total: ReduceData, currentValue: Config) => {
      if (total.kinds.length == 0) {
        const kind = getKind(currentValue.kinds);
        return {
          group: kind.group,
          kinds: [
            {
              layer: currentValue.layer,
              layerFolder: currentValue.folder,
              position: currentValue.position,
              kind: {
                kind: kind.kind,
                folder: kind.folder,
              },
            },
          ],
        };
      } else {
        if (total.group != null && total.group.length > 0) {
          const kindsFiltered = currentValue.kinds.filter(
            (k) =>
              k.forAll ||
              (k.groupsDependency != null &&
                k.groupsDependency.some((r) => total.group.includes(r))) ||
              (k.groupsExcepted != null &&
                !k.groupsExcepted.some((r) => total.group.includes(r))),
          );
          const kind = getKind(kindsFiltered);

          return {
            group: total.group,
            kinds: [
              ...total.kinds,
              {
                layer: currentValue.layer,
                layerFolder: currentValue.folder,
                position: currentValue.position,
                kind: {
                  kind: kind.kind,
                  folder: kind.folder,
                },
              },
            ],
          };
        }
      }
      return total;
    },
    <ReduceData>{
      kinds: [],
      group: [],
    },
  ).kinds;

const getKind = (kindsFiltered: Kind[]) => {
  if (kindsFiltered.length == 0)
    throw new Error('You do not have kind for this groupName');

  const toGetRandom = kindsFiltered.map((x) => <GetRandom>{ weight: x.weight });
  const random = getRandom(toGetRandom);
  return kindsFiltered[random];
};

interface ReduceData {
  group: string[];
  kinds: any[];
}

export interface Dna {
  layer: string;
  layerFolder: string;
  position: number;
  kind: Kind;
}
