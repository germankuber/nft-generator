import { bool } from 'aws-sdk/clients/signer';

export const configuration: Config[] = [
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
        groupsDependency: ['Normal', 'Zombie', 'Mecha'],
      },
      {
        kind: 'Normal 15',
        folder: 'normal_15',

        weight: 15,
        groupsDependency: ['Normal', 'Zombie', 'Mecha'],
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
  {
    layer: 'Bottoms',
    folder: '4_Bottoms',
    position: 4,
    kinds: [
      {
        kind: 'Normal 2,5',
        folder: 'normal_2_5',
        weight: 2.5,
        groupsExcepted: ['Mecha'],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 5,
        groupsExcepted: ['Mecha'],
      },
      {
        kind: 'Normal 7,5',
        folder: 'normal_7_5',
        weight: 7.5,
        groupsExcepted: ['Mecha'],
      },
      {
        kind: 'Mecha 8.57',
        folder: 'Mecha/8',
        weight: 8.57,
        groupsDependency: ['Mecha'],
      },
    ],
  },
  {
    layer: 'Pins',
    folder: '5_Pins',
    position: 5,
    kinds: [
      {
        kind: 'Normal 3,13',
        folder: 'normal_3_13',
        weight: 3.13,
        forAll: true,
      },
    ],
  },
  {
    layer: 'Faces',
    folder: '6_Faces',
    position: 6,
    kinds: [
      {
        kind: 'Normal 1',
        folder: 'normal_1',
        weight: 1,
        groupsDependency: ['Normal'],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 5,
        groupsExcepted: ['Normal'],
      },
      {
        kind: 'Normal 3',
        folder: 'normal_3',
        weight: 3,
        groupsExcepted: ['Normal'],
      },
      {
        kind: 'Normal 6',
        folder: 'normal_6',
        weight: 6,
        groupsExcepted: ['Normal'],
      },
      {
        kind: 'Normal 8',
        folder: 'normal_8',
        weight: 8,
        groupsDependency: ['Normal'],
      },
      {
        kind: 'Angel 1.12',
        folder: 'Angel/1',
        weight: 1.12,
        groupsDependency: ['Angel'],
      },
      {
        kind: 'Angel 3.37',
        folder: 'Angel/3',
        weight: 3.37,
        groupsDependency: ['Angel'],
      },
      {
        kind: 'Angel 5.62',
        folder: 'Angel/5',
        weight: 5.62,
        groupsDependency: ['Angel'],
      },
      {
        kind: 'Angel 6.74',
        folder: 'Angel/6',
        weight: 6.74,
        groupsDependency: ['Angel'],
      },
      {
        kind: 'Angel 8.99',
        folder: 'Angel/8',
        weight: 8.99,
        groupsDependency: ['Angel'],
      },
      {
        kind: 'Demon 1.12',
        folder: 'Demon/1',
        weight: 1.12,
        groupsDependency: ['Demon'],
      },
      {
        kind: 'Demon 3.37',
        folder: 'Demon/3',
        weight: 3.37,
        groupsDependency: ['Demon'],
      },
      {
        kind: 'Demon 5.62',
        folder: 'Demon/5',
        weight: 5.62,
        groupsDependency: ['Demon'],
      },
      {
        kind: 'Demon 6.74',
        folder: 'Demon/6',
        weight: 6.74,
        groupsDependency: ['Demon'],
      },
      {
        kind: 'Demon 8.99',
        folder: 'Demon/8',
        weight: 8.99,
        groupsDependency: ['Demon'],
      },

      {
        kind: 'Mecha 1.30',
        folder: 'Mecha/1',
        weight: 1.3,
        groupsDependency: ['Mecha'],
      },
      {
        kind: 'Mecha 3.90',
        folder: 'Mecha/3',
        weight: 3.9,
        groupsDependency: ['Mecha'],
      },
      {
        kind: 'Mecha 6.49',
        folder: 'Mecha/6',
        weight: 6.49,
        groupsDependency: ['Mecha'],
      },
      {
        kind: 'Mecha 7.79',
        folder: 'Mecha/7',
        weight: 7.79,
        groupsDependency: ['Mecha'],
      },
      {
        kind: 'Mecha 10.39',
        folder: 'Mecha/10',
        weight: 10.39,
        groupsDependency: ['Mecha'],
      },



      {
        kind: 'Zombie 1.11',
        folder: 'Zombie/1',
        weight: 1.11,
        groupsDependency: ['Zombie'],
      },
      {
        kind: 'Zombie 3.33',
        folder: 'Zombie/3',
        weight: 3.33,
        groupsDependency: ['Zombie'],
      },
      {
        kind: 'Zombie 6.47',
        folder: 'Zombie/6',
        weight: 6.47,
        groupsDependency: ['Zombie'],
      },
      {
        kind: 'Zombie 5.56',
        folder: 'Zombie/5',
        weight: 5.56,
        groupsDependency: ['Zombie'],
      },
      {
        kind: 'Zombie 8.89',
        folder: 'Zombie/8',
        weight: 8.89,
        groupsDependency: ['Zombie'],
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
  forAll?: bool;
  groupsDependency?: string[];
  groupsExcepted?: string[];
}
