const TOKEN_KEY = '6-city-token';

export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY );
  return token;
};

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
