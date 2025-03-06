const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

export const authConfig = {
  domain,
  clientId,
  redirectUri,
  audience,
};

export const authParams = {
  audience: authConfig.audience,
  redirect_uri: authConfig.redirectUri,
};

let getAccessTokenSilentlyCallback: () => Promise<string>;

export function setGetAccessTokenSilently(
  callback: () => Promise<string>
): void {
  getAccessTokenSilentlyCallback = callback;
}

export async function getFreshAccessToken(): Promise<string> {
  if (!getAccessTokenSilentlyCallback) {
    throw new Error("getAccessTokenSilently 콜백 함수가 설정되지 않았습니다.");
  }
  return await getAccessTokenSilentlyCallback();
}
