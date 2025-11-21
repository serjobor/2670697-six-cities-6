export interface IVariant {
  horizontal: IDisplayOption;
  vertical: IDisplayOption;
}

export interface IDisplayOption {
  widthForImg: string;
  heightForImg: string;
}

export const displayOptionOrientation: IVariant = {
  horizontal: {
    widthForImg: '150',
    heightForImg: '110',
  },
  vertical: {
    widthForImg: '260',
    heightForImg: '200',
  }
} as const;

export enum cardNameForDisplayStyles {
  CITIES = 'cities',
  FAVORITES = 'favorites',
  NEAR_PLACES = 'near-places',
}

export enum CITY_LIST_TYPES {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf'
}

export const CITY_LIST_OPTIONS: string[] = Object.values(CITY_LIST_TYPES);

export enum OFFER_SORT_TYPES {
  POPULAR = 'Popular',
  LOW_TO_HIGH = 'Price: low to high',
  HIGH_TO_LOW = 'Price: high to low',
  TOP_RAITING = 'Top rated first',
}

export const OFFER_SORT_OPTIONS: string[] = Object.values(OFFER_SORT_TYPES);
