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

export const mockOffers: IBaseOffer[] = [
  {
    'id': '89e51c91-cb66-4498-abbb-5e0eec4f0a36',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 180,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '0b9d8fb3-4011-48cc-a941-ef17ec3d08d4',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 224,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '48313591-ef64-4651-b3c7-5c6bf393a0a2',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 147,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'cef07c60-1003-481c-bbe7-a234bccc7c61',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 437,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '5719a3b5-003a-481e-aad8-7c71b172cd93',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 444,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8
  },
  {
    'id': '475836e8-a944-42b0-8d7d-b6646a92665e',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 315,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': '57297746-f995-4231-9cbd-46536c222c62',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 126,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': '2c591cc8-ce28-47c0-9691-61cebcc042f5',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 202,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '0b0177fc-e43f-47e7-bc76-397db47d3e3d',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 218,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '5257773c-2cce-4131-80ff-bb06d9447f60',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 250,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': 'b959d07a-8ad5-4ac6-8967-279d159546ac',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 303,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.5
  },
  {
    'id': '6673fc62-fd9b-4a71-881f-3842321d04ce',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 105,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.861610000000006,
      'longitude': 2.340499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': 'a194b50a-4e37-4a49-8063-2b6ab07a55cb',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 289,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87861,
      'longitude': 2.357499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': 'd6e458f3-1bed-4b5b-b5a8-0e0aa3c2dc18',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 365,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.877610000000004,
      'longitude': 2.333499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '9142246f-717f-407e-a0f6-c22ac9965dbb',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 457,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83961,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': '3f932e91-afa6-490b-a8f7-0f09387326d7',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 442,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.865610000000004,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '8ad801cc-81aa-4166-b325-65a14314c3ab',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 280,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': '8a51b96a-6efa-4135-a13f-043ce437f489',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 120,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': 'a7eb6637-785f-4370-a57f-b034bff94183',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 176,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': 'd2a65a93-957b-4a45-bb30-f42011c8dff6',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 939,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': 'ab92fb0a-161a-4144-a1f8-9ff8078ebbad',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 185,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': '3acd5b60-c0dd-4f69-821f-d5eb280d1f0e',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 248,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4
  },
  {
    'id': 'eae8e15c-d552-462a-ac83-e52adc89287d',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'room',
    'price': 267,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2
  },
  {
    'id': 'd4c2f9e9-938b-4f48-b304-b514472ba4cf',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 168,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.947361,
      'longitude': 6.9799739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '18f99018-c955-4147-bc8f-cc4769f5f30f',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 585,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.967974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': 'f4609a0a-241c-4190-8ed9-bb780a5074dc',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 488,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': '3f58a2d5-3197-4052-a1f3-ccf6b095a7b8',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 294,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': 'e38adb85-18ae-432e-af3f-522d574f860b',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 694,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': '3b5f599b-5fab-4ba8-975f-9bf6943f30ac',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 311,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '0d947c70-b286-4990-9ea1-3909bc69845c',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 396,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'b287b49f-89dd-4471-84b8-f3ef0fd1a82c',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 747,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '45fa8caf-bc15-42ad-b32b-b5cd7d931de2',
    'title': 'Waterfront with extraordinary view',
    'type': 'house',
    'price': 454,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': '3ca497d2-55ac-41f3-ab4a-c81952bb4faf',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 134,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '89a592f7-2b9b-44cc-bc73-252dceb7c379',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 318,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.5
  },
  {
    'id': '3089329a-fb13-4181-93f7-611085c19863',
    'title': 'Tile House',
    'type': 'house',
    'price': 249,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': '60f7565c-57b4-4b6c-8bf7-7dc61ac2aff6',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 384,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.960974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': 'd70f1e68-043e-44dc-8772-2a5d7cc5a889',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 366,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.954361,
      'longitude': 6.982974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': '3a8008f8-fd04-4282-9492-4076fb4aff0f',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 396,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.962974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': '0eb40a95-24d0-4cd8-af1c-cfeb6764f832',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 171,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.917361,
      'longitude': 6.977974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': 'fcf1796d-3ecd-43b9-9345-f2778abc59e5',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 833,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.935974,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '03a1b1f9-8a5e-4386-8957-1ef3d4c84046',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 215,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': '5ab2378e-aac2-4f93-9fcc-678e1c7debda',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 252,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.6
  },
  {
    'id': '4e03de5e-5cf7-4beb-a73b-c4d642235bea',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 371,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.827557,
      'longitude': 4.336697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': 'da9dfc33-6c77-4bb6-abbf-148240f3f113',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 307,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.833557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': '6ad97de2-707a-4f06-aeb2-1393befa7b16',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 480,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.837557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': '08d3a0fe-66f2-423d-907a-ad1180d1862c',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 286,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.849557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': 'aef51309-eb29-4ca7-a982-056160fcb238',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 182,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.852557,
      'longitude': 4.3376969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': 'ed0bdef0-48e0-4881-b4bb-b00fe0bf1e5c',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 350,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.828556999999996,
      'longitude': 4.362697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': '83094029-dba8-487d-b2f0-28aebd3e36a3',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 464,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.835556999999994,
      'longitude': 4.354697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '64f6c730-5edf-49c5-9013-2c092828d671',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 227,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': 'ea8dfb06-c1d1-4737-b68f-90b45ecbd32b',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 181,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.839557,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'bd2078bd-d093-49de-90e4-936c4ae7d182',
    'title': 'The house among olive ',
    'type': 'room',
    'price': 135,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.844556999999995,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'd6ef9c71-70e0-4e76-8c9c-397cff05c814',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 442,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.865556999999995,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'afff6435-7b4f-46b0-a974-e311a6927578',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 101,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.869557,
      'longitude': 4.332697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': 'd313a56c-2109-496d-ba25-d53c86661e0a',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 274,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.860557,
      'longitude': 4.376697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': '1bc82016-586c-4e54-b716-cb9b5c724d38',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 115,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.862556999999995,
      'longitude': 4.375697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '7315cd4a-d326-4c80-9efc-38a50a505d1f',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 373,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '10f71979-6e98-49b1-969d-fa526fe92395',
    'title': 'Tile House',
    'type': 'house',
    'price': 351,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.822556999999996,
      'longitude': 4.347697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '7e710e92-c36a-45da-835e-9130aac6b37d',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 101,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': '5fb07462-6b5a-4013-b739-779d7a644f06',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 225,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': 'bfb511b7-ab6d-421a-9235-d1381a61aea3',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 416,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36554,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '35ce7d0d-2e43-4b61-ade0-3a7b6d44ee54',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 380,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': '20b1eb3d-3b43-4a9d-8165-ea831f52b1df',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 176,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': '18aa30f7-28b5-4e7e-93f5-ca4092a33a96',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'hotel',
    'price': 372,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': 'd9132b69-db26-4051-98e6-46e9d7821fa1',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 467,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': 'dc524e7d-eddb-4e64-9d5f-a70cc8d01896',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 210,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '8f6824ee-c7af-439d-9544-9f4196185020',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 414,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35754,
      'longitude': 4.9179759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '5d49fb01-1e73-4532-984c-97efed699ba0',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 260,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37854,
      'longitude': 4.894976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '30d78a7b-efe6-4428-8e45-ca8ada79e3f4',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 246,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36854,
      'longitude': 4.887976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': '714cd6bc-34a5-4af9-be64-ead763476b02',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 152,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.370540000000005,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '7d714075-9ed6-495d-a6a8-0d1f5dd7a087',
    'title': 'House in countryside',
    'type': 'house',
    'price': 777,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.389540000000004,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': 'ce9ba409-2778-4909-b4b7-27ded756ee13',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 382,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35054,
      'longitude': 4.908976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': 'b31d56ac-5518-458d-b6de-7fbcfdb3abb2',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 284,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37154,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': 'fe853a9a-9b24-444a-a72a-6bfad92507b7',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 387,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.364540000000005,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '6c181c36-3d39-413f-bc65-562e18731d54',
    'title': 'Waterfront with extraordinary view',
    'type': 'house',
    'price': 807,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.5
  },
  {
    'id': 'df39e625-e79e-4281-aa6a-27760f097c5f',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 360,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9
  },
  {
    'id': '80c0b8c4-0098-4af8-857e-3bfc62c02ad8',
    'title': 'Tile House',
    'type': 'room',
    'price': 286,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.388540000000006,
      'longitude': 4.899976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': '84800ad9-5770-40fb-b189-4724a3bd72cd',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 640,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36954,
      'longitude': 4.914976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '93d571bb-8b21-4409-b86f-8cec92420bea',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'hotel',
    'price': 252,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37554,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': '58577d01-0c2f-40af-a446-764bc8858516',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 243,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.886976,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': '91644bc4-1b78-4a7f-88b3-174577dfc93d',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 173,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 10.018654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5
  },
  {
    'id': '47725134-203d-4fc8-a32b-629a466d1398',
    'title': 'House in countryside',
    'type': 'house',
    'price': 294,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.538341,
      'longitude': 9.976654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '2073d6b3-021f-4170-a70b-8f5412c0e998',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 169,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 10.019654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '54106301-3b15-45b7-8d21-c8b7699f9ceb',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 110,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': '625bde74-9bb0-43a2-b93c-36eadc68e131',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 449,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '7849fd4b-b440-4598-a74b-a1d0ce28656a',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 376,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.546341000000005,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9
  },
  {
    'id': 'df52ec23-70d3-4988-a066-8796e9c4035b',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 689,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341000000004,
      'longitude': 9.978654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '1aa673d7-8057-4b02-86e3-41686e7b35d4',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 770,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.570341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '6644d315-3d00-4633-a77e-5c4fdd130bf7',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 266,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 10.001654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.5
  },
  {
    'id': 'cc77cc59-ed28-4488-96f8-20428b38813a',
    'title': 'The house among olive ',
    'type': 'room',
    'price': 153,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.009654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '7644a191-6e6e-415a-8c36-206c37e6f521',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 348,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 9.994654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': '677fe705-b2ee-4b8d-9d1a-344e9e169971',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 244,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 9.982654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': 'e50393fb-f0ea-4d5d-b2de-6b98890741da',
    'title': 'Waterfront with extraordinary view',
    'type': 'house',
    'price': 816,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.540341000000005,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': 'b6f11f94-ad3a-4407-b05f-2873fcc3a60c',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 257,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.555341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.6
  },
  {
    'id': '67920d7e-f769-4e3b-9c21-701bc412fb31',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 431,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.534341000000005,
      'longitude': 9.998654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': '6ae0738c-280e-4ae2-b390-749c8b6bf1eb',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 173,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '88df2a75-ff03-496b-ace4-36730f7d664d',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 616,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.574341000000004,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': '9075c8b0-e45c-4b0f-94a9-3c9fea1fd570',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 195,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4
  },
  {
    'id': 'f4c076e9-0f3b-48f2-8825-d3fde0cdf6c1',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 410,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.550341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': 'b9ee3943-857c-48b7-8c71-0886c1e5a6b1',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 464,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 9.999654000000001,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': '9bd2b6e2-0269-4ab4-9ab4-2e79cf1672e8',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 382,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.236402000000005,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '22ad76d7-b24b-4cb6-8443-4d4365da8fe1',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 342,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.210402,
      'longitude': 6.798314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'a423bd07-ec7e-4bbd-b260-62cc3f8e2289',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 974,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.211402,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': '769a63cf-c81a-4944-bcd9-e40e97efdf0a',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 133,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.228402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.7
  },
  {
    'id': 'c136861e-aa8f-4a82-90f4-af38b6ed2c88',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 210,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.204402,
      'longitude': 6.7773140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '83c96836-016c-4cb8-b633-76d29f6d3569',
    'title': 'House in countryside',
    'type': 'room',
    'price': 133,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.217402,
      'longitude': 6.7693140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': 'ddfad2f6-2129-4de7-8f5c-8a59d044f37c',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 365,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.241402,
      'longitude': 6.782314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': 'c6df62b2-f904-4b4b-a237-469f54ddd78e',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 151,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.235402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': 'adbee843-2214-418e-9a3e-0ac4b11c7d29',
    'title': 'House in countryside',
    'type': 'room',
    'price': 299,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.779314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '425d8fdf-1282-4e85-882f-40ba886d570a',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 341,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.797314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': 'b5b0d182-be6b-42eb-a640-555afe2b4db6',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 207,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.222402,
      'longitude': 6.786314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '79813b99-e3f2-41e3-a361-7b2ed9b36564',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 341,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.232402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': '33c0e404-5ff8-48e1-8d40-01b98433fa93',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 444,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.216402,
      'longitude': 6.758314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '3053f76b-e1fb-43d6-bd9a-5ed2cdd3eb64',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 156,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.205402,
      'longitude': 6.7613140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '820379be-dbb5-4b82-94ce-163a21f830fb',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 388,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.248402000000006,
      'longitude': 6.763314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': 'a63cf07f-8fbe-49ac-ae98-0b3538fb07c6',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 777,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.250402,
      'longitude': 6.7853140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': 'a7499a9a-eeb5-42c8-ad77-7720cdddd304',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 478,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.239402000000005,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '93280674-2d90-49e3-9bc8-7422a647a75c',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 106,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': 'f1999d2f-c76d-4a29-ba5e-dc6c466bb441',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 754,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.214402,
      'longitude': 6.764314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '945a4242-7689-4c32-95ce-30bbc1d4dd3d',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 892,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.5
  }
];

export const mockOfferExample: IFullOffer = {
  'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
  'price': 120,
  'city': {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
  },
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'isFavorite': false,
  'isPremium': false,
  'rating': 4,
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'bedrooms': 3,
  'goods': [
    'Heating'
  ],
  'host': {
    'name': 'Oliver Conner',
    'avatarUrl': 'https://url-to-image/image.png',
    'isPro': false
  },
  'images': [
    'https://url-to-image/image.png'
  ],
  'maxAdults': 4
};

export const CITY_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

export const OPTIONS_FOR_SORT_OFFERS_LIST = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
] as const;
