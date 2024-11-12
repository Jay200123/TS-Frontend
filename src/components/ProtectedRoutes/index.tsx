import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticationStore } from "../../state";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { user } = useAuthenticationStore();
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

export default ProtectedRoute;
