export const getBeneficiary = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json()); //backend fetch from data base
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getActivist = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getDonors = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};
