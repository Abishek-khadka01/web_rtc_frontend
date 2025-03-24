import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type useStoreDataType = {
  isLoggedin: boolean;
  username: string;
  _id: string;
  profilePicture: string;
  email: string;
  setData: (id: string, username: string, email: string, profilePicture?: string) => void;
  getData: () => useStoreDataType;
  AddProfile: (profilePicture: string) => void;
  removeDetails: () => void;
};

const useUserStore = create<useStoreDataType>()(
  persist(
    (set, get) => ({
      isLoggedin: false,
      username: "",
      _id: "",
      profilePicture: "",
      email: "",

      setData: (id, username, email, profilePicture = "") => {
        set({
          _id: id,
          username,
          email,
          profilePicture,
          isLoggedin: true,
        });
      },

      getData: () => get(),

      AddProfile: (profilePicture) => {
        set({
          profilePicture,
        });
      },

      removeDetails: () => {
        set({
          _id: "",
          username: "",
          profilePicture: "",
          email: "",
          isLoggedin: false,
        });
      },
    }),
    {
      name: "user-storage", // The name of the key in localStorage
      storage: createJSONStorage(() => localStorage), // Use createJSONStorage to handle JSON in localStorage
    }
  )
);

export default useUserStore;
