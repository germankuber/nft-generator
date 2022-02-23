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
    files: [
      {
        name: 'BodyColor_Angel.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Angel',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Brown.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Brown',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Demon.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Demon',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Grey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Grey',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Lightblue.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Lightblue',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Lilac.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Lilac',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Mecha.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Mecha',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Pink.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Pink',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Red.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Red',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Yellow.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Yellow',
            },
          ],
        },
      },
      {
        name: 'BodyColor_Zombie.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Body Color',
              value: 'Zombie',
            },
          ],
        },
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
        weight: 10,
        groupsDependency: [normal, zombie, mecha],
      },
      {
        kind: 'Normal 15',
        folder: 'normal_15',

        weight: 90,
        groupsDependency: [normal, zombie, mecha],
      },
    ],
    files: [
      {
        name: 'Background_Angel.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'Angel',
            },
          ],
        },
      },
      {
        name: 'Background_Demon.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'Demon',
            },
          ],
        },
      },
      {
        name: 'Background_Gold.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'Gold',
            },
          ],
        },
      },
      {
        name: 'Background_GradientGrey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'GradientGrey',
            },
          ],
        },
      },
      {
        name: 'Background_Green.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'Green',
            },
          ],
        },
      },
      {
        name: 'Background_Grey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'Grey',
            },
          ],
        },
      },
      {
        name: 'Background_LightBlue.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'LightBlue',
            },
          ],
        },
      },
      {
        name: 'Background_Red.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'Red',
            },
          ],
        },
      },
      {
        name: 'Background_Violet.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'Violet',
            },
          ],
        },
      },
      {
        name: 'Background_Yellow.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 1',
              value: 'Yellow',
            },
          ],
        },
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
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 10,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 10',
        folder: 'normal_10',
        weight: 40,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 15',
        folder: 'normal_15',
        weight: 45,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 2,5',
        folder: 'normal_2_5',
        weight: 5,
        groupsDependency: [normal],
      },
    ],
    files: [
      {
        name: '2Background_Angel.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Angel',
            },
          ],
        },
      },
      {
        name: '2Background_Bubbles.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Bubbles',
            },
          ],
        },
      },
      {
        name: '2Background_Clouds.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Clouds',
            },
          ],
        },
      },
      {
        name: '2Background_Demon.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Demon',
            },
          ],
        },
      },
      {
        name: '2Background_Elipsis.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Elipsis',
            },
          ],
        },
      },
      {
        name: '2Background_Gear.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Gear',
            },
          ],
        },
      },
      {
        name: '2Background_Geometric.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Geometric',
            },
          ],
        },
      },
      {
        name: '2Background_Heart.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Heart',
            },
          ],
        },
      },
      {
        name: '2Background_Japanesse.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Japanesse',
            },
          ],
        },
      },
      {
        name: '2Background_Mandala.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Mandala',
            },
          ],
        },
      },
      {
        name: '2Background_Mosaic.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Mosaic',
            },
          ],
        },
      },
      {
        name: '2Background_Naruto.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Naruto',
            },
          ],
        },
      },
      {
        name: '2Background_Saturn.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Saturn',
            },
          ],
        },
      },
      {
        name: '2Background_Square.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Square',
            },
          ],
        },
      },
      {
        name: '2Background_Toxic.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Background 2',
              value: 'Toxic',
            },
          ],
        },
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
        weight: 7.5,
        groupsExcepted: [mecha],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 10,
        groupsExcepted: [mecha],
      },
      {
        kind: 'Normal 7,5',
        folder: 'normal_7_5',
        weight: 82.5,
        groupsExcepted: [mecha],
      },
      {
        kind: 'Mecha 8.57',
        folder: 'Mecha/8',
        weight: 8.57,
        groupsDependency: [mecha],
      },
    ],
    files: [
      {
        name: 'Bottoms_BaggieGreen.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'BaggieGreen',
            },
          ],
        },
      },
      {
        name: 'Bottoms_BaggieYellow.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'BaggieYellow',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Bitcoin.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Bitcoin',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Black.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Black',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Boxers.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Boxers',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Camouflaje.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Camouflaje',
            },
          ],
        },
      },
      {
        name: 'Bottoms_CuttedJeans.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'CuttedJeans',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Diaper.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Diaper',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Ethereum.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Ethereum',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Gladiator.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Gladiator',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Jeans.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Jeans',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Leaf.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Leaf',
            },
          ],
        },
      },
      {
        name: 'Bottoms_None.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'None',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Skirt1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Skirt1',
            },
          ],
        },
      },
      {
        name: 'Bottoms_Skirt2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'Skirt2',
            },
          ],
        },
      },
      {
        name: 'Bottoms_White.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Bottoms',
              value: 'White',
            },
          ],
        },
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
    files: [
      {
        name: 'Pin_AkuAkuMask.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'AkuAkuMask',
            },
          ],
        },
      },
      {
        name: 'Pin_AmongUs.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'AmongUs',
            },
          ],
        },
      },
      {
        name: 'Pin_Banana.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Banana',
            },
          ],
        },
      },
      {
        name: 'Pin_Bitcoin.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Bitcoin',
            },
          ],
        },
      },
      {
        name: 'Pin_Dignity.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Dignity',
            },
          ],
        },
      },
      {
        name: 'Pin_DragonBall.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'DragonBall',
            },
          ],
        },
      },
      {
        name: 'Pin_ET.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'ET',
            },
          ],
        },
      },
      {
        name: 'Pin_Ethereum.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Ethereum',
            },
          ],
        },
      },
      {
        name: 'Pin_FuckYou.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'FuckYou',
            },
          ],
        },
      },
      {
        name: 'Pin_Gm.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Gm',
            },
          ],
        },
      },
      {
        name: 'Pin_HarryPotter.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'HarryPotter',
            },
          ],
        },
      },
      {
        name: 'Pin_Hold.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Hold',
            },
          ],
        },
      },
      {
        name: 'Pin_Iluminati.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Iluminati',
            },
          ],
        },
      },
      {
        name: 'Pin_Incognito.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Incognito',
            },
          ],
        },
      },
      {
        name: 'Pin_MarihuanaLeaf.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'MarihuanaLeaf',
            },
          ],
        },
      },
      {
        name: 'Pin_Mario.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Mario',
            },
          ],
        },
      },
      {
        name: 'Pin_Mockingjay.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Mockingjay',
            },
          ],
        },
      },
      {
        name: 'Pin_Naruto.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Naruto',
            },
          ],
        },
      },
      {
        name: 'Pin_Nirvana.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Nirvana',
            },
          ],
        },
      },
      {
        name: 'Pin_NoFace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'NoFace',
            },
          ],
        },
      },
      {
        name: 'Pin_NyanCat.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'NyanCat',
            },
          ],
        },
      },
      {
        name: 'Pin_Pepe.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Pepe',
            },
          ],
        },
      },
      {
        name: 'Pin_Pickle.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Pickle',
            },
          ],
        },
      },
      {
        name: 'Pin_Pixar.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Pixar',
            },
          ],
        },
      },
      {
        name: 'Pin_Pokeball.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Pokeball',
            },
          ],
        },
      },
      {
        name: 'Pin_RedApple.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'RedApple',
            },
          ],
        },
      },
      {
        name: 'Pin_RollingStones.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'RollingStones',
            },
          ],
        },
      },
      {
        name: 'Pin_SLP.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'SLP',
            },
          ],
        },
      },
      {
        name: 'Pin_Shiba.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Shiba',
            },
          ],
        },
      },
      {
        name: 'Pin_Starwars.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'Starwars',
            },
          ],
        },
      },
      {
        name: 'Pin_TheNFTBillboard.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'TheNFTBillboard',
            },
          ],
        },
      },
      {
        name: 'Pin_ToTheMoon.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Pins',
              value: 'ToTheMoon',
            },
          ],
        },
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
        weight: 7,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 3',
        folder: 'normal_3',
        weight: 21,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 20,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 6',
        folder: 'normal_6',
        weight: 12,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 8',
        folder: 'normal_8',
        weight: 40,
        groupsDependency: [normal],
      },
      {
        kind: 'Angel 1.12',
        folder: 'Angel/1',
        weight: 2.24,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 3.37',
        folder: 'Angel/3',
        weight: 16.85,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 5.62',
        folder: 'Angel/5',
        weight: 22.48,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 6.74',
        folder: 'Angel/6',
        weight: 13.48,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 8.99',
        folder: 'Angel/8',
        weight: 44.95,
        groupsDependency: [angel],
      },
      {
        kind: 'Demon 1.12',
        folder: 'Demon/1',
        weight: 2.24,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 3.37',
        folder: 'Demon/3',
        weight: 16.85,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 5.62',
        folder: 'Demon/5',
        weight: 22.48,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 6.74',
        folder: 'Demon/6',
        weight: 13.48,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 8.99',
        folder: 'Demon/8',
        weight: 44.95,
        groupsDependency: [demon],
      },

      {
        kind: 'Mecha 1.30',
        folder: 'Mecha/1',
        weight: 3.9,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 3.90',
        folder: 'Mecha/3',
        weight: 15.6,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 6.49',
        folder: 'Mecha/6',
        weight: 12.98,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 7.79',
        folder: 'Mecha/7',
        weight: 15.58,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 10.39',
        folder: 'Mecha/10',
        weight: 51.95,
        groupsDependency: [mecha],
      },
      {
        kind: 'Zombie 1.11',
        folder: 'Zombie/1',
        weight: 3.33,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 3.33',
        folder: 'Zombie/3',
        weight: 16.65,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 6.47',
        folder: 'Zombie/6',
        weight: 12.94,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 5.56',
        folder: 'Zombie/5',
        weight: 22.08,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 8.89',
        folder: 'Zombie/8',
        weight: 44.45,
        groupsDependency: [zombie],
      },
    ],
    files: [
      {
        name: 'Face_Angry.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Angry',
            },
          ],
        },
      },
      {
        name: 'Face_Anime.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Anime',
            },
          ],
        },
      },
      {
        name: 'Face_Beard.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Beard',
            },
          ],
        },
      },
      {
        name: 'Face_BubbleGum.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'BubbleGum',
            },
          ],
        },
      },
      {
        name: 'Face_Cheerful.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cheerful',
            },
          ],
        },
      },
      {
        name: 'Face_Cigarette.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cigarette',
            },
          ],
        },
      },
      {
        name: 'Face_Cuak.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cuak',
            },
          ],
        },
      },
      {
        name: 'Face_Emo.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Emo',
            },
          ],
        },
      },
      {
        name: 'Face_Fangs.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Fangs',
            },
          ],
        },
      },
      {
        name: 'Face_Happy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Happy',
            },
          ],
        },
      },
      {
        name: 'Face_Kitten.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Kitten',
            },
          ],
        },
      },
      {
        name: 'Face_Moustache.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Moustache',
            },
          ],
        },
      },
      {
        name: 'Face_Orc.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Orc',
            },
          ],
        },
      },
      {
        name: 'Face_Rainbow.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Rainbow',
            },
          ],
        },
      },
      {
        name: 'Face_Rick.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Rick',
            },
          ],
        },
      },
      {
        name: 'Face_SleepyDrool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SleepyDrool',
            },
          ],
        },
      },
      {
        name: 'Face_SuperCool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperCool',
            },
          ],
        },
      },
      {
        name: 'Face_SuperHappy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperHappy',
            },
          ],
        },
      },
      {
        name: 'Face_Tattoo.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tattoo',
            },
          ],
        },
      },
      {
        name: 'Face_Tired.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tired',
            },
          ],
        },
      },
      {
        name: 'Face_Tongue.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tongue',
            },
          ],
        },
      },
      {
        name: 'Face_Uwu.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Uwu',
            },
          ],
        },
      },
      {
        name: 'Face_War.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'War',
            },
          ],
        },
      },
      {
        name: 'Face_Wink.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Wink',
            },
          ],
        },
      },
      {
        name: 'Face_XEyes.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'XEyes',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Angry.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Angry',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Beard.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Beard',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_BubbleGum.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'BubbleGum',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Cheerful.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cheerful',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Cigarette.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cigarette',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Cuak.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cuak',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Emo.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Emo',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Fangs.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Fangs',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Happy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Happy',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Kitten.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Kitten',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Orc.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Orc',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_SleepyDrool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SleepyDrool',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_SuperCool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperCool',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_SuperHappy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperHappy',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Tired.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tired',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Uwu.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Uwu',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_War.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'War',
            },
          ],
        },
      },
      {
        name: 'Face_Angel_Wink.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Wink',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Angry.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Angry',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Beard.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Beard',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_BubbleGum.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'BubbleGum',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Cheerful.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cheerful',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Cigarette.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cigarette',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Cuak.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cuak',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Emo.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Emo',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Fangs.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Fangs',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Happy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Happy',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Kitten.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Kitten',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Orc.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Orc',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_SleepyDrool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SleepyDrool',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_SuperCool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperCool',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_SuperHappy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperHappy',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Tired.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tired',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Uwu.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Uwu',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_War.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'War',
            },
          ],
        },
      },
      {
        name: 'Face_Demon_Wink.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Wink',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Angry.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Angry',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Beard.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Beard',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_BubbleGum.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'BubbleGum',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Cheerful.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cheerful',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Cigarette.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cigarette',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Cuak.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cuak',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Emo.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Emo',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Happy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Happy',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Kitten.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Kitten',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_SleepyDrool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SleepyDrool',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_SuperCool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperCool',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_SuperHappy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperHappy',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Tired.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tired',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Tongue.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tongue',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_War.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'War',
            },
          ],
        },
      },
      {
        name: 'Face_Mecha_Wink.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Wink',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Angry.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Angry',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Beard.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Beard',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_BubbleGum.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'BubbleGum',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Cheerful.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cheerful',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Cigarette.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cigarette',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Cuak.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Cuak',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Emo.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Emo',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Fangs.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Fangs',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Happy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Happy',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Kitten.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Kitten',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Orc.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Orc',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_SleepyDrool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SleepyDrool',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_SuperCool.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperCool',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_SuperHappy.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'SuperHappy',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Tired.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tired',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Tongue.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Tongue',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Uwu.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Uwu',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_War.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'War',
            },
          ],
        },
      },
      {
        name: 'Face_Zombie_Wink.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Face',
              value: 'Wink',
            },
          ],
        },
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
        weight: 2,
        groupsDependency: [normal, zombie],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 40,
        groupsDependency: [normal, zombie],
      },
      {
        kind: 'Normal 2',
        folder: 'normal_2',
        weight: 8,
        groupsDependency: [normal, zombie],
      },
      {
        kind: 'Normal 50',
        folder: 'normal_50',
        weight: 50,
        groupsDependency: [normal, zombie],
      },
      {
        kind: 'Angel 1.4',
        folder: 'Angel/1',
        weight: 2.8,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 2.08',
        folder: 'Angel/2',
        weight: 4.16,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 5.21',
        folder: 'Angel/5',
        weight: 41.68,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 52.08',
        folder: 'Angel/52',
        weight: 52.08,
        groupsDependency: [angel],
      },

      {
        kind: 'Demon-Mecha 1.23',
        folder: 'Demon-Mecha/1',
        weight: 2.46,
        groupsDependency: [demon, mecha],
      },
      {
        kind: 'Demon-Mecha 2.47',
        folder: 'Demon-Mecha/2',
        weight: 4.94,
        groupsDependency: [demon, mecha],
      },
      {
        kind: 'Demon-Mecha 6.17',
        folder: 'Demon-Mecha/6',
        weight: 37.02,
        groupsDependency: [demon, mecha],
      },
      {
        kind: 'Demon-Mecha 61.73',
        folder: 'Demon-Mecha/61',
        weight: 61.73,
        groupsDependency: [demon, mecha],
      },
    ],
    files: [
      {
        name: 'Accessesory_3dGlasses.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: '3dGlasses',
            },
          ],
        },
      },
      {
        name: 'Accessesory_EyePatch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'EyePatch',
            },
          ],
        },
      },
      {
        name: 'Accessesory_FacePiercing.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'FacePiercing',
            },
          ],
        },
      },
      {
        name: 'Accessesory_Frekels.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'Frekels',
            },
          ],
        },
      },
      {
        name: 'Accessesory_Gamma.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'Gamma',
            },
          ],
        },
      },
      {
        name: 'Accessesory_Glasses.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'Glasses',
            },
          ],
        },
      },
      {
        name: 'Accessesory_Glitter.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'Glitter',
            },
          ],
        },
      },
      {
        name: 'Accessesory_HeartGlasses.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'HeartGlasses',
            },
          ],
        },
      },
      {
        name: 'Accessesory_JohnLennonGlasses.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'JohnLennonGlasses',
            },
          ],
        },
      },
      {
        name: 'Accessesory_None.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'None',
            },
          ],
        },
      },
      {
        name: 'Accessesory_Scar.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'Scar',
            },
          ],
        },
      },
      {
        name: 'Accessesory_Scar2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'Scar2',
            },
          ],
        },
      },
      {
        name: 'Accessesory_Sunglasses.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'Sunglasses',
            },
          ],
        },
      },
      {
        name: 'Accessesory_ThirdEye.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'ThirdEye',
            },
          ],
        },
      },
      {
        name: 'Accessesory_XRay.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Accessesory',
              value: 'XRay',
            },
          ],
        },
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
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 2',
        folder: 'normal_2',
        weight: 8,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 2.5',
        folder: 'normal_2_5',
        weight: 7.5,
        groupsDependency: [normal],
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
        weight: 16,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 5',
        folder: 'normal_5',
        weight: 35,
        groupsDependency: [normal],
      },
      {
        kind: 'Normal 6',
        folder: 'normal_6',
        weight: 24,
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
        groupsDependency: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 2',
        folder: 'Angel-Mecha/2',
        weight: 8,
        groupsDependency: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 2.5',
        folder: 'Angel-Mecha/2_5',
        weight: 7.5,
        groupsDependency: [angel, mecha],
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
        weight: 35,
        groupsDependency: [angel, mecha],
      },
      {
        kind: 'Angel-Mecha 6',
        folder: 'Angel-Mecha/6',
        weight: 24,
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
        weight: 8,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 2.5',
        folder: 'Zombie/2_5',
        weight: 2.5,
        groupsDependency: [zombie],
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
        weight: 30,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 6',
        folder: 'Zombie/6',
        weight: 24,
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
        weight: 8,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 2.5',
        folder: 'Demon/2_5',
        weight: 7.5,
        groupsDependency: [demon],
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
        weight: 12,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 5',
        folder: 'Demon/5',
        weight: 35,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 6',
        folder: 'Demon/6',
        weight: 24,
        groupsDependency: [demon],
      },
      {
        kind: 'Demon 8',
        folder: 'Demon/8',
        weight: 8,
        groupsDependency: [demon],
      },
    ],
    files: [
      {
        name: 'Hat_BackCap.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'BackCap',
            },
          ],
        },
      },
      {
        name: 'Hat_BackCap2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'BackCap2',
            },
          ],
        },
      },
      {
        name: 'Hat_BeannieBlue.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'BeannieBlue',
            },
          ],
        },
      },
      {
        name: 'Hat_BeannieYellow.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'BeannieYellow',
            },
          ],
        },
      },
      {
        name: 'Hat_BigHorns.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'BigHorns',
            },
          ],
        },
      },
      {
        name: 'Hat_Crown.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Crown',
            },
          ],
        },
      },
      {
        name: 'Hat_Detective.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Detective',
            },
          ],
        },
      },
      {
        name: 'Hat_Fisherman.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Fisherman',
            },
          ],
        },
      },
      {
        name: 'Hat_Google.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Google',
            },
          ],
        },
      },
      {
        name: 'Hat_GreenCap.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'GreenCap',
            },
          ],
        },
      },
      {
        name: 'Hat_GreyCap.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'GreyCap',
            },
          ],
        },
      },
      {
        name: 'Hat_Halo.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Halo',
            },
          ],
        },
      },
      {
        name: 'Hat_IndianaJones.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'IndianaJones',
            },
          ],
        },
      },
      {
        name: 'Hat_KarateBand.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'KarateBand',
            },
          ],
        },
      },
      {
        name: 'Hat_LeavesCrown.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'LeavesCrown',
            },
          ],
        },
      },
      {
        name: 'Hat_None.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'None',
            },
          ],
        },
      },
      {
        name: 'Hat_PaperHat.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'PaperHat',
            },
          ],
        },
      },
      {
        name: 'Hat_Raiden.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Raiden',
            },
          ],
        },
      },
      {
        name: 'Hat_SantaHat.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'SantaHat',
            },
          ],
        },
      },
      {
        name: 'Hat_SmallHorns.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'SmallHorns',
            },
          ],
        },
      },
      {
        name: 'Hat_StrawHat.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'StrawHat',
            },
          ],
        },
      },
      {
        name: 'Hat_Tiara.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Tiara',
            },
          ],
        },
      },
      {
        name: 'Hat_TightyWhities.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'TightyWhities',
            },
          ],
        },
      },
      {
        name: 'Hat_Wig.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Wig',
            },
          ],
        },
      },
      {
        name: 'Hat_Wizard.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Hat',
              value: 'Wizard',
            },
          ],
        },
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
        weight: 12,
        groupsDependency: [brown],
      },
      {
        kind: 'Brown 13',
        folder: 'Brown/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [grey],
      },
      {
        kind: 'Grey 13',
        folder: 'Grey/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [lightBlue],
      },
      {
        kind: 'LightBlue 13',
        folder: 'LightBlue/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [lilac],
      },
      {
        kind: 'Lilac 13',
        folder: 'Lilac/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [pink],
      },
      {
        kind: 'Pink 13',
        folder: 'Pink/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [red],
      },
      {
        kind: 'Red 13',
        folder: 'Red/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [yellow],
      },
      {
        kind: 'Yellow 13',
        folder: 'Yellow/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [angel],
      },
      {
        kind: 'Angel 13',
        folder: 'Angel/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [mecha],
      },
      {
        kind: 'Mecha 13',
        folder: 'Mecha/13',
        weight: 78,
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
        weight: 12,
        groupsDependency: [zombie],
      },
      {
        kind: 'Zombie 13',
        folder: 'Zombie/13',
        weight: 78,
        groupsDependency: [zombie],
      },
    ],
    files: [
      {
        name: 'Arms_Angel_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Angel_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Demon_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_LightBlue_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Mecha_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ist',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'uck',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'andsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'i',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'tsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'oveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Red_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'orch',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Zombie_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Brown_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Grey_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Lilac_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Pink_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_Fist.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fist',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_Fuck.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Fuck',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_HandsUp.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'HandsUp',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_Hi.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Hi',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_ItsOkey.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'ItsOkey',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_LoveAndPeace.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'LoveAndPeace',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_Sign1.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign1',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_Sign2.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign2',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_Sign3.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Sign3',
            },
          ],
        },
      },
      {
        name: 'Arms_Yellow_Torch.png',
        metadata: {
          attributes: [
            {
              trait_type: 'Arm',
              value: 'Torch',
            },
          ],
        },
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
    ]
  },
];
export interface Config {
  layer: string;
  position: number;
  folder: string;
  kinds: Kind[];
  files?: FileData[];
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

export interface FileData {
  name: string;
  metadata: FileMetaData;
}

export interface FileMetaData {
  attributes: Attribute[];
}

export interface Attribute {
  trait_type: string;
  value: string;
}
