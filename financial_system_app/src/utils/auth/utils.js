import wretch from "wretch";
import Cookies from "js-cookie";

const api = wretch("http://127.0.0.1:8000").accept("application/json");

const storeToken = (token, type) => {
  Cookies.set(type + "Token", token);
};

const getToken = (type) => {
  return Cookies.get(type + "Token");
};

const removeTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

const login = (email, password) => {
  return api.post({ username: email, password }, "/auth/jwt/create");
};

const logout = () => {
  const refreshToken = getToken("refresh");
  return api.post({ refresh: refreshToken }, "/auth/logout/");
};

const handleJWTRefresh = () => {
  const refreshToken = getToken("refresh");
  return api.post({ refresh: refreshToken }, "/auth/jwt/refresh");
};


export const AuthActions = () => {
  return {
    login,
    handleJWTRefresh,
    storeToken,
    getToken,
    logout,
    removeTokens,
  };
};
