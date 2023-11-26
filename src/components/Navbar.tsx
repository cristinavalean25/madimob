import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setBitcoinPrice,
  setElrondPrice,
  setEthereumPrice,
  setBnbPrice,
  setSolanaPrice,
  setXrpPrice,
  setUsdtPrice,
} from "../Redux/cryptoPricesActions";
import axios from "axios";
import logo from "../Images/madimob-02.png";
import bitcoin from "../Images/bitcoin1.png";
import elrond from "../Images/elrond.png";
import eth from "../Images/eth.png";
import bnb from "../Images/bnb.png";
import solana from "../Images/solana.png";
import xrp from "../Images/xrp.png";
import usdt from "../Images/usdt.png";

import { CryptoPricesState } from "../Redux/cryptoPricesReducer";
import { FormattedMessage, useIntl } from "react-intl";

interface NavbarProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Navbar: React.FC<NavbarProps> = ({ changeLanguage, locale }) => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const bitcoinPrice = useSelector(
    (state: { cryptoPrices: CryptoPricesState }) =>
      state.cryptoPrices?.bitcoinPrice
  );

  const elrondPrice = useSelector(
    (state: { cryptoPrices: CryptoPricesState }) =>
      state.cryptoPrices.elrondPrice
  );
  const ethereumPrice = useSelector(
    (state: { cryptoPrices: CryptoPricesState }) =>
      state.cryptoPrices.ethereumPrice
  );
  const bnbPrice = useSelector(
    (state: { cryptoPrices: CryptoPricesState }) => state.cryptoPrices.bnbPrice
  );
  const solanaPrice = useSelector(
    (state: { cryptoPrices: CryptoPricesState }) =>
      state.cryptoPrices.solanaPrice
  );

  const xrpPrice = useSelector(
    (state: { cryptoPrices: CryptoPricesState }) => state.cryptoPrices.xrpPrice
  );
  const tetherPrice = useSelector(
    (state: { cryptoPrices: CryptoPricesState }) => state.cryptoPrices.usdtPrice
  );

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,elrond-erd-2,ethereum,binancecoin,solana,polygon,ripple,tether&vs_currencies=usd"
        );

        const {
          bitcoin,
          "elrond-erd-2": elrondErd,
          ethereum,
          binancecoin,
          solana,
          ripple,
          tether,
        } = response.data;

        dispatch(setBitcoinPrice(bitcoin?.usd || 0));
        dispatch(setElrondPrice(elrondErd?.usd || 0));
        dispatch(setEthereumPrice(ethereum?.usd || 0));
        dispatch(setBnbPrice(binancecoin?.usd || 0));
        dispatch(setSolanaPrice(solana?.usd || 0));
        dispatch(setXrpPrice(ripple?.usd || 0));
        dispatch(setUsdtPrice(tether?.usd || 0));
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 429) {
          console.log(
            "API rate limit exceeded. Waiting before making the next request."
          );
          const delayBetweenRequests = 30000;
          setTimeout(fetchCryptoPrices, delayBetweenRequests);
        }
      }
    };

    fetchCryptoPrices();
  }, [dispatch, locale]);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#000",
        padding: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="row "
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1800px",
          margin: "0 auto",
        }}
      >
        <div
          className="col-md-2 img-logo"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "250px",
                height: "55px",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>

        <div
          className="col-md-8 crypto-price "
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          <img
            src={bitcoin}
            alt="bitcoin"
            style={{ width: "35px", height: "35px" }}
          />
          {bitcoinPrice && (
            <span
              style={{ marginLeft: "5px", color: "white", marginRight: 20 }}
            >
              ${bitcoinPrice}
            </span>
          )}

          <img
            src={elrond}
            alt="elrond"
            style={{ width: "35px", height: "35px" }}
            className="white-logo"
          />
          {elrondPrice && (
            <span
              style={{ marginLeft: "5px", color: "white", marginRight: 20 }}
            >
              ${elrondPrice.toFixed(2)}
            </span>
          )}

          <img src={bnb} alt="bnb" style={{ width: "35px", height: "35px" }} />

          {bnbPrice && (
            <span
              style={{ marginLeft: "5px", color: "white", marginRight: 20 }}
            >
              ${bnbPrice.toFixed(2)}
            </span>
          )}

          <img
            src={eth}
            alt="etherium"
            style={{ width: "35px", height: "25px" }}
            className="white-logo"
          />

          {ethereumPrice && (
            <span
              style={{ marginLeft: "5px", color: "white", marginRight: 20 }}
            >
              ${ethereumPrice.toFixed(2)}
            </span>
          )}

          <img
            src={solana}
            alt="solana"
            style={{ width: "35px", height: "25px" }}
          />

          {solanaPrice && (
            <span
              style={{ marginLeft: "5px", color: "white", marginRight: 20 }}
            >
              ${solanaPrice.toFixed(2)}
            </span>
          )}

          <img src={xrp} alt="xrp" style={{ width: "35px", height: "25px" }} />

          {xrpPrice && (
            <span
              style={{ marginLeft: "5px", color: "white", marginRight: 20 }}
            >
              ${xrpPrice.toFixed(3)}
            </span>
          )}

          <img
            src={usdt}
            alt="usdt"
            style={{ width: "35px", height: "25px" }}
            className="white-logo"
          />
          {tetherPrice && (
            <span
              style={{ marginLeft: "5px", color: "white", marginRight: 20 }}
            >
              ${tetherPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div
          className="col-md-2 d-flex flex-row contact-container"
          style={{ display: "flex", alignItems: "center", fontSize: "17px" }}
        >
          <Link to={`/Contact`} className="nav-link text-white">
            <FormattedMessage id="navbar.contact" />
          </Link>

          <Link
            to={`/About`}
            className="nav-link text-white"
            style={{ marginLeft: "20px", color: "#000" }}
          >
            {intl.formatMessage({ id: "navbar.about" })}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
