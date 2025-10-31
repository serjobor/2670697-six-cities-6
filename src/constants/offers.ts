export interface IVariant {
  horizontal: IDisplayOption;
  vertical: IDisplayOption;
}

export interface IDisplayOption {
  cardName: string;
  widthForImg: string;
  heightForImg: string;
}

export const displayOptionForOfferCard: IVariant = {
  horizontal: {
    cardName: 'favorites',
    widthForImg: '150',
    heightForImg: '110',
  },
  vertical: {
    cardName: 'cities',
    widthForImg: '260',
    heightForImg: '200',
  }
} as const;

export const CITY_LIST_OPTIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

export const CITY_LIST_TYPES = {
  'PARIS': 'Paris',
  'COLOGNE': 'Cologne',
  'BRUSSELS': 'Brussels',
  'AMSTERDAM': 'Amsterdam',
  'HAMBURG': 'Hamburg',
  'DUSSELDORF': 'Dusseldorf'
} as const;

export const OFFER_SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
] as const;

export const OFFER_SORT_TYPES = {
  'POPULAR': 'Popular',
  'LOW_TO_HIGH': 'Price: low to high',
  'HIGH_TO_LOW': 'Price: high to low',
  'TOP_RAITING': 'Top rated first',
} as const;
