import { IVariant } from '../types/offers';

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

export enum CardDisplayStyle {
  Cities = 'cities',
  Favorites = 'favorites',
  NearPlaces = 'near-places',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CITY_LIST_OPTIONS: string[] = Object.values(City);

export enum OfferSortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRating = 'Top rated first',
}

export const OFFER_SORT_OPTIONS: string[] = Object.values(OfferSortType);
