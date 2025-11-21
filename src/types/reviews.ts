export interface IUserReview {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface IReviews {
  id: string;
  date: string;
  user: IUserReview;
  comment: string;
  rating: number;
}
