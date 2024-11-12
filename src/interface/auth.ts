// import Image from "./image";

interface Auth {
  email: string;
  password: string;
}

interface AuthenticationValues {
  email: string;
  password: string;
}

interface AuthStore {
  user: Auth | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export type { Auth, AuthStore, AuthenticationValues };
