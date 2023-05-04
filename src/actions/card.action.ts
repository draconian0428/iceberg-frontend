import axios from 'axios';
import { BASENFT_PROPS, CUSNFT_PROPS } from '../config/config';
import { APIS } from '../config/apis';


// =================================
// Get Default cards
// =================================
export const getCards = async () => {
  try {
    const result = await axios.get(APIS.GET_CARDS);
    return result?.data;
  } catch (err) {
    console.log(err);
  }
}

// =================================
// Get Default card info by its id
// =================================
export const getCard = async (_id: string) => {
  try {
    const result = await axios.post(APIS.GET_CARD, {
      _id
    })
    return result?.data;
  } catch (err) {
    console.log(err);
  }
}

// =================================
// Create a new custom card
// =================================
export const createCusNFT = async (data: CUSNFT_PROPS, uName: string) => {
  try {
    const result = await axios.post(APIS.CREATE_NEW_CUSNFT, {
      ...data,
      uName
    })
    return result?.data;
  } catch (err) {
    console.log(err);
  }
}

// =================================
// Get all my nfts
// =================================
export const getMyNfts = async (uName: string) => {
  try {
    const result = await axios.post(APIS.GET_MY_NFTS, {
      uName
    })
    return result?.data;
  } catch (err) {
    console.log(err)
  }
}