import { AxiosResponse } from "axios";

import {
  GetUsersMeResponse,
  GetUsersResponse,
  PostTokenRefreshRequest,
  PostTokenRefreshResponse,
  PostTokenRequest,
  PostTokenResponse,
  PostTokenVerifyRequest,
  PostTokenVerifyResponse,
} from "./types";

import api from ".";

export async function postToken(request: PostTokenRequest) {
  return await api.post<
    PostTokenResponse,
    AxiosResponse<PostTokenResponse>,
    PostTokenRequest
  >("/token/", request);
}

export async function postTokenRefresh(request: PostTokenRefreshRequest) {
  return await api.post<
    PostTokenRefreshResponse,
    AxiosResponse<PostTokenRefreshResponse>,
    PostTokenRefreshRequest
  >("/token/refresh/", request);
}

export async function postTokenVerify(request: PostTokenVerifyRequest) {
  return await api.post<
    PostTokenVerifyResponse,
    AxiosResponse<PostTokenVerifyResponse>,
    PostTokenVerifyRequest
  >("/token/verify/", request);
}

export async function getUsers() {
  return await api.get<GetUsersResponse>("/users/");
}

export async function getUsersMe() {
  return await api.get<GetUsersMeResponse>("/users/me/");
}
