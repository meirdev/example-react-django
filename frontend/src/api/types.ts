export type ErrorResponse = {
  detail: string;
};

export type PostTokenRequest = {
  email: string;
  password: string;
};

export type PostTokenResponse = {
  access: string;
  refresh: string;
};

export type PostTokenRefreshRequest = {
  refresh: string;
};

export type PostTokenRefreshResponse = {
  access: string;
};

export type PostTokenVerifyRequest = {
  token: string;
};

export type PostTokenVerifyResponse = Record<string, never>;

export type GetUsersMeResponse = {
  email: string;
};

export type GetUsersResponse = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
}[];
