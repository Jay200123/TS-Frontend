import CryptoJS from "crypto-js";
import { createJSONStorage } from "zustand/middleware";

// Define a secret key for encryption and decryption
const SECRET_KEY = "Z3v$";

const encryptedSessionStorage = createJSONStorage(() => ({
  getItem: (name: string) => {
    const item = sessionStorage.getItem(name);
    if (item) {
      const bytes = CryptoJS.AES.decrypt(item, SECRET_KEY);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData);
    }
    return null;
  },
  setItem: (name: string, value: any) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), SECRET_KEY).toString();
    sessionStorage.setItem(name, encryptedData);
  },
  removeItem: (name: string) => {
    sessionStorage.removeItem(name);
  },
}));

export { encryptedSessionStorage };