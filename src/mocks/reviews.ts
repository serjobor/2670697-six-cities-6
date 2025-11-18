export interface IUser {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface IReviews {
  id: string;
  date: string;
  user: IUser;
  comment: string;
  rating: number;
}

//Получить список комментариев
//GET /six-cities/comments/{offerId}

export const mockReviews: IReviews[] = [
  {
    "id": "4b053305-c0f0-4c2f-a588-47b59cf2b308",
    "comment": "The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.",
    "date": "2025-10-26T21:00:00.223Z",
    "rating": 5,
    "user": {
      "name": "Isaac",
      "avatarUrl": "https://14.design.htmlacademy.pro/static/avatar/1.jpg",
      "isPro": false
    }
  },
  {
    "id": "0532b092-8749-4812-93df-0ef8bd69f549",
    "comment": "The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.",
    "date": "2025-10-23T21:00:00.223Z",
    "rating": 4,
    "user": {
      "name": "Isaac",
      "avatarUrl": "https://14.design.htmlacademy.pro/static/avatar/1.jpg",
      "isPro": true
    }
  }
];