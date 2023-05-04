// =======================================
// All CSS Theme props in website
// =======================================
export const THEME_PROPS = {
    maxWidth: '1440px',
    theme: '#FF343F',
    back: '#1E1E1E',
    txtClr1: '#ffffff',
    txtClr2: '#68676E',
}

// =======================================
// BaseNFT interface
// =======================================
export interface BASENFT_PROPS {
    _id: string,
    name: string,
    image: string,
    value: number,
    info: string,
}

// =======================================
// Custom NFT interface
// =======================================
export interface CUSNFT_PROPS {
    bId: string,
    name: string,
    value: number,
    info: string,
}

// =======================================
// Public Urls
// =======================================
export const PUBLIC_URLS = {
    LANDING: '/',
    CUSTOM_NFT: '/cus',
    EXPLORE_MY_NFTS: '/mynfts',
}