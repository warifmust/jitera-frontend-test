const headers = {
  "Content-Type": "application/json",
};

export const getItems = async () => {
  const data = await fetch("http://localhost:3000/items", {
    method: "GET",
    headers: headers,
  });
  const response = await data.json();
  return response;
};

export const getUserById = async (id: string) => {
  const data = await fetch(`http://localhost:3000/users/${id}`, {
    method: "GET",
    headers: headers,
  });
  const response = await data.json();
  return response;
};

export const signIn = async (email: string, password: string) => {
  const data = await fetch("http://localhost:3000/auth/sign-in", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  });
  const response = await data.json();
  return response;
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const data = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, email, password }),
  });
  const response = await data.json();
  return response;
};

export const deposit = async (id: string, balanceAmount: number) => {
  const data = await fetch("http://localhost:3000/users/deposit", {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({ id, balanceAmount }),
  });
  const response = await data.json();
  return response;
};

export const createItem = async (
  itemName: string,
  price: number,
  durationInMinutes: number
) => {
  const data = await fetch("http://localhost:3000/items", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      itemName,
      price,
      durationInMinutes,
      belongsTo: "",
      expired: false,
    }),
  });
  const response = await data.json();
  return response;
};

export const bidItem = async (
  price: number,
  itemId: string,
  bidderName: string,
  userId: string
) => {
  const data = await fetch(`http://localhost:3000/bids/${userId}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ price, itemId, bidderName }),
  });
  const response = await data.json();
  return response;
};

export const getListOfBidsItemId = async (itemId: string) => {
  const data = await fetch(`http://localhost:3000/bids/items/${itemId}`, {
    method: "GET",
    headers: headers,
  });
  const response = await data.json();
  return response;
};

export const expireItem = async (itemId: string) => {
  const data = await fetch(`http://localhost:3000/items/expire/${itemId}`, {
    method: "PUT",
    headers: headers,
  });
  const response = await data.json();
  return response;
};

export const nominateBidWinner = async (itemId: string) => {
  const data = await fetch(`http://localhost:3000/bids/nominate/${itemId}`, {
    method: "PUT",
    headers: headers,
  });
  const response = await data.json();
  return response;
};
