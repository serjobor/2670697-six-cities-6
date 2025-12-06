export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface ICity {
  name: string;
  location: ILocation;
}

export interface IBaseOffer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: ICity;
  location: ILocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
}

export interface IHost {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface IFullOffer extends IBaseOffer {
  description: string;
  bedrooms: number;
  goods: string[];
  host: IHost;
  images: string[];
  maxAdults: number;
}

export interface IVariant {
  horizontal: IDisplayOption;
  vertical: IDisplayOption;
}

export interface IDisplayOption {
  widthForImg: string;
  heightForImg: string;
}
