// store.ts
import { create } from "zustand";

type Person = {
  id: number;
  name: string;
  // Add more fields as needed
};

type PersonStore = {
  persons: Person[];
  setPersons: (data: Person[]) => void;
};

export const usePersonStore = create<PersonStore>((set) => ({
  persons: [],
  setPersons: (data) => set({ persons: data }),
}));
