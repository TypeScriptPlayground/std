import { ValuesFromObject } from "../../../type/mod.ts";

/**
 * This object contains all 8-Bit normal color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit)
 */
const colorfulColors = {
  HEX_000000: '16',
  HEX_00005F: '17',
  HEX_000087: '18',
  HEX_0000AF: '19',
  HEX_0000D7: '20',
  HEX_0000FF: '21',
  HEX_005F00: '22',
  HEX_005F5F: '23',
  HEX_005F87: '24',
  HEX_005FAF: '25',
  HEX_005FD7: '26',
  HEX_005FFF: '27',
  HEX_008700: '28',
  HEX_00875F: '29',
  HEX_008787: '30',
  HEX_0087AF: '31',
  HEX_0087D7: '32',
  HEX_0087FF: '33',
  HEX_00AF00: '34',
  HEX_00AF5F: '35',
  HEX_00AF87: '36',
  HEX_00AFAF: '37',
  HEX_00AFD7: '38',
  HEX_00AFFF: '39',
  HEX_00D700: '40',
  HEX_00D75F: '41',
  HEX_00D787: '42',
  HEX_00D7AF: '43',
  HEX_00D7D7: '44',
  HEX_00D7FF: '45',
  HEX_00FF00: '46',
  HEX_00FF5F: '47',
  HEX_00FF87: '48',
  HEX_00FFAF: '49',
  HEX_00FFD7: '50',
  HEX_00FFFF: '51',
  HEX_5F0000: '52',
  HEX_5F005F: '53',
  HEX_5F0087: '54',
  HEX_5F00AF: '55',
  HEX_5F00D7: '56',
  HEX_5F00FF: '57',
  HEX_5F5F00: '58',
  HEX_5F5F5F: '59',
  HEX_5F5F87: '60',
  HEX_5F5FAF: '61',
  HEX_5F5FD7: '62',
  HEX_5F5FFF: '63',
  HEX_5F8700: '64',
  HEX_5F875F: '65',
  HEX_5F8787: '66',
  HEX_5F87AF: '67',
  HEX_5F87D7: '68',
  HEX_5F87FF: '69',
  HEX_5FAF00: '70',
  HEX_5FAF5F: '71',
  HEX_5FAF87: '72',
  HEX_5FAFAF: '73',
  HEX_5FAFD7: '74',
  HEX_5FAFFF: '75',
  HEX_5FD700: '76',
  HEX_5FD75F: '77',
  HEX_5FD787: '78',
  HEX_5FD7AF: '79',
  HEX_5FD7D7: '80',
  HEX_5FD7FF: '81',
  HEX_5FFF00: '82',
  HEX_5FFF5F: '83',
  HEX_5FFF87: '84',
  HEX_5FFFAF: '85',
  HEX_5FFFD7: '86',
  HEX_5FFFFF: '87',
  HEX_870000: '88',
  HEX_87005F: '89',
  HEX_870087: '90',
  HEX_8700AF: '91',
  HEX_8700D7: '92',
  HEX_8700FF: '93',
  HEX_875F00: '94',
  HEX_875F5F: '95',
  HEX_875F87: '96',
  HEX_875FAF: '97',
  HEX_875FD7: '98',
  HEX_875FFF: '99',
  HEX_878700: '100',
  HEX_87875F: '101',
  HEX_878787: '102',
  HEX_8787AF: '103',
  HEX_8787D7: '104',
  HEX_8787FF: '105',
  HEX_87AF00: '106',
  HEX_87AF5F: '107',
  HEX_87AF87: '108',
  HEX_87AFAF: '109',
  HEX_87AFD7: '110',
  HEX_87AFFF: '111',
  HEX_87D700: '112',
  HEX_87D75F: '113',
  HEX_87D787: '114',
  HEX_87D7AF: '115',
  HEX_87D7D7: '116',
  HEX_87D7FF: '117',
  HEX_87FF00: '118',
  HEX_87FF5F: '119',
  HEX_87FF87: '120',
  HEX_87FFAF: '121',
  HEX_87FFD7: '122',
  HEX_87FFFF: '123',
  HEX_AF0000: '124',
  HEX_AF005F: '125',
  HEX_AF0087: '126',
  HEX_AF00AF: '127',
  HEX_AF00D7: '128',
  HEX_AF00FF: '129',
  HEX_AF5F00: '130',
  HEX_AF5F5F: '131',
  HEX_AF5F87: '132',
  HEX_AF5FAF: '133',
  HEX_AF5FD7: '134',
  HEX_AF5FFF: '135',
  HEX_AF8700: '136',
  HEX_AF875F: '137',
  HEX_AF8787: '138',
  HEX_AF87AF: '139',
  HEX_AF87D7: '140',
  HEX_AF87FF: '141',
  HEX_AFAF00: '142',
  HEX_AFAF5F: '143',
  HEX_AFAF87: '144',
  HEX_AFAFAF: '145',
  HEX_AFAFD7: '146',
  HEX_AFAFFF: '147',
  HEX_AFD700: '148',
  HEX_AFD75F: '149',
  HEX_AFD787: '150',
  HEX_AFD7AF: '151',
  HEX_AFD7D7: '152',
  HEX_AFD7FF: '153',
  HEX_AFFF00: '154',
  HEX_AFFF5F: '155',
  HEX_AFFF87: '156',
  HEX_AFFFAF: '157',
  HEX_AFFFD7: '158',
  HEX_AFFFFF: '159',
  HEX_D70000: '160',
  HEX_D7005F: '161',
  HEX_D70087: '162',
  HEX_D700AF: '163',
  HEX_D700D7: '164',
  HEX_D700FF: '165',
  HEX_D75F00: '166',
  HEX_D75F5F: '167',
  HEX_D75F87: '168',
  HEX_D75FAF: '169',
  HEX_D75FD7: '170',
  HEX_D75FFF: '171',
  HEX_D78700: '172',
  HEX_D7875F: '173',
  HEX_D78787: '174',
  HEX_D787AF: '175',
  HEX_D787D7: '176',
  HEX_D787FF: '177',
  HEX_D7AF00: '178',
  HEX_D7AF5F: '179',
  HEX_D7AF87: '180',
  HEX_D7AFAF: '181',
  HEX_D7AFD7: '182',
  HEX_D7AFFF: '183',
  HEX_D7D700: '184',
  HEX_D7D75F: '185',
  HEX_D7D787: '186',
  HEX_D7D7AF: '187',
  HEX_D7D7D7: '188',
  HEX_D7D7FF: '189',
  HEX_D7FF00: '190',
  HEX_D7FF5F: '191',
  HEX_D7FF87: '192',
  HEX_D7FFAF: '193',
  HEX_D7FFD7: '194',
  HEX_D7FFFF: '195',
  HEX_FF0000: '196',
  HEX_FF005F: '197',
  HEX_FF0087: '198',
  HEX_FF00AF: '199',
  HEX_FF00D7: '200',
  HEX_FF00FF: '201',
  HEX_FF5F00: '202',
  HEX_FF5F5F: '203',
  HEX_FF5F87: '204',
  HEX_FF5FAF: '205',
  HEX_FF5FD7: '206',
  HEX_FF5FFF: '207',
  HEX_FF8700: '208',
  HEX_FF875F: '209',
  HEX_FF8787: '210',
  HEX_FF87AF: '211',
  HEX_FF87D7: '212',
  HEX_FF87FF: '213',
  HEX_FFAF00: '214',
  HEX_FFAF5F: '215',
  HEX_FFAF87: '216',
  HEX_FFAFAF: '217',
  HEX_FFAFD7: '218',
  HEX_FFAFFF: '219',
  HEX_FFD700: '220',
  HEX_FFD75F: '221',
  HEX_FFD787: '222',
  HEX_FFD7AF: '223',
  HEX_FFD7D7: '224',
  HEX_FFD7FF: '225',
  HEX_FFFF00: '226',
  HEX_FFFF5F: '227',
  HEX_FFFF87: '228',
  HEX_FFFFAF: '229',
  HEX_FFFFD7: '230',
  HEX_FFFFFF: '231',
} as const;

export default colorfulColors;

/**
 * This type gets generated from the values of {@linkcode colorfulColors}.
 */
export type ColorfulColor = ValuesFromObject<typeof colorfulColors>;
