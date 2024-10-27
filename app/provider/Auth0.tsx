// components/Auth0Provider.js
"use client";
import { Auth0Provider as BaseAuth0Provider } from "@auth0/auth0-react";

export default function Auth0Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

  if (!(domain && clientId)) {
    return null;
  }

  return (
    <BaseAuth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri:
          typeof window !== "undefined" ? window.location.origin : "",
      }}
      useRefreshTokens={true}
      skipRedirectCallback={true}
      cacheLocation="localstorage"
    >
      {children}
    </BaseAuth0Provider>
  );
}
