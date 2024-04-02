export type ErrorResponse = {
  detail: string;
};

export type TokenRequest = {
  email: string;
  password: string;
};

export type TokenResponse = {
  access: string;
  refresh: string;
};

export type TokenRefreshRequest = {
  refresh: string;
};

export type TokenRefreshResponse = {
  access: string;
};

export type TokenVerifyRequest = {
  token: string;
};

export type TokenVerifyResponse = Record<string, never>;

export type UserMeResponse = {
  email: string;
};

export type GetUsersResponse = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
}[];
