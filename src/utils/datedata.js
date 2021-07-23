import shortid from "shortid";

export const renderRow = [
  {
    title: "24 h",
    id: shortid.generate(),
    value: new Date().getDate() - 1,
  },
  {
    title: "Mounthl",
    id: shortid.generate(),
    value: new Date().getMonth(),
  },
  {
    title: "Year",
    id: shortid.generate(),
    value: new Date().getFullYear() - 1,
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
