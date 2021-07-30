import shortid from "shortid";

export const renderRow = [
  {
    title: "24h",
    id: shortid.generate(),
    // value: new Date().getDate() - 1,
    value: "price_change_percentage_24h",
  },
  {
    title: "7Day",
    id: shortid.generate(),
    // value: new Date().getMonth(),
    value: "price_change_percentage_7d",
  },
  {
    title: "14Day",
    id: shortid.generate(),
    // value: new Date().getFullYear() - 1,
    value: "price_change_percentage_14d",
  },
];

export const renderGainers = [
  {
    title: "Top gainers",
    id: shortid.generate(),
    value: new Date().getDate() - 1,
  },
  {
    title: "Bad gainers",
    id: shortid.generate(),
    value: new Date().getMonth(),
  },
  {
    title: "My gainers",
    id: shortid.generate(),
    value: new Date().getFullYear() - 1,
  },
];
