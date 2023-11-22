import {
  setBitcoinPrice,
  setElrondPrice,
  setEthereumPrice,
  setBnbPrice,
  setSolanaPrice,
  setXrpPrice,
  setUsdtPrice,
} from "./cryptoPricesActions";

export interface CryptoPricesState {
  bitcoinPrice: number | null;
  elrondPrice: number | null;
  ethereumPrice: number | null;
  bnbPrice: number | null;
  solanaPrice: number | null;
  xrpPrice: number | null;
  usdtPrice: number | null;
  cryptoPrices: { [cryptoId: string]: { usd: number } } | null;
}

const initialState: CryptoPricesState = {
  bitcoinPrice: null,
  elrondPrice: null,
  ethereumPrice: null,
  bnbPrice: null,
  solanaPrice: null,
  xrpPrice: null,
  usdtPrice: null,
  cryptoPrices: null,
};

type CryptoPricesAction = ReturnType<
  | typeof setBitcoinPrice
  | typeof setElrondPrice
  | typeof setEthereumPrice
  | typeof setBnbPrice
  | typeof setSolanaPrice
  | typeof setXrpPrice
  | typeof setUsdtPrice
>;

const cryptoPricesReducer = (
  state: { cryptoPrices: CryptoPricesState } = { cryptoPrices: initialState },
  action: CryptoPricesAction
): { cryptoPrices: CryptoPricesState } => {
  switch (action.type) {
    case "SET_BITCOIN_PRICE":
      return {
        cryptoPrices: { ...state.cryptoPrices, bitcoinPrice: action.payload },
      };
    case "SET_ELROND_PRICE":
      return {
        cryptoPrices: { ...state.cryptoPrices, elrondPrice: action.payload },
      };
    case "SET_ETHEREUM_PRICE":
      return {
        cryptoPrices: { ...state.cryptoPrices, ethereumPrice: action.payload },
      };
    case "SET_BNB_PRICE":
      return {
        cryptoPrices: { ...state.cryptoPrices, bnbPrice: action.payload },
      };
    case "SET_SOLANA_PRICE":
      return {
        cryptoPrices: { ...state.cryptoPrices, solanaPrice: action.payload },
      };

    case "SET_XRP_PRICE":
      return {
        cryptoPrices: { ...state.cryptoPrices, xrpPrice: action.payload },
      };
    case "SET_USDT_PRICE":
      return {
        cryptoPrices: { ...state.cryptoPrices, usdtPrice: action.payload },
      };
    default:
      return state;
  }
};

export default cryptoPricesReducer;
