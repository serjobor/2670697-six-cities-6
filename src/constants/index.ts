export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum Paths {
    Main = '/',
    Favorites = '/favorites',
    Login = '/login',
    Offer = '/offer/:id',
    NotFound = '*'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum ApiRoute {
    Offers = '/offers',
    Nearby = '/nearby',
    Favorite = '/favorite',
    Comments = '/comments',
    Login = '/login',
    Logout = '/logout',
}

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';

export enum NameSpace {
    App = 'app',
    Offer = 'offer',
    User = 'user',
}
