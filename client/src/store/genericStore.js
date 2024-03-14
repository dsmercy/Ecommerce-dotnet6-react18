import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const genericStore = (dataKey, initialState = []) => {
  return create(
    persist(
      devtools((set) => ({
        [dataKey]: initialState,

        createItem: (key, item) => {
          set((state) => ({ [dataKey]: [...state[dataKey], item] }));
        },

        readItems: () => {
          return { [dataKey]: [...set()[dataKey]] };
        },

        updateItem: (key, itemId, updatedItem) => {
          set((state) => ({
            [dataKey]: state[dataKey].map((item) =>
              item[key] === itemId ? { ...item, [key]: updatedItem } : item
            ),
          }));
        },

        deleteItem: (key, itemId) => {
          set((state) => ({
            [dataKey]: state[dataKey].filter((item) => item[key] !== itemId),
          }));
        },

        clearItems: () => {
          set(() => ({ [dataKey]: initialState }));
        },
      })),
      { name: dataKey }
    )
  );
};
export default genericStore;