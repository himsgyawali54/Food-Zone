export const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
// Auth
export const LOGIN_URL = "/auth/login";
export const LOGIN_WITH_GOOGLE = "/auth/login/google";
export const REGISTER_URL = "/auth/register";
export const VERIFY_CODE = "/auth/register/verify";

export const GET_USER_INFO = "/auth/info";

export const GET_GOOGLE_PROFILE = (accessToken: string) =>
  `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`;
export const MEMBER_PASSWORD = "/team-member/passwords";
