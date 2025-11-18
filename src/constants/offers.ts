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

export enum CITY_LIST_TYPES {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf'
};

export const CITY_LIST_OPTIONS = Object.values(CITY_LIST_TYPES);

export enum OFFER_SORT_TYPES {
  POPULAR = 'Popular',
  LOW_TO_HIGH = 'Price: low to high',
  HIGH_TO_LOW = 'Price: high to low',
  TOP_RAITING = 'Top rated first',
};

export const OFFER_SORT_OPTIONS = Object.values(OFFER_SORT_TYPES);
