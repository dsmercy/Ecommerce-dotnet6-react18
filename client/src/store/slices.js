import commonFunctions from "../Helpers/comonFunctions";


export const createGenericSlice = (set) => ({
    addData: (key) => {
        set((state) => ({ [key]: state[key] + 1 }));
    },
});

export const createFishSlice = (set) => ({
    fishes: 0,
    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})

export const createProductSlice = (set) => ({
    products: [],
    addProducts: (item) => set((state) => ({ products: item }))
})

export const createCartSlice = (set) => ({
    carts: [],
    addCart: (productId, quantity) =>
        set((state) => {
            // Check if productId already exists in carts
            const existingProductIndex = state.carts.findIndex((item) => item.productId === productId);

            if (existingProductIndex !== -1) {
                // If productId exists, update quantity of existing object
                const updatedCarts = [...state.carts];
                updatedCarts[existingProductIndex].quantity += quantity;

                // Check if quantity becomes 0 or less, then remove the product from carts
                if (updatedCarts[existingProductIndex].quantity <= 0) {
                    updatedCarts.splice(existingProductIndex, 1);
                }

                return { carts: updatedCarts };
            } else {
                // If productId does not exist, add new object to carts
                return { carts: [...state.carts, { productId, quantity }] };
            }
        }),
})
