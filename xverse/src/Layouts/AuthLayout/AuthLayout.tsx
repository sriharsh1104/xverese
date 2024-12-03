import React, { ReactNode } from 'react';
import "./AuthLayout.css"

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
