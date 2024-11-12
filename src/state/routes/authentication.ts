import { create } from "zustand";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  password: string;
}

interface AuthenticationState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (name: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthenticationAPI {
  message: string;
  details: User;
  success: boolean;
  access: string;
}

const useAuthenticationStore = create<AuthenticationState>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    const res = await axios.post<AuthenticationAPI>(
      "http://localhost:4000/api/v1/login",
      { email, password },
      { withCredentials: true }
    );
    set({user: res.data.details, loading: false, error: null}); 
    localStorage.setItem("token", res.data.access);
  },
  logout: () => {},
}));

export { useAuthenticationStore}
