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
