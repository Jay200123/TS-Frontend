import axios from "axios";
import { create } from "zustand";
import {
  AccessoryState,
  AccessoryAPI,
  AccessoryByIdAPI,
  Accessory,
} from "./../../interface";

const useAccessoriesStore = create<AccessoryState>((set) => ({
  accessories: [],
  accessory: null,
  loading: false,
  error: null,
  getAllAccessories: async () => {
    const res = await axios.get<AccessoryAPI>(
      "http://localhost:4000/api/v1/accessories"
    );
    set(
      { 
         accessories: res.data.details,
         loading: false,
         error: null
        }
      );
  },

  getAccessoryById: async (id: string) => {
    const res = await axios.get<AccessoryByIdAPI>(
      `http://localhost:4000/api/v1/accessory/${id}`
    );
    set({
      accessory: !Array.isArray(res.data.details) ? res.data.details : null,
      loading: false,
      error: null,
    });
  },

  createAccessory: async (formData: FormData) => {
    const res = await axios.post<Accessory>(
      "http://localhost:4000/api/v1/accessories",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    set((state) => ({
      accessories: [...state.accessories, res.data],
    }));
  },

  updateAccessoryById: async (id: string, formData: FormData) => {
    const res = await axios.put<Accessory>(
      `http://localhost:4000/api/v1/accessories/edit/${id}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    set((state) => ({
      accessories: state.accessories.map((a) =>
        a._id === id ? res.data : a
      ),
    }));
  },
}));

export { useAccessoriesStore };
