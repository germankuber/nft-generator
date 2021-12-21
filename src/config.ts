import { bool } from 'aws-sdk/clients/signer';
const normal = 'Normal';
const angel = 'Angel';
const demon = 'Demon';
const zombie = 'Zombie';
const mecha = 'Mecha';

const brown = 'Brown';
const grey = 'Grey';
const lightBlue = 'LightBlue';
const lilac = 'Lilac';
const pink = 'Pink';

const red = 'Red';
const yellow = 'Yellow';

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
        group: [angel],
      },
      {
        kind: 'Demon',
        folder: 'demon',
        weight: 1,
        group: [demon],
      },
      {
        kind: 'Mecha',
        folder: 'mecha',
        weight: 5,
        group: [mecha],
      },
      {
        kind: 'Zombie',
        folder: 'zombie',
        weight: 5,
        group: [zombie],
      },
      {
        kind: 'Red 10',
        folder: 'red',
        weight: 10,
        group: [normal, red],
      },
      {
        kind: 'Yellow 13',
        folder: 'yellow',
        weight: 15,
        group: [normal, yellow],
      },
      {
        kind: 'Pink 13',
        folder: 'pink',
        weight: 15,
        group: [normal, pink],
      },
      {
        kind: 'Grey 13',
        folder: 'grey',
        weight: 15,
        group: [normal, grey],
      },

      {
        kind: 'Lightblue 13',
        folder: 'lightblue',
        weight: 15,
        group: [normal, lightBlue],
      },

      {
        kind: 'Lilac 13',
        folder: 'lilac',
        weight: 15,
        group: [normal, lilac],
      },

      {
        kind: 'Brown 13',
        folder: 'brown',
        weight: 15,
        group: [normal, brown],
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
        groupsDependency: [angel],
      },
      {
        kind: 'Demon',
        folder: 'demon',
        weight: 100,
        groupsDependency: [demon],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 5,
        groupsDependency: [normal, zombie, mecha],
      },
      {
        kind: 'Normal 15',
        folder: 'normal_15',

        weight: 15,
        groupsDependency: [normal, zombie, mecha],
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
        groupsDependency: [angel],
      },
      {
        kind: 'Demon',
        folder: 'demon',
        weight: 100,
        groupsDependency: [demon],
      },
      {
        kind: 'Gear',
        folder: 'mecha',
        weight: 100,
        groupsDependency: [mecha],
      },
      {
        kind: 'Toxic',
        folder: 'toxic',
        weight: 100,
        groupsDependency: [zombie],
      },
      {
        kind: 'Normal 10',
        folder: 'normal_10',
        weight: 5,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 15',
        folder: 'normal_15',
        weight: 15,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 2,5',
        folder: 'normal_2_5',
        weight: 2.5,
        groupsDependency: [normal],
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
        groupsExcepted: [mecha],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 5,
        groupsExcepted: [mecha],
      },
      {
        kind: 'Normal 7,5',
        folder: 'normal_7_5',
        weight: 7.5,
        groupsExcepted: [mecha],
      },
      {
        kind: 'Mecha 8.57',
        folder: 'Mecha/8',
        weight: 8.57,
        groupsDependency: [mecha],
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
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 5,
        groupsExcepted: [normal],
      },
      {
        kind: 'Normal 3',
        folder: 'normal_3',
        weight: 3,
        groupsExcepted: [normal],
      },
      {
        kind: 'Normal 6',
        folder: 'normal_6',
        weight: 6,
        groupsExcepted: [normal],
      },
      {
        kind: 'Normal 8',
        folder: 'normal_8',
        weight: 8,
        groupsDependency: [normal],
      },
      {
        kind: 'Angel 1.12',
        folder: 'Angel/1',
        weight: 1.12,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 3.37',
        folder: 'Angel/3',
        weight: 3.37,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 5.62',
        folder: 'Angel/5',
        weight: 5.62,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 6.74',
        folder: 'Angel/6',
        weight: 6.74,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 8.99',
        folder: 'Angel/8',
        weight: 8.99,
        groupsDependency: [angel],
      },
      {
        kind: 'Demon 1.12',
        folder: 'Demon/1',
        weight: 1.12,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 3.37',
        folder: 'Demon/3',
        weight: 3.37,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 5.62',
        folder: 'Demon/5',
        weight: 5.62,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 6.74',
        folder: 'Demon/6',
        weight: 6.74,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 8.99',
        folder: 'Demon/8',
        weight: 8.99,
        groupsDependency: [demon],
      },

      {
        kind: 'Mecha 1.30',
        folder: 'Mecha/1',
        weight: 1.3,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 3.90',
        folder: 'Mecha/3',
        weight: 3.9,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 6.49',
        folder: 'Mecha/6',
        weight: 6.49,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 7.79',
        folder: 'Mecha/7',
        weight: 7.79,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 10.39',
        folder: 'Mecha/10',
        weight: 10.39,
        groupsDependency: [mecha],
      },
      {
        kind: 'Zombie 1.11',
        folder: 'Zombie/1',
        weight: 1.11,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 3.33',
        folder: 'Zombie/3',
        weight: 3.33,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 6.47',
        folder: 'Zombie/6',
        weight: 6.47,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 5.56',
        folder: 'Zombie/5',
        weight: 5.56,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 8.89',
        folder: 'Zombie/8',
        weight: 8.89,
        groupsDependency: [zombie],
      },
    ],
  },
  {
    layer: 'Accessory',
    folder: '7_Accessories',
    position: 7,
    kinds: [
      {
        kind: 'Normal 1',
        folder: 'normal_1',
        weight: 1,
        groupsDependency: [normal, zombie],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 5,
        groupsExcepted: [normal, zombie],
      },
      {
        kind: 'Normal 2',
        folder: 'normal_2',
        weight: 2,
        groupsExcepted: [normal, zombie],
      },
      {
        kind: 'Normal 50',
        folder: 'normal_50',
        weight: 50,
        groupsExcepted: [normal, zombie],
      },
      {
        kind: 'Angel 1.4',
        folder: 'Angel/1',
        weight: 1.4,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 2.08',
        folder: 'Angel/2',
        weight: 2.08,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 5.21',
        folder: 'Angel/5',
        weight: 5.21,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 52.08',
        folder: 'Angel/52',
        weight: 52.08,
        groupsDependency: [angel],
      },

      {
        kind: 'Angel 1.23',
        folder: 'Demon-Mecha/1',
        weight: 1.23,
        groupsDependency: [demon, mecha],
      },
      {
        kind: 'Angel 2.47',
        folder: 'Demon-Mecha/2',
        weight: 2.47,
        groupsDependency: [demon, mecha],
      },
      {
        kind: 'Angel 6.17',
        folder: 'Demon-Mecha/6',
        weight: 6.17,
        groupsDependency: [demon, mecha],
      },
      {
        kind: 'Angel 61.73',
        folder: 'Demon-Mecha/61',
        weight: 61.73,
        groupsDependency: [demon, mecha],
      },
    ],
  },

  {
    layer: 'Hats',
    folder: '8_Hats',
    position: 8,
    kinds: [
      {
        kind: 'Normal 1',
        folder: 'normal_1',
        weight: 1,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 1.5',
        folder: 'normal_1_5',
        weight: 1.5,
        groupsExcepted: [normal],
      },
      {
        kind: 'Normal 2',
        folder: 'normal_2',
        weight: 2,
        groupsExcepted: [normal],
      },
      {
        kind: 'Normal 2.5',
        folder: 'normal_2_5',
        weight: 2.5,
        groupsExcepted: [normal],
      },
      {
        kind: 'Normal 3',
        folder: 'normal_3',
        weight: 3,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 4',
        folder: 'normal_4',
        weight: 4,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 5,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 6',
        folder: 'normal_6',
        weight: 6,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 8',
        folder: 'normal_8',
        weight: 8,
        groupsDependency: [normal],
      },

      {
        kind: 'Angel-Mecha 1',
        folder: 'Angel-Mecha/1',
        weight: 1,
        groupsDependency: [normal],
      },
      {
        kind: 'Angel-Mecha 1.5',
        folder: 'Angel-Mecha/1_5',
        weight: 1.5,
        groupsExcepted: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 2',
        folder: 'Angel-Mecha/2',
        weight: 2,
        groupsExcepted: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 2.5',
        folder: 'Angel-Mecha/2_5',
        weight: 2.5,
        groupsExcepted: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 3',
        folder: 'Angel-Mecha/3',
        weight: 3,
        groupsDependency: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 4',
        folder: 'Angel-Mecha/4',
        weight: 4,
        groupsDependency: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 5',
        folder: 'Angel-Mecha/5',
        weight: 5,
        groupsDependency: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 6',
        folder: 'Angel-Mecha/6',
        weight: 6,
        groupsDependency: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 8',
        folder: 'Angel-Mecha/8',
        weight: 8,
        groupsDependency: [angel, mecha],
      },

      {
        kind: 'Zombie 1',
        folder: 'Zombie/1',
        weight: 1,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 2',
        folder: 'Zombie/2',
        weight: 2,
        groupsExcepted: [zombie],
      },
      {
        kind: 'Zombie 2.5',
        folder: 'Zombie/2_5',
        weight: 2.5,
        groupsExcepted: [zombie],
      },
      {
        kind: 'Zombie 3',
        folder: 'Zombie/3',
        weight: 3,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 4',
        folder: 'Zombie/4',
        weight: 4,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 5',
        folder: 'Zombie/5',
        weight: 5,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 6',
        folder: 'Zombie/6',
        weight: 6,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 8',
        folder: 'Zombie/8',
        weight: 8,
        groupsDependency: [zombie],
      },

      {
        kind: 'Demon 1.5',
        folder: 'Demon/1_5',
        weight: 1.5,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 2',
        folder: 'Demon/2',
        weight: 2,
        groupsExcepted: [demon],
      },
      {
        kind: 'Demon 2.5',
        folder: 'Demon/2_5',
        weight: 2.5,
        groupsExcepted: [demon],
      },
      {
        kind: 'Demon 3',
        folder: 'Demon/3',
        weight: 3,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 4',
        folder: 'Demon/4',
        weight: 4,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 5',
        folder: 'Demon/5',
        weight: 5,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 6',
        folder: 'Demon/6',
        weight: 6,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 8',
        folder: 'Demon/8',
        weight: 8,
        groupsDependency: [demon],
      },
    ],
  },

  {
    layer: 'Arms',
    folder: '9_Arms',
    position: 9,
    kinds: [
      {
        kind: 'Brown 5',
        folder: 'Brown/5',
        weight: 5,
        groupsDependency: [brown],
      },
      {
        kind: 'Brown 5',
        folder: 'Brown/6',
        weight: 6,
        groupsDependency: [brown],
      },
      {
        kind: 'Brown 13',
        folder: 'Brown/13',
        weight: 13,
        groupsDependency: [brown],
      },

      {
        kind: 'Grey 5',
        folder: 'Grey/5',
        weight: 5,
        groupsDependency: [grey],
      },
      {
        kind: 'Grey 6',
        folder: 'Grey/6',
        weight: 6,
        groupsDependency: [grey],
      },
      {
        kind: 'Grey 13',
        folder: 'Grey/13',
        weight: 13,
        groupsDependency: [grey],
      },

      {
        kind: 'LightBlue 5',
        folder: 'LightBlue/5',
        weight: 5,
        groupsDependency: [lightBlue],
      },
      {
        kind: 'LightBlue 6',
        folder: 'LightBlue/6',
        weight: 6,
        groupsDependency: [lightBlue],
      },
      {
        kind: 'LightBlue 13',
        folder: 'LightBlue/13',
        weight: 13,
        groupsDependency: [lightBlue],
      },

      {
        kind: 'Lilac 5',
        folder: 'Lilac/5',
        weight: 5,
        groupsDependency: [lilac],
      },
      {
        kind: 'Lilac 6',
        folder: 'Lilac/6',
        weight: 6,
        groupsDependency: [lilac],
      },
      {
        kind: 'Lilac 13',
        folder: 'Lilac/13',
        weight: 13,
        groupsDependency: [lilac],
      },

      {
        kind: 'Pink 5',
        folder: 'Pink/5',
        weight: 5,
        groupsDependency: [pink],
      },
      {
        kind: 'Pink 6',
        folder: 'Pink/6',
        weight: 6,
        groupsDependency: [pink],
      },
      {
        kind: 'Pink 13',
        folder: 'Pink/13',
        weight: 13,
        groupsDependency: [pink],
      },

      {
        kind: 'Red 5',
        folder: 'Red/5',
        weight: 5,
        groupsDependency: [red],
      },
      {
        kind: 'Red 5',
        folder: 'Red/6',
        weight: 6,
        groupsDependency: [red],
      },
      {
        kind: 'Red 13',
        folder: 'Red/13',
        weight: 13,
        groupsDependency: [red],
      },

      {
        kind: 'Yellow 5',
        folder: 'Yellow/5',
        weight: 5,
        groupsDependency: [yellow],
      },
      {
        kind: 'Yellow 5',
        folder: 'Yellow/6',
        weight: 6,
        groupsDependency: [yellow],
      },
      {
        kind: 'Yellow 13',
        folder: 'Yellow/13',
        weight: 13,
        groupsDependency: [yellow],
      },

      {
        kind: 'Angel 5',
        folder: 'Angel/5',
        weight: 5,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 5',
        folder: 'Angel/6',
        weight: 6,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 13',
        folder: 'Angel/13',
        weight: 13,
        groupsDependency: [angel],
      },

      {
        kind: 'Demon 5',
        folder: 'Demon/5',
        weight: 5,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 5',
        folder: 'Demon/6',
        weight: 6,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 13',
        folder: 'Demon/13',
        weight: 13,
        groupsDependency: [demon],
      },

      {
        kind: 'Mecha 5',
        folder: 'Mecha/5',
        weight: 5,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 5',
        folder: 'Mecha/6',
        weight: 6,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 13',
        folder: 'Mecha/13',
        weight: 13,
        groupsDependency: [mecha],
      },

      {
        kind: 'Zombie 5',
        folder: 'Zombie/5',
        weight: 5,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 5',
        folder: 'Zombie/6',
        weight: 6,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 13',
        folder: 'Zombie/13',
        weight: 13,
        groupsDependency: [zombie],
      },
    ],
  },
  {
    layer: 'Frame',
    folder: '10_Frame',
    position: 10,
    kinds: [
      {
        kind: 'Frame 5',
        folder: '100',
        weight: 100,
        forAll: true,
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
