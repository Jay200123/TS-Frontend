// import Image from "./image";

interface User {
  _id: string;
  name: string;
  email: string;
}

interface AuthenticationState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
export type { User, AuthenticationState };
