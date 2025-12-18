export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum PATHS {
    MAIN_PAGE = '/',
    FAVORITES_PAGE = '/favorites',
    LOGIN_PAGE = '/login',
    OFFER_PAGE = '/offer/:id',
    NOTFOUND_PAGE = '*'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
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
