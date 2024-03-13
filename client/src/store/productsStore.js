import genericStore from "./genericStore";

const useProductsStore = genericStore("products", []);

useProductsStore.addProducts = (productsToAdd) => {
    useProductsStore.setState((state) => ({
      products: productsToAdd,
    }));
  };

export default useProductsStore;