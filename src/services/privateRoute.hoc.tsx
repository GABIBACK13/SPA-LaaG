// src/hoc/withAuthProtection.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../store/Recoil/authState";
import React from "react";

export function withAuthProtection<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>,
  isClosed: boolean = true
) {
  return function ProtectedComponent(props: P) {
    const auth = useRecoilValue(authState);
    const isLoggedIn = auth.isLoggedIn;
    const location = useLocation();

    if (isClosed && !isLoggedIn) {
      return (
        <Navigate
          to="/login"
          replace
          state={{
            prevPath: location.pathname,
            errors: ["You need to be logged in"],
          }}
        />
      );
    }

    return <WrappedComponent {...props} />;
  };
}
