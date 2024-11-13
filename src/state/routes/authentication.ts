import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import { AuthenticationState } from "../../interface";
import { encryptedSessionStorage } from "../../storage";

const useAuthenticationStore = create<AuthenticationState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      login: async (email, password) => {
        const res = await axios.post("http://localhost:4000/api/v1/login", {
          email,
          password,
        },);
        set(
          {
            user: res.data.details,
            loading: false,
            error: null
          }
        );
      },

      logout: () => {
        set(
          {
            user: null,
          }
        );
        localStorage.removeItem("user-auth");
        sessionStorage.removeItem("user-auth");
      },
    }),
    {
      name: "user-auth",
      storage: encryptedSessionStorage,
    }
  )
);

export { useAuthenticationStore };
