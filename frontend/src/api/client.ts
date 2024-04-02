import { AxiosResponse } from "axios";

import {
  GetUsersResponse,
  TokenRefreshRequest,
  TokenRefreshResponse,
  TokenRequest,
  TokenResponse,
  TokenVerifyRequest,
  TokenVerifyResponse,
  UserMeResponse,
} from "./types";

import api from ".";

export async function postToken(request: TokenRequest) {
  return await api.post<
    TokenResponse,
    AxiosResponse<TokenResponse>,
    TokenRequest
  >("/token/", request);
}

export async function postTokenRefresh(request: TokenRefreshRequest) {
  return await api.post<
    TokenRefreshResponse,
    AxiosResponse<TokenRefreshResponse>,
    TokenRefreshRequest
  >("/token/refresh/", request);
}

export async function postTokenVerify(request: TokenVerifyRequest) {
  return await api.post<
    TokenVerifyResponse,
    AxiosResponse<TokenVerifyResponse>,
    TokenVerifyRequest
  >("/token/verify/", request);
}

export async function getUsers() {
  return await api.get<GetUsersResponse>("/users/");
}

export async function getUsersMe() {
  return await api.get<UserMeResponse>("/users/me/");
}
