import shortid from "shortid";

const cryptodata = [
  {
    id: shortid.generate(),
    src: "bitcoin.png",
    title: "Bitcoin",
    subname: "BTC",
    price: "50.6",
    chanee: "+6.80",
    market_cap: "450M",
  },
  {
    id: shortid.generate(),
    src: "band-protocol.png",
    title: "Band Protocol",
    subname: "BAND",
    price: "2.42",
    chanee: "+13.38",
    market_cap: "399.8M",
  },
  {
    id: shortid.generate(),
    src: "vechain.png",
    title: "VeChain",
    subname: "VET",
    price: "7.48",
    chanee: "11.19",
    market_cap: "152.5M",
  },
  {
    id: shortid.generate(),
    src: "aave.png",
    title: "Aave",
    subname: "AAVE",
    price: "0.0184",
    chanee: "+7.57",
    market_cap: "1.2B",
  },
  {
    id: shortid.generate(),
    src: "waves.png",
    title: "Waves",
    subname: "WAVES",
    price: "30.68",
    chanee: "+6.80",
    market_cap: "399.8M",
  },
];

export default cryptodata;
