// ============================
// Base backend url
// ============================
export const BACKEND_BASE_URL = 'http://localhost:8080/api';

// ============================
// All api urls in to interact with backend
// ============================
export const APIS = {
  GET_CARDS: BACKEND_BASE_URL + '/getnfts',
  GET_CARD : BACKEND_BASE_URL + '/getnft',
  CREATE_NEW_CUSNFT: BACKEND_BASE_URL + "/createmynft",
  GET_MY_NFTS: BACKEND_BASE_URL + "/getmynfts"
}