export const configurationTest: Config[] = [
  {
    layer: 'Body Color',
    folder: '3_BodyColor',
    position: 3,
    kinds: [
      {
        kind: 'Angel',
        folder: 'angel',
        weight: 1,
        group: ['Angel'],
      },
      {
        kind: 'Demon',
        folder: 'demon',
        weight: 1,
        group: ['Demon'],
      },
      {
        kind: 'Mecha',
        folder: 'mecha',
        weight: 5,
        group: ['Mecha'],
      },
      {
        kind: 'Zombie',
        folder: 'zombie',
        weight: 5,
        group: ['Zombie'],
      },
      {
        kind: 'Normal 10',
        folder: 'normal_10',
        weight: 10,
        group: ['Normal'],
      },
      {
        kind: 'Normal 13',
        folder: 'normal_13',
        weight: 15,
        group: ['Normal'],
      },
    ],
  },
  {
    layer: 'Background 1',
    folder: '1_Background',

    position: 1,
    kinds: [
      {
        kind: 'Angel',
        folder: 'angel',
        weight: 100,
        groupsDependency: ['Angel'],
      },
      {
        kind: 'Demon',
        folder: 'demon',
        weight: 100,
        groupsDependency: ['Demon'],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 5,
        groupsDependency: ['Normal'],
      },
      {
        kind: 'Normal 15',
        folder: 'normal_15',

        weight: 15,
        groupsDependency: ['Normal'],
      },
    ],
  },
  {
    layer: 'Background 2',
    folder: '2_2Background',
    position: 2,
    kinds: [
      {
        kind: 'Angel',
        folder: 'angel',
        weight: 100,
        groupsDependency: ['Angel'],
      },
      {
        kind: 'Demon',
        folder: 'demon',
        weight: 100,
        groupsDependency: ['Demon'],
      },
      {
        kind: 'Gear',
        folder: 'mecha',
        weight: 100,
        groupsDependency: ['Mecha'],
      },
      {
        kind: 'Toxic',
        folder: 'toxic',
        weight: 100,
        groupsDependency: ['Zombie'],
      },
      {
        kind: 'Normal 10',
        folder: 'normal_10',
        weight: 5,
        groupsDependency: ['Normal'],
      },
      {
        kind: 'Normal 15',
        folder: 'normal_15',
        weight: 15,
        groupsDependency: ['Normal'],
      },
      {
        kind: 'Normal 2,5',
        folder: 'normal_2_5',
        weight: 2.5,
        groupsDependency: ['Normal'],
      },
    ],
  },
];
export interface Config {
  layer: string;
  position: number;
  folder: string;
  kinds: Kind[];
}

export interface Kind {
  kind: string;
  weight: number;
  folder: string;
  group?: string[];
  groupsDependency?: string[];
}
