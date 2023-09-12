import { getDomain } from '~/helpers/getDomain';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { hostname } = window.location;

const DEV_API_PATH = process.env.REACT_APP_DEV_API_PATH || 'https://dev-api.bet-makers.com/v1/';
const DEV_SOCKET_PATH = process.env.REACT_APP_DEV_SOCKET_PATH || 'https://dev-wsapi.bmakers.site';

const PROD_API_PATH = process.env.REACT_APP_PROD_API_PATH || `https://api.${getDomain()}/v1`;
const PROD_SOCKET_PATH = process.env.REACT_APP_PROD_SOCKET_PATH || `https://wsapi.${getDomain()}`;

export const API_URL = process.env.NODE_ENV === 'development' ? DEV_API_PATH : PROD_API_PATH;
export const SOCKET_URL = process.env.NODE_ENV === 'development' ? DEV_SOCKET_PATH : PROD_SOCKET_PATH;

export const socketConfig = {
	apiProtocol: 'http',
	apiPort: 5002,
	apiVersion: 'api/v1',
	debugInfo: process.env.NODE_ENV === 'development',
};
