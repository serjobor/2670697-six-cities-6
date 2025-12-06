//Auth
export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

// PATHS
export enum PATHS {
    MAIN_PAGE = '/',
    FAVORITES_PAGE = '/favorites',
    LOGIN_PAGE = '/login',
    OFFER_PAGE = '/offer/:id',
    NOTFOUND_PAGE = '*'
}

// Errors
export const TIMEOUT_SHOW_ERROR = 2000;

// API
export enum APIRoute {
    Offers = '/offers',
    Favorite = '/favorite',
    Comments = '/comments',
    Login = '/login',
    Logout = '/logout',
}

// for Map
export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';
